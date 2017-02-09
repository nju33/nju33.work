---
title: Hello　CircleJS
---

CircleJSにもVue-initのように開発環境を一発で作れるコマンドがあるみたいなので使ってみます。まずはインストールが必要です。

```bash
npm i -g create-cycle-app
```

そして、`create-cycle-app <プロジェクト名> --flavor <flavor名>`という感じで指定します。`flavor`はこれを書いている段階では`cycle-scripts-one-fits-all`というのしか無いのでこれを指定します。

```bash
create-cycle-app my-app --flavor cycle-scripts-one-fits-all
```

<say>
この記事を書いている、2月頭では、公式サイトに乗っているやり方`create-cycle-app <app-name>`だけではできなくなっていて、`flavor`というTemplate名みたいなものを指定しないといけなくなったよう([cyclejs-community/create-cycle-app-flavors](https://github.com/cyclejs-community/create-cycle-app-flavors))
</say>

成功すると以下のような文面がでます。

```bash
Success! Created my-app at /Users/nju33/test/ccc/apppp/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server

  npm test
    Start the test runner

  npm run build
    Bundles the app into static files for production

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you cant go back!

We suggest that you begin by typing:

  cd my-app
  npm start
```

上記の文面の通り、`npm start`すると[localhost:8080](http://localhost:8080)でサーバーが立ち上がり、「My Awesome Cycle.js app」が表示されました。
