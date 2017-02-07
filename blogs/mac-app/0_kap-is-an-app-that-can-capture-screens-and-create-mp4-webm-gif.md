---
title: 【Kap】スクリーンをキャプチャしてmp4やwebm、gifを作成できるアプリ
---

仕事などでよく相手に、手順を説明しないといけない時があります。どう説明いいのか分からない時とか、説明をダラダラ伝えるよりかは、1枚Gif画像なんかを作って渡したほうが、こっちは伝えやすいし、相手は分かりやすかったりします。そんな時に便利なのがスクリーンを録画して、`.gif`や`.mp4`、`.webm`ファイルで出力できる[https://getkap.co/](Kap)です。

<!-- break -->

## インストール

[https://getkap.co/](Kap)は公式サイトの「GET APP」と書かれたボタンからダウンロードしてインストールすることができます。また、`brew cask`コマンドが使える人は以下のコマンドで一発で入れることができます。

```bash
brew cask install kap
```

## 録画してみる

起動するとメニューバーにこんな丸いアイコンが増えるはずです。

![Kap on menu bar](/mac-app/images/kap-is-an-app-that-can-capture-screens-and-create-mp4-webm-gif/kap-on-menu.png)

ここをクリックするとこんなポップアップがでます。

![Kap popup](/mac-app/images/kap-is-an-app-that-can-capture-screens-and-create-mp4-webm-gif/kap-popup.png)

この画面ではこんなことが設定できます。

- マウスアイコンはカーソルを表示するか
- マイクは音声を録るか
- `Accept ratio`は撮影する領域の設定
- `Export as`は拡張子の設定

撮影する領域は、この赤丸をクリックするとこんなボーダーがdashな四角いものが現れるので、この端をドラッグしてサイズを変えることもできます。

![Kap accept raiot](/mac-app/images/kap-is-an-app-that-can-capture-screens-and-create-mp4-webm-gif/kap-accept-ratio.png)

サイズ調整が終わったらもう一度赤丸をクリックすると撮影が開始されます。撮影を終わりたい時は、またメニューバーのアイコンをクリックして、適当な場所に保存することができます。

<say>
個人的には、撮影後に別の拡張子にできたらいいなと思いました。ここを失敗すると撮影し直しなので😣
</say>
