function Tube() {
    this.Hit_X = [429, 629, 829];
    this.Hit_Y = [0, -60, -120];

    const r0 = Math.floor(Math.random() * (3 - 0 + 0) + 0);
    const r1 = Math.floor(Math.random() * (3 - 0 + 0) + 0);
    const r2 = Math.floor(Math.random() * (3 - 0 + 0) + 0); 

    const tube1 = new tubeGroup();
    const tube2 = new tubeGroup();
    const tube3 = new tubeGroup();

    tube1.position.set(this.Hit_X[0], this.Hit_Y[r0]);
    tube2.position.set(this.Hit_X[1], this.Hit_Y[r1]);
    tube3.position.set(this.Hit_X[2], this.Hit_Y[r2]);

    app.stage.addChild(tube1);
    app.stage.addChild(tube2);
    app.stage.addChild(tube3);
    
    this.move(tube1, 1.5);
    this.move(tube2, 1.5);
    this.move(tube3, 1.5);

    app.tube1 = tube1;
    app.tube2 = tube2;
    app.tube3 = tube3;
}
Tube.prototype.move = function (mc, speed) {
    app.ticker.add(t => {
        if (!app.gameStart) return;
        if (app.gameOver) return;
        mc.x -= speed;
        if (mc.x < -mc.width) {
            const t = Math.floor(Math.random() * (3 - 0 + 0) + 0);
            mc.x = 629 - mc.width;
            mc.y = this.Hit_Y[t];
        }
    })
}
