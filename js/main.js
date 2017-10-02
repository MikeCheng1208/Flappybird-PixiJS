const app = new PIXI.Application({
    width: 429,
    height: 572,
    backgroundColor: 0x3e81bb,
})
app.stageW = 429;
app.stageH = 572;
app.gameStart = false; //遊戲開始
app.gameOver = false; //遊戲結束

app.bird_mc = null;
app.Boom_mc = null;
app.start_ui = null;
app.floor1 = null;
app.floor2 = null;
app.tube1 = null;
app.tube2 = null;
app.tube3 = null;


const renderer = app.renderer;
const game = document.getElementById('game');
game.appendChild(app.view);
PIXI.loader.add("../images/flappybird.json").load(init);
function init() {
    app.pic = PIXI.loader.resources["../images/flappybird.json"].textures;
    app.hit = new Bump(PIXI);
    
    let stageBg = new PIXI.Sprite(app.pic["stage.jpg"]);
    app.stage.addChild(stageBg);
    new Tube();
    new Floor();
    new StartUi()
    touchControl(new Bird());

}