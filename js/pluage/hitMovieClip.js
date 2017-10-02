function HitMovieClip(bird, obj) {
    if (app.gameOver) return;
    if (hitTestRectangle(bird, obj)) {
        app.gameOver = true;
        let boom = new Boom();
        app.bird_mc.visible = false;
        boom.x = app.bird_mc.x;
        boom.y = app.bird_mc.y;
    }
}