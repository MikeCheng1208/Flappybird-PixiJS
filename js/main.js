const app = new PIXI.Application({
    width: 429,
    height: 572,
    backgroundColor: 0x3e81bb,
})
app.stageW = 429;
app.stageH = 572;
app.bird_mc = null
const renderer = app.renderer;
const game = document.getElementById('game');
game.appendChild(app.view);
PIXI.loader.add("../images/flappybird.json").load(init);
function init() {
    app.pic = PIXI.loader.resources["../images/flappybird.json"].textures;
    var stageBg = new PIXI.Sprite(app.pic["stage.jpg"]);
    app.stage.addChild(stageBg);

    touchControl( new Bird() );

}