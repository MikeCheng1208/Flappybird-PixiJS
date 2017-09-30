function Bird() {
    let fF = [
        PIXI.Texture.fromFrame("bird01.png"),
        PIXI.Texture.fromFrame("bird02.png"),
        PIXI.Texture.fromFrame("bird03.png"),
    ];
    AminateMoveClip.call(this, fF, true);
    app.bird_mc = this;
    this.animationSpeed = 0.15;
    this.x = app.stageW / 2;
    this.y = app.stageH / 3;
    this.play();
}
Bird.prototype = Object.create(AminateMoveClip.prototype);


