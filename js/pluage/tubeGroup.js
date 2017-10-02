function tubeGroup() {
    let tube = new PIXI.Container();
    let tubeTop = new PIXI.Sprite(app.pic["g06.png"]);
    let tubeButton = new PIXI.Sprite(app.pic["g07.png"]);

    
    tubeButton.y = 450;
    tubeTop.interactive = true;
    tubeButton.interactive = true;
    tubeTop.hitArea = new PIXI.Rectangle(0, 0, 79, 260);
    tubeButton.hitArea = new PIXI.Rectangle(0, 450, 79, 260);
    /* ----碰撞區-------------------------------- */
    // let tubeTop_hit = new PIXI.Graphics();
    // let tubeTop_Button = new PIXI.Graphics();

    // tubeTop_hit.lineStyle(2, 0xFF00FF, 1);
    // tubeTop_Button.lineStyle(2, 0xFF00FF, 1);
    // tubeTop_hit.drawRect(0, 0, 79, 260);
    // tubeTop_Button.drawRect(0, 450, 79, 260);

    // tube.addChild(tubeTop_hit);
    // tube.addChild(tubeTop_Button);
    
    /*-----------------------------------------------*/

    tube.addChild(tubeTop);
    tube.addChild(tubeButton);
    return tube;
}
    