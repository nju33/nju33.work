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
