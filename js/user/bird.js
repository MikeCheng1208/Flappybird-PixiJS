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
        HitMovieClip(bird, app.tube1.children[0]);
    })
}

