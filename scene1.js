class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
        this.load.spritesheet("ship", "assests/spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "assests/spritesheets/ship2.png", {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "assests/spritesheets/ship3.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "assests/spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    
        this.load.image("ship", "assets/images/ship.png");
        this.load.image("ship2", "assets/images/ship2.png");
        this.load.image("ship3", "assets/images/ship3.png");
    }
    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}
