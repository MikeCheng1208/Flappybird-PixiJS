function touchControl(bird) {
    app.stage.interactive = true;
    app.isStart = false;
    let g = 0.3;
    let vy = 0;
    let bounce = -7;
    let isUp = false;
    
    app.ticker.add(t => {
        if (!app.isStart) return;
        vy += g;
        bird.y += vy;
        if (isUp) {
            vy = bounce;
            isUp = false;
        }
    })

    app.stage.on('pointerdown', () => {
        app.isStart = true;
        if (isUp) return;
        isUp = true;
        app.gameStart = true;           //遊戲開始
        app.start_ui.visible = false;   //開始ui
        TweenMax.to(bird, 0.1, { rotation: -0.5 ,onComplete:birdRotation });
    });
    function birdRotation() {
        TweenMax.to(bird, 2, { rotation: 0.5});
    }

}

