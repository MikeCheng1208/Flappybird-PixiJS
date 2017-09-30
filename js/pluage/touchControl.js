function touchControl(bird) {
    app.stage.interactive = true;

    let g = 0.2;
    let vy = 0;
    let bounce = -0.7;
    let isUp = false;
    app.ticker.add(t => {
        vy += g;
        bird.y += vy;
        if (isUp) {
            vy = bounce;
            isUp = false;
        }
    })
    app.stage.on('pointerdown', () => {
        if (isUp) return;
        isUp = true;
    });

}

