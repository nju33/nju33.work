<template>
  <section>
    <header>
      <a href="#">
        <h1 class="title">
          <span class="title-text">nju33<span class="title-text-small">.ki</span></span>
        </h1>
      </a>
      <!-- <h1 class="title">nju33</h1> -->
    </header>

    <section class="section">
      <header class="section-header">
        <h2 class="section-title">Electron Application</h2>
      </header>

      <ul class="list">
        <li v-for="item in apps" class="card">
          <nuxt-link class="card-link" :to="`/electron-application/${item.name}`">
            <section>
              <div class="item-icon-wrapper">
                <div class="item-icon"
                  :style="{'background-image': `url(${item.icon})`}"></div>
              </div>
              <h3 class="item-name" v-text="item.name"></h3>
              <div class="item-desc" v-html="item.desc"></div>
            </section>
          </nuxt-link>
        </li>
      </ul>
    </section>

    <section class="section">
      <header class="section-header">
        <h2 class="section-title">Chrome Extension</h2>
      </header>

      <ul class="list">
        <li v-for="item in chromeExts" class="card">
          <section>
            <div class="item-icon-wrapper">
              <div class="item-icon"
                :style="{'background-image': `url(${item.icon})`}"></div>
            </div>
            <h3 class="item-name" v-text="item.name"></h3>
            <div class="item-desc" v-text="item.desc"></div>
          </section>
        </li>
      </ul>
    </section>

    <section class="section">
      <header class="section-header">
        <h2 class="section-title">Atom Package</h2>
      </header>

      <ul class="list">
        <li v-for="item in atomPkgs" class="card">
          <section>
            <div class="item-icon-wrapper">
              <div class="item-icon"
                :style="{'background-image': `url(${item.icon})`}"></div>
            </div>
            <h3 class="item-name" v-text="item.name"></h3>
            <div class="item-desc" v-text="item.desc"></div>
          </section>
        </li>
      </ul>
    </section>

    <section class="section">
      <header class="section-header">
        <h2 class="section-title">NPM Package</h2>
      </header>

      <ul class="list">
        <li v-for="item in npmPkgs" class="card">
          <section>
            <div class="item-icon-wrapper">
              <div class="item-icon"
                :style="{'background-image': `url(${item.icon})`}"></div>
            </div>
            <h3 class="item-name" v-text="item.name"></h3>
            <div class="item-desc" v-text="item.desc"></div>
          </section>
        </li>
      </ul>
    </section>

    <section class="section">
      <header class="section-header">
        <h2 class="section-title">Blog</h2>
      </header>

      <ul class="list">
        <li v-for="item in blogs" class="card">
          <a class="card-link" :href="`https://${item.name}.nju33.work`">
            <section>
              <div class="item-icon-wrapper">
                <div class="item-icon"
                  :style="{'background-image': `url(${item.icon})`}"></div>
              </div>
              <h3 class="item-name" v-text="item.name"></h3>
              <div class="item-desc" v-text="item.desc"></div>
            </section>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        blogs: [
          {
            icon: '/images/javascript.nju33.work/icon_128x128@2x.png',
            name: 'javascript',
            desc: 'JavaScriptでやってみたことなど。'
          },
          {
            icon: '/images/mac-app.nju33.work/icon_128x128@2x.png',
            name: 'mac-app',
            desc: '使ってみたMacAppなどの紹介。'
          }
        ],
        apps: [
          {
            icon: '//github.com/nju33/pocket-pocket/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Pocket Pocket',
            desc: '複数タグで絞込検索ができる非公式Pocketアプリ。'
          },
          {
            icon: '//github.com/nju33/netfri/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Netfri',
            desc: '他ウィンドウに被らないようにしたり、直ぐにマイリストから再生できるようなど、細かい点を修正した非公式Netflixアプリ。'
          },
          {
            icon: '//github.com/nju33/cama/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Cama',
            desc: 'ショートカットで直ぐさま表示して、テキスト計算が行えます。'
          },
          {
            icon: '//github.com/nju33/fusen/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Fusen',
            desc: '常に一番上のWindowで表示することができる付箋ノートです。'
          },
          {
            icon: '//github.com/nju33/eziten/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Eziten',
            desc: '絵文字を一覧で表示できて、クリックで直ぐ様コピーできます。'
          },
          {
            icon: '//github.com/nju33/jogich/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Jogich',
            desc: 'ショートカットで呼び出して、簡単な操作で気になる要素のサイズを図ることができる定規です。'
          },
          {
            icon: '//github.com/nju33/share-on/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Share On',
            desc: 'メニューバーのアイコンにファイルをドロップするだけで即座にファイルをシェアできます。',
          },
          {
            icon: '//github.com/nju33/immi/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Immi',
            desc: 'メニューバーに画像ファイルをドロップして圧縮できるアプリ。（ただコマンドで実行する必要あり）'
          },
        ],
        chromeExts: [
          {
            icon: '//github.com/nju33/chrome-tab-limiter/blob/master/dev/icon/icon_128.png?raw=true',
            name: 'Tab Limiter',
            desc: 'タブの数に制限を持たせるることで、事前にChromeの不具合を防ぎます。'
          },
          {
            icon: '//github.com/nju33/chrome-owloom/blob/master/extension/icons/icon_128x128.png?raw=true',
            name: 'Owloom',
            desc: 'より良くChromeのブックマークを活用するための拡張です。'
          },
          {
            icon: '//github.com/nju33/chrome-ll/blob/master/app/icons/icon128.png?raw=true',
            name: 'Ll',
            desc: 'ページURLに名前を付けて、その名前でアクセスできるようになります。'
          },
          {
            icon: '//github.com/nju33/chrome-ll-tab/blob/master/app/icons/icon_128x128.png?raw=true',
            name: 'Ll Tab',
            desc: '開かれてるタブをタイトルかURLで検索して、マッチしたタブをアクティブにします。'
          },
          {
            icon: '//github.com/nju33/chrome-hahaki/blob/master/app/icon/icon_128.png?raw=true',
            name: 'Hahaki',
            desc: '狙った画像だけのダウンロードが可能です。'
          },
          {
            icon: '',
            name: 'Like One Dark Theme',
            desc: 'AtomのOneDarkのようなテーマ。'
          },
        ],
        atomPkgs: [
          {
            icon: '//github.com/nju33/atom-pane-browser/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Pane Browser',
            desc: 'ブラウザと同じようにブラウジングや開発が行えます。'
          },
          {
            icon: '',
            name: 'Google Translate Modal',
            desc: 'ショートカットで直ぐさまGoogleTranslateページを開きます。'
          },
          {
            icon: '//github.com/nju33/atom-colorio/blob/master/media/icon_512x512.png?raw=true',
            name: 'Colorio',
            desc: '調べたい色について詳細を見ることができます。'
          },
          {
            icon: '',
            name: 'Flex Tab Bar',
            desc: 'タブバーをFlex化します。'
          },
          {
            icon: '',
            name: 'Tab Limiter',
            desc: 'タブ数に上限を設定します。'
          },
          {
            icon: '',
            name: 'Maximize Space Pane',
            desc: '現在のPaneをワークスペースいっぱいに広げることができます。'
          },
          {
            icon: '//github.com/nju33/atom-tmproject/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Tmproject',
            desc: '現在のWindowを開いてるときだけ有効なプロジェクトを作ります。'
          },
        ],
        npmPkgs: [
          {
            icon: '//github.com/nju33/hai/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Hai',
            desc: 'ツールチップのような感じで、ユーザーに確認ダイアログを出したりすることができます。'
          },
          {
            icon: '',
            name: 'Taba',
            desc: 'テーブル要素のヘッダーやフッターをポジション固定表示できます。'
          },
          {
            icon: '',
            name: 'Rangebar',
            desc: 'スタイルをカスタマイズできる、input[type=range]のような要素です。'
          },
          {
            icon: '',
            name: 'Suwa',
            desc: '簡単なレイアウトでカルーセルな要素を作ります。'
          },
          {
            icon: '',
            name: 'Mohill',
            desc: '下から伸びるようなモーダル。'
          },
          {
            icon: '',
            name: 'Diz',
            desc: '静的サイトジェネレータ。'
          },
          {
            icon: '',
            name: 'PostCSS Namespace',
            desc: 'セレクタにプレフィックスを付けれるPostCSSプラグイン。'
          },
        ]
      };
    }
  }
</script>-

<style scoped>
.title {
  margin: 0;
  background:
    url(~assets/nju33.svg),
    url(~static/images/background2.png);
  background-repeat: no-repeat, repeat;
  background-position: center center;
  background-size: cover, 7em 7em;
  height: 13em;
  width: 100%;
  overflow: hidden;
  position: relative;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

.title-text {
  position: absolute;
  /*right: 1em;*/
  /*top: .8em;*/
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  font-size: 5em;
  text-shadow:
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313,
    0 .05em .02em #131313;
  color: #fff;
  /*opacity: .6;*/
}

.title-text-small {
  font-size: .25em;
  opacity: .8;
  color: #aaa;
}

.section {
  max-width: 660px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
}

.section-title {
  margin-bottom: .3em;
}

.section-desc {
  margin: 0;
}

.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 1em 0;
}

.card {
  flex: auto;
  max-width: 50%;
  min-width: 50%;
  box-sizing: border-box;
  padding: .5em;
  margin: 1em 0;
}

.card-link {
  color: inherit;
}

.card-link:hover .item-name {
  color: #B35C37;
}

.item-icon-wrapper {
  padding: .5em;
  background-color: #222;
}

.item-icon {
  width: 100%;
  height: 8em;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.item-name {
  text-align: center;
  padding: .3em 0;
  margin: 0;
  transition: .2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /*background: #fff;*/
}

.item-desc {
  font-size: .85em;
  padding: .3em .5em;
  /*background: #fff;*/
}
</style>
