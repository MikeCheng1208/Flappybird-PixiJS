function Boom() {
    let bm = [];
    for (let i = 2; i < 22; i++) {
        if (i < 10){
            bm.push(PIXI.Texture.fromFrame('c0' + i + '.png'))
        } else {
            bm.push(PIXI.Texture.fromFrame('c' + i + '.png'))
        }
    }
    AminateMoveClip.call(this, bm, true);
    this.animationSpeed = 0.6;
    this.loop = false;
    this.onComplete = function () {
        this.visible = false;
    };
    this.play();
}
Boom.prototype = Object.create(AminateMoveClip.prototype);