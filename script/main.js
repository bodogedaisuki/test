// グローバルに展開
phina.globalize();
/*
 * メインシーン
 */
phina.define("MainScene", {
    // 継承
    superClass: 'DisplayScene',
    // 初期化

    init: function () {
        // 親クラス初期化
        this.superInit();
        // 背景色
        this.backgroundColor = '#7fffff';
        // 以下にコードを書いていく


        let group = DisplayElement().addChildTo(this);
        const widthY = this.gridY.width;
        const pastel = ['#ff7f7f', '#ff7fbf', '#ff7fff', '#bf7fff', '#7f7fff', '#7fbfff', '#7fffff', '#7fffbf', '#7fff7f', '#bfff7f', '#ffff7f', '#ffbf7f'];
        const randNum1 = [-5, -4, -3, -2, -1, 0];
        const randNum2 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

        this.onpointstart = function (e) {
            CircleShape({
                fill: pastel.random(),
                stroke: '#7f7fff',
                strokeWidth: 16,
                radius: 64
            }).addChildTo(group).setPosition(e.pointer.x, e.pointer.y).physical.force(randNum2.random(), randNum1.random()).gravity.set(0, 0.1);
        }

        group.update = function () {
            group.children.eraseIfAll(function (elem) {
                if (elem.y >= widthY) {
                    return true;
                }
            });
        }

    },
    // 毎フレーム更新処理
    update: function () {
        // 以下にコードを書いていく  

        
    },
});
/*
 * メイン処理
 */
phina.main(function () {
    // アプリケーションを生成
    var app = GameApp({
        // MainScene から開始
        startLabel: 'main',
    });
    // fps表示
    //app.enableStats();
    // 実行
    app.run();
});