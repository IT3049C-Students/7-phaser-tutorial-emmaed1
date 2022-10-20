window.onload = function(){
    var game = new Phaser.Game(config);
}
var config = {
    width: 1320,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2]
}