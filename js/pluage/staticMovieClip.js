function StaticMovieClip(texture) {
    PIXI.Sprite.call(this, app.pic[texture]);
    app.stage.addChild(this);
}
StaticMovieClip.prototype = Object.create(PIXI.Sprite.prototype);
StaticMovieClip.prototype.move = function (mc, speed) {
    app.ticker.add(t => {
        if (app.gameOver) return;
        mc.x -= speed;
        if (mc.x < -app.stageW) { 
            mc.x = app.stageW;
        }
    })
} 