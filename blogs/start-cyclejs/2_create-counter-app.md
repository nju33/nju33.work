---
title: カウンターアプリを作る
---

## カウンターアプリを作る

最初Todoを作ろうと思ったんですが、ざっとドキュメント見た限り「なんのこっちゃ」だったので、簡単なカウンターアプリでちょっとずつ理解する作戦にしました。結果から言うと、`app.tsx`だけ編集してこんな感じになりました。

<say>
TypescriptのJSXでTSXと言うらしい、初めて知った🙂
</say>

```ts
import xs, {Stream} from 'xstream';
import {VNode} from '@cycle/dom';
import {Sources, Sinks} from './interfaces';

export function App(sources : Sources) : Sinks {
  let count = 0;

  const vdom$ : Stream<VNode> = sources.DOM.select('button').events('click')
    .map(e => Number(e.target.value))
    .startWith(0)
    .map(value => {
      count += value;
      return (
        <div>
          <h1>Counter</h1>
          <h2>{count}</h2>
          <button value={1}>Increment</button>
          <button value={-1}>Decrement</button>
        </div>
      );
    });
  return {DOM: vdom$};
}
```

上記で説明するとこと言えば`vdom$`に入れてるStreamの所ぐらいですかね。

`sources.DOM.select('button').events('click')`はボタンにイベントを登録しています。`document.getElementByTagName('button').addEventListener('click', ...)`的なやつですね。

まだ一回もイベントが起きてない時用になんですが、`startWith`で流れるデータの一番最初の値を設定することができます。初期値を設定しないと処理が流れるための値がないので、DOMがレンダリングされることもなくなってしまいます。

`<button/>`がクリックされるとその要素のイベントが`map`に渡されます。ここでそれを本当に使いたい値に変換しますが、そのタイプは`startWith`と同じもので返すようにします。

つまりこう書くことはできません。`0`に`.target`なんてプロパティはない為です。

<say>
最初書いちゃったやつ
</say>

```ts
const vdom$: Stream<VNode> = sources.DOM.select('button').events('click')
  .startWith(0)
  .map(e => {
    count += Number(e.target.value);
    return (...);
  });
```

まぁとりあえず、これでいいのか分かりませんが、カウントできるやつができました。

![Counter app complete](/start-cyclejs/images/create-counter-app/complete.png)

## カウンターアプリをもうちょい改善する

ここは追記なんですが、実は上記のコードはちゃんとドキュメントを読んでなくて、CycleJSはMVIなんだって所すら読んでなくて書き方とかどうやって書くのが正しいのかよく分かっていなかった。翌日ドキュメントサイトに一通り目を通して、CycleJSを書く時はこんな感じで考えてかけばいいんだなーというのが分かった。

- **Intent** / ユーザーの「これをクリックしてカウントを増やしたい」とか「これをクリックしてカウントを減らしたい」みたいな、そのページ上でユーザーがやりたいと思いそうなActionから、それによって起こる副作用の実装までを担当

- **Model** / Intentで指定したActionの初期値を設定したり、Viewで使いたいデータへ変換(2つのStreamを1つに合わせたり)処理を書く

- **View** / Modelで定義した値を使ってHTML部分を作る

こんな感じの理解で上記セクションのコードを修正したらこんな感じになりました。

```ts
import xs, {Stream} from 'xstream';
import {VNode} from '@cycle/dom';

import {Sources, Sinks} from './interfaces';

export function App(sources : Sources) : Sinks {
  // intent
  interface Action {
    increment : Stream<number>;
    decrement : Stream<number>;
  };
  const action$ : Action = {
    increment: sources.DOM.select('.increment').events('click').mapTo(+1),
    decrement: sources.DOM.select('.decrement').events('click').mapTo(-1)
  };

  // model
  interface State {
    count : Stream<number>;
  };
  const state$ : State = {
    count: (() => {
      return xs.merge(action$.increment, action$.decrement)
        .fold((sum, n) => sum + n, 0);
    })()
  };

  // view
  const vdom$ : Stream<VNode> = state$.count.map(count => {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button className='increment'>Increment</button>
        <button className='decrement'>Decrement</button>
      </div>
    );
  });

  return {
    DOM: vdom$
  };
}
```

`.fold`の辺りとか分かりづらいので自分なりに説明してみます。

`action$`で定義してる2つのActionで使われている`.events`で`event`が流れますが、`mapTo`は流れてきた値をすべて指定した値にしてしまうメソッドです。`map(() => -1)`みたいなのと同じだと思います。

`xs.merge`で2つのStreamの延長線上に共通の処理を追加することができて、今回だと`.fold`を追加してます。
これはJavaScriptの`.reduce`と似ていて2つ目の引数に初期値が来ます。つまり上記の`count`は最初は`0`という値が設定されます。

そして、例えば`.increment`なボタンが押されるとActionの段階では`+1`のStreamが、`.fold`に渡ってきて`sum=0, n=1`という風に値が入るので、`count`は1になります。もう一度同じボタンを押すと`sum=1, n=1`で`1+1=2`という感じになって、その後デクリメントすると`sum=2, n=-1`で`2-1=1`と`count`は変わります。

うーん、理解できたようなできないような。とりあえず何となく分かってきたような気がするので次はTodoアプリでも作りたいと思います。
