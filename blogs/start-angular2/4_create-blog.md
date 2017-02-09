---
title: ブログを作る
---

今度は`@angular/router`と`@angular/http`辺りを理解するためにブログを簡単に作ってみたいと思います。

## プロジェクト作成

これは前回と同様`ng init`で作っちゃってください。

```
mkdir project-dir && cd $_; ng init
```

## ルーティング設計

CRUDな感じで作ります。つまり以下のような感じです。

- `GET /posts` / 投稿一覧ページ
- `GET /posts/:id` / 詳細ページ
- `GET /posts/new` / 新規ポストページ
- `POST /posts/new` / 新規ポストリクエスト
- `GET /posts/:id/edit` / 編集ページ
- `PUT /posts/:id` / 編集リクエスト
- `Delete /posts/:id` / ページ削除リクエスト

ここではAPIで[Json-server](https://github.com/typicode/json-server)をこんな感じの初期データを入れたJSONファイル、`db.json`を使います。

<say>
これっぽい感じで使えるならなんでも良いです🤓
</say>

```json
{
  "posts": [
    {
      "id": 1,
      "title": "title",
      "contents": "contents"
    }
  ]
}
```

こんな感じで起動しといてください。

```bash
#  ↓ インストールがまだなら
# npm i -g json-server
json-server db.json
```

## ルーティング設定

では、`app.module.ts`を編集していきます。ルーティング設定には最低でも`RouterModule`と`Routes`が入ります。`RouterModule`はルーティングに必要なComponentやらDirectiveをまとめて使えるようにするもので、`Routes`には配列で「このPathならこのComponentを使う」という設定をガンガン入れていくものです。

```ts
import {RouterModule, Routes} from '@angular/router';
```

とりあえずこんな感じで一覧ページだけ設定して、`imports`で読み込みます。とりあえずです。

```ts
const blogRoutes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

// ...

@NgModule({
  // ...
  imports: {
    // ...
    RouterModule.forRoot(blogRoutes)
  }
  // ...
})
```

上記の設定はこんな感じです。

- `redirectTo`は、適用されたときにそのURLへリダイレクトさせます。
- `component`はマッチした時にどのコンポーネントを使うかを指定します。`redirectTo`かどちらかは必要だという認識でいいと思います。
- `pathMatch: full`は`path`が完全にマッチした時に適用されます。`pathMatch: prefix`という指定の仕方もあってこちらは前方一致になります。
- `**`はどこにもマッチしなかった時に適用されます。

## PostListComponentとNotFoundComponentを作る

これを作らなきゃ`ng serve`すら出来ないのでさくっと作りましょう。

```bash
ng g component post-list
ng g component not-found
```

じゃあここからは`ng serve`して画面を見ながら作っていきましょう。

## BlogServiceを作る

ここではAPIと通信を行ったりする表示をまとめて書いてしまいます。とりあえずやることは一覧を取得することですね。まず`ng g service blog`でBlogServiceを作りましょう。そして、`blog.service.ts`を編集します。

と、その前にPostの方を定義してしまいます。`post.ts`を作ってこんな感じにします。

```ts
export default class Post {
  constructor(
    private id: number,
    private title: string,
    private contents: string
  )
}
```

そして、BlogServiceです。Httpというプロバイダーは`ng`コマンドから作ってる人は自動で読み込まれてるはずなので、それをDIして使います。

<say>
DIは、`Dependency injection`の略だそう
</say>

とりあえず、起動されているJson-serverからPost一覧を取得したいと思います。Angular2は結構[RxJS](https://github.com/ReactiveX/RxJS)に依存している感じで、`http.get`の戻り値は`rxjs.Observable.Observable`を返す必要があります。なので、それに関するものを`import`する必要が出てきます。ただ、`ng init`で作られたプロジェクトなら既にインストールされているので、必要なのは`import`だけです。

というわけで、こんな感じに書けば良いです。

```ts
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import Post from './post';

@Injectable()
export class BlogService {
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get('http://localhost:3000/posts')
      .map((res: Response): Post[] => return res.json().data as Post[]);
  }
}
```

`res`には、`status:200`やら`_body: <何かString>`やらが入っているObjectで、`res.json`とすることで`_body`の内容をjson化（多分😅）してくれます。

<say>
`as`はTypeScriptの型変換ですね〜
</say>

さて、じゃあ一覧取得メソッドは書けたので、PostListComponentで取得して表示させてみたいと思います。がその前に、`app.module.ts`の`providers`にBlogServiceを登録する必要がありましたね。

```ts
providers: [BlogService]
```

<say>
完全に忘れてt
</say>

`post-list/post-list.component.ts`を編集します。さっそくBlogServiceをDIして、一覧を取得します。

```ts
import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Response} from '@angular/http';
import Post from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private posts: Post[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts()
      .subscribe(
        (posts: Post[]) => this.posts = posts,
        (err: Response) => console.log(err)
      );
  }
}
```

`subscribe`は`blogService.getPosts`で`map`した後のデータを受け取れます（`Post[]`ですね）。もし`http.get`で何かエラーが起きた時は、`rxjs.Observable.throw`で`Response`がそのまま渡ってくるので、`subscribe`の第2引数にエラー処理も書いておきましょう。

後は、PostListTemplateを編集して表示させるだけですね。一応データが無ければ「ないです」と表示するようにしてます。あと`*`は忘れずに！

<say>
忘れてエラーに悩んだｗこうゆうのはとりあえず、条件によって表示させたり消したりするDirectiveには付けなきゃと覚えとくのがよさそうですね。

にしても、`*`が付いてない`ngFor`が配列の要素が0でも1つあるみたいに実行されるのなんでなんだ🤔
</say>

```html
<div *ngIf="posts.length === 0">Postデータがありません</div>

<ul *ngIf="posts.length > 0">
  <li *ngFor="let post of posts">
    <section>
      <h1>{{post.title}}</h1>
      <div>{{post.contents}}</div>
    </section>
  </li>
</ul>
```

表示するとこまではできました！
