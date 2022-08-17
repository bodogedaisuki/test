phina.globalize(); // phina.jsがこれで使えるようになります。

// phinaではこうやってClassを定義します
// Classよくわからんって人は、「ここで画面（Scene）を作ってる」とおぼえましょう
// ゲーム業界では画面のことをSceneと呼びます。スタート画面、ゲームプレイの画面、メニュー画面など
// DisplaySceneという「画面全体のボス」から、子供のMainSceneという「ゲームプレイ画面」を作りました
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() { // ここはコンストラクタです。一番最初に一回だけやる処理のこと。
    this.superInit(); // 親クラス（DisplayScene）のコンストラクタを呼んでます。
                      // ←←他にもやりたいことがあるときは、ここに追記していきます。
  }
});

// ここがゲームスタートの入り口です
// 今はGameSceneという画面が１つあるだけなので、ただ画面が表示されるだけです。
phina.main(function() {
  var app = GameApp({
    startLabel: 'main'  // 色んな画面を増やしたいときはここに追加していきます。そのうちやりましょう。
  });
  app.run();
});
