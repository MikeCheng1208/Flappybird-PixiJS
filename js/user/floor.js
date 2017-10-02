function Floor() {
    let floor1 = new Floor_mc1();
    let floor2 = new Floor_mc2();

    floor1.x = 0;
    floor1.y = app.stageH - floor1.height;
    
    floor2.x = app.stageW;
    floor2.y = app.stageH - floor1.height;
    
    app.floor1 = floor1;
    app.floor2 = floor2;
    
    this.move(floor1, 1.5);
    this.move(floor2, 1.5);
}
Floor.prototype = Object.create(StaticMovieClip.prototype);
Floor.prototype.move = function (mc, speed) {
    StaticMovieClip.prototype.move.call(this, mc, speed);
}
