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

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() { // ここはコンストラクタです。要は一番最初に一回だけやる処理のこと。
    this.superInit(); // 親クラス（DisplayScene）のコンストラクタを呼んでます。

　　　// 以下追記です
    // newをする必要はありません
    // 直接、必要なオブジェクトの種類を書くと、そのオブジェクトが作成されます。
    // 文字：Label()、キャラ：Sprite()、円形：CircleShape()とかとか
    // 最後の.addChildTo(this)は、作成されたLabelオブジェクトをMainSceneの子供にするよってことです。
    // まず画面があって、そこに必要なオブジェクトを置く、という流れです。
    var label = Label('オッス、, おらphina.js!').addChildTo(this)
    // これ以降でlabelに対して様々な操作をする
    // 「.（ドット）」でつなげていくことで、オブジェクトに対し色々できます。
    // .addChildToで画面に置いたり、setPositionで置く座標を決めたり
    // Javascriptは最後に「；（セミコロン）」を置くことで、行の終わりの意味になります。
    // つまり上の「var label =」から始まって、下の「gridY.center());」までが１行なんです。
      .setPosition(this.gridX.center(), this.gridY.center()); // 位置を指定
  }
});
