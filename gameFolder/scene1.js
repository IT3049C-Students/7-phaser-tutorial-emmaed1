class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
        this.load.image("background", "gameFolder/assets/images/background.png");
        this.load.spritesheet("ship", "gameFolder/assets/spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "gameFolder/assets/spritesheets/ship2.png", {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "gameFolder/assets/spritesheets/ship3.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "gameFolder/assets/spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("power-up", "gameFolder/assets/spritesheets/power-up.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("player", "gameFolder/assets/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        });
        this.load.spritesheet("beam", "gameFolder/assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.bitmapFont("pixelFont", "gameFolder/assets/font/font.png", "gameFolder/assets/font/font.xml");
    
        this.load.image("ship", "gameFolder/assets/images/ship.png");
        this.load.image("ship2", "gameFolder/assets/images/ship2.png");
        this.load.image("ship3", "gameFolder/assets/images/ship3.png");
    }
    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });
    }
}
