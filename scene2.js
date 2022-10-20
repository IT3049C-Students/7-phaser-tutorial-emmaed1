class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    create(){
        this.background = this.add.image(0, 0, "backgound");
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship");
        this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
        this.ship2 = this.add.image(config.width/2 + 50, config.height/2, "ship3");

        this.ship1 = this.add.sprite(config.width/2 - 50, config.height/2, "ship");
        this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
        this.ship2 = this.add.sprite(config.width/2 + 50, config.height/2, "ship3");

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
            hiddenOnComplete: true
        });

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);

        this.add.text(20, 20, "Playing game", {
            font:"25px Arial", 
            fill: "yellow"
        });
    }
    update(){
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 3);
    }
    moveShip(ship, speed){
        ship.y += speed;
        if(ship.y > config.height){
            this.resetShipPos(ship);
        }
    }
    resetShipPos(ship){
        ship.y = 0;
        var randomX = Pahser.Math.Between(0, config.width);
        ship.x = randomX
    }
    destroyShip(pointer, gameObject){
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }
}