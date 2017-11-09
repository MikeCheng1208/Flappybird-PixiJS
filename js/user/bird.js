function Bird() {
    let fF = [
        PIXI.Texture.fromFrame("bird01.png"),
        PIXI.Texture.fromFrame("bird02.png"),
        PIXI.Texture.fromFrame("bird03.png"),
    ];
    AminateMoveClip.call(this, fF, true);
    app.bird_mc = this; 
    this.animationSpeed = 0.15;
    this.x = app.stageW / 3;
    this.y = app.stageH / 3;
    this.play();
    this.hit(app.bird_mc);
}
Bird.prototype = Object.create(AminateMoveClip.prototype);

Bird.prototype.hit = function (bird) {
    app.ticker.add(t => {
        HitMovieClip(bird, app.floor1);
        HitMovieClip(bird, app.floor2);
        hitTest(bird, app.tube1);
        hitTest(bird, app.tube2);
        hitTest(bird, app.tube3);
    })
}

function hitTest(m1, m2) {
    if (!app.isStart) return;
    if (app.gameOver) return;
    let m2tx_1 = m2.children[0].worldTransform.tx;
    let m2ty_1 = m2.children[0].transform.worldTransform.ty + m2.children[0].height + m1.height / 2;
    let m2tx_2 = m2.children[1].worldTransform.tx;
    let m2ty_2 = m2.children[1].transform.worldTransform.ty - m1.height / 2;
    if (m2.children[0].id_name == "tubeTop"){   
        if (m1.x + m1.width / 2 >= m2tx_1 && m1.x <= m2tx_1 + m2.children[0].width && m1.y <= m2ty_1) {
            gameOverBoom();
        }
    }
    if (m2.children[1].id_name == "tubeButton") {
        if (m1.x + m1.width / 2 >= m2tx_2 && m1.x <= m2tx_1 + m2.children[0].width && m1.y >= m2ty_2) {
            gameOverBoom();
        }
    }    
}

function gameOverBoom() {
    app.gameOver = true;
    let boom = new Boom();
    app.bird_mc.visible = false;
    boom.x = app.bird_mc.x;
    boom.y = app.bird_mc.y;
}