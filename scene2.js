class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    create(){
        this.background = this.add.image(0, 0, "backgound");
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship");
        this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
        this.ship3 = this.add.image(config.width/2 + 50, config.height/2, "ship3");

        this.ship1 = this.add.sprite(config.width/2 - 50, config.height/2, "ship");
        this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
        this.ship3 = this.add.sprite(config.width/2 + 50, config.height/2, "ship3");

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);
        this.powerUps = this.physics.add.group();
        var maxObjects = 4;
        for (var i = 0; i <= maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16, 16, "power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, config.width, config.height);

            if (Math.random() > 0.5) {
                powerUp.play("red");
            } else {
                powerUp.play("gray");
            }

            powerUp.setVelocity(100, 100);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }

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