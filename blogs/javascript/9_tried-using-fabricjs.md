---
title: FabricJSを使ってみた
---

FabricJSというのは、SVG要素をCanvas化したりまたその逆ができちゃうCanvas用のJavaScriptライブラリです。お互いに変換できるだけじゃなく、canvasの1つ1つのオブジェクトを認識して簡単なマウス操作で**回転**したり**移動**や**リサイズ**できるようにしてくれます。

画像系の何かアプリみたいなのを作れたらいいなぁと思ったので使ってみました。

<!-- break -->

## 環境を整える

今回はJavaScriptをWebpack2でビルドして使います。なので、FabricJSと共に、Webpack関連もインストールします。

```bash
npm i -S fabric
npm i -D webpack webpack-dev-server
```

そして`webpack.config.js`はこんな感じにします。

```js
module.exports = {
  entry: './dev.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
}
```

後は同じディレクトリに`dev.js`と、`bundle.js`を`<script/>`で読み込んだ`*.html`を作って、`$(npm bin)/webpack-dev-server`して、[localhost:8080](http://localhost:8080)にアクセスできれば準備万端です。

## Hello FabricJS!

最初なので簡単に`dev.js`をこんな感じにします。`Canvas`に渡している文字列`c`は、`<canvas/>`の`id`を指定します。

<say>
JavaScriptはDOM構築が終わってから実行してください🙄
</say>

テキストを入れるメソッドは`fabric.Text`です。ポジションの他にCSSのようにスタイルを指定できます。

```js
const {fabric} = require('fabric');

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  const canvas = new fabric.Canvas('c');
  const hello = new fabric.Text('Hello FabricJS!', {
    left: 50,
    top: 50,
    // fontFamily: 'Comic Sans'..
    // fontSize: 40
    // fontWeight: 'normal'
    // textDecoration: 'underline'
    // shadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
    // fontStyle: 'italic',
    // stroke: '#ff1318',
    // strokeWidth: 1
    // textAlign: 'right'
    // lineHeight: 3
    // textBackgroundColor: 'rgb(0,200,0)'
  });
  canvas.add(hello);
}
```

これでこの画像のように表示されるはずです。

![/javascript/images/tried-using-fabricjs/hello-fabricjs.png]

他にもSVGにあるような図形を作るようのクラスも用意されてます。僕がここに使い方書くより[fabric-intro-part-1#objects](http://fabricjs.com/fabric-intro-part-1#objects)を参照したほうが早い気がするので説明は割愛します。

- `fabric.Line`
- `fabric.Circle`
- `fabric.Triangle`
- `fabric.Ellipse`
- `fabric.Rect`
- `fabric.Polyline`
- `fabric.Polygon`

## 画像を入れてみる

じゃあ今度は`fabric`画像を入れてみましょう。2通りの方法があって、まずページに存在する`<img/>`の画像を使いたい場合は`fabric.Image`を使います。

```js
const img = new fabric.Image(document.getElementById('img'), {
  scaleX: 0.3,
  scaleY: 0.3,
});
canvas.add(img)
```

もう一つが画像URLを使う場合です。こっちの場合は`fabric.Image.fromURL`を使います。

<say>
画像はローカルに置いたやつをできれば使ってください。ドメインが違うと画像として保存できない場合があります😱
</say>

```js
const imgURL = 'icon.png'
fabric.Image.fromURL(imgURL, img => {
  img.set({
    scaleX: 0.3,
    scaleY: 0.3,
  });
  canvas.add(img)
});
```

これで画像も入れることができました。

<say>
コレだけで画像をドラッグ・アンド・ドロップで移動までできるのすごい😍
</say>

画像にはCSSの`filter`のように`grayscale`したりする機能も用意されてます。こちらは[fabric-intro-part-2#image_filters](http://fabricjs.com/fabric-intro-part-2#image_filters)とか[fabric.Image.filters](http://fabricjs.com/docs/fabric.Image.filters.html)に書かれてるので必要な場合は参照したらいいと思います。

## 画像を保存できるようにする

`save`ボタンをクリックするたびbase64画像を作って、右クリックで保存できるようにします。まず`*.html`にボタンを追加して、

```html
<canvas id="c"></canvas>
<button id="save">save</button>
```

`dev.js`に処理を追加します。`canvas.toDataURL`でデフォルト設定でPNGなBase64画像が作られます。そして、それを`<img/>`に渡してるだけです。

<say>
`canvas.toSVG`で`<svg/>`にすることもできますよ
</say>

```js
function init() {
  // ... (initの最後)
  const saveBtn = document.getElementById('save');
  const img = document.createElement('img');
  document.body.appendChild(img);
  saveBtn.addEventListener('click', save, false);

  function save() {
    const png = canvas.toDataURL();
    img.src = png;
  }
}
```

とりあえずこれで、saveボタンを押すたびその時のCanvasの状態の画像が出来上がって保存できるようになりました。

何となく使い方も分かったので、時間があれば何か作りたいと思います😇
