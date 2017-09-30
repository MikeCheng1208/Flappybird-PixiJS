function AminateMoveClip(texture) {
    
    PIXI.extras.AnimatedSprite.call(this, texture);
    this.anchor.set(0.5);
    app.stage.addChild(this);

}
AminateMoveClip.prototype = Object.create(PIXI.extras.AnimatedSprite.prototype);

