function StartUi() {
    StaticMovieClip.call(this, "start.png", true);
    this.anchor.set(0.5);
    this.scale.set(0.7, 0.7);
    this.x = app.stageW / 2;
    this.y = app.stageH / 2;
    app.start_ui = this;
}
StartUi.prototype = Object.create(StaticMovieClip.prototype);
