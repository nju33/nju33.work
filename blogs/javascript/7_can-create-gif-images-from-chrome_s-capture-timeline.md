---
title: 【snapline】Chromeのキャプチャータイムラインからgif画像を作成
---

僕は仕事なんかでよくGif画像を取ります。GithubのIssueとかで説明するときダラダラ文章を書くより、Gif画像をﾄﾞｰｰｰﾝと置いてしまったほうが分かりやすいんですよね。

他のキャプチャアプリとか[Kap](https://getkap.co/)とか使ってもいいんですが、キチンとサイズを図ってキャプチャしたい場合におすすめです。

ちなみにChromeだけの話なので、入ってない方は入れるなりしてください😇

<say>
ちなみにKapの使い方は[コチラ](https://mac-app.nju33.work/posts/kap-is-an-app-that-can-capture-screens-and-create-mp4-webm-gif/)
</say>

<!-- break -->

## [Snapline](https://github.com/pmdartus/snapline)のインストール

タイトルに入れてる通り、あとでこのパッケージを使って変換するので入れておいてください。

```bash
npm i -g snapline
```

## 画面の動作を記録する

とりあえずはキャプチャしたいページにアクセスして、開発者ツールを開きます。

<say>
開発者ツールは、「右クリック」→「検証」や「`cmd | ctrl` + `shift` + `i`」同時押しなんかで起動できます。
</say>

起動したら`timeline`タブを開いて、`Screenshots`という項目だけにチェックを入れます。これで準備完了です。

![Env](/javascript/images/can-create-gif-images-from-chrome_s-capture-timeline/env.png)

左上のレコードボタンをクリックして（Macだったら「`cmd` + `e`」同時押しでもいけます）キャプチャしたいページで撮りたい動作を操作します。終わりたい時は、もう一度レコードボタンを押すだけです。

撮ったら連続した画像の上で右クリックして好きな場所に保存してください。

![Recorded](/javascript/images/can-create-gif-images-from-chrome_s-capture-timeline/recorded.png)

## 変換

`snapline`コマンドを叩きます。以下のように叩きます。

```bash
snapline <保存したファイル> -o <変換後の名前>.gif
```

コマンドが実行されて、カレントディレクトリに`<変換後の名前>.gif`があれば大丈夫です！

ちなみに、このブログをキャプチャした感じを置いときます😀

![captured](/javascript/images/can-create-gif-images-from-chrome_s-capture-timeline/captured.gif)

<say>
gif重いか…😱
</say>
