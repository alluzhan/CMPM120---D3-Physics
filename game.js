class Intro extends Phaser.Scene {
    constructor() {
        super("intro");
    }
    create() {
        this.cameras.main.setBackgroundColor("#e7839a");
        let centerX = this.sys.game.config.width / 2;
        let centerY = this.sys.game.config.height / 2;

        let rectWidth = this.sys.game.config.width * 0.85;
        let rectHeight = this.sys.game.config.height * 0.85;
        let rectX = centerX - rectWidth / 2;
        let rectY = centerY - rectHeight / 2;
        let backgroundRect = this.add.rectangle(rectX, rectY, rectWidth, rectHeight, 0xffffff).setOrigin(0, 0);

         this.add.text(centerX, centerY - 60, "Fruit Blast", {
            fontFamily: "Kalam",
            fontSize: "130px",
            fill: "#000000",
            fontStyle: "bold",
        }).setOrigin(0.5);

        this.add.rectangle(centerX, centerY + 120, rectWidth * 0.3, 80, 0xFEF6F8).setOrigin(0.5);

        let startButton = this.add.text(centerX, centerY + 120, "start game", {
            fontFamily: "Kalam",
            fontSize: "40px",
            fill: "#000000",
        }).setOrigin(0.5);

        let border = this.add.graphics();
        border.lineStyle(4, 0xf8c9d4, 1);

        let dashLength = 10;
        let gapLength = 7;

        let x = rectX;
        let y = rectY;
        let width = rectWidth;
        let height = rectHeight;

        while (x < rectX + width) {
            border.moveTo(x, y);
            border.lineTo(x + dashLength, y);
            x += dashLength + gapLength;
        }
        while (y < rectY + height) {
            border.moveTo(rectX + width, y);
            border.lineTo(rectX + width, y + dashLength);
            y += dashLength + gapLength;
        }
        while (x > rectX) {
            border.moveTo(x, rectY + height);
            border.lineTo(x - dashLength, rectY + height);
            x -= dashLength + gapLength;
        }
        while (y > rectY) {
            border.moveTo(rectX, y);
            border.lineTo(rectX, y - dashLength);
            y -= dashLength + gapLength;
        }

        border.strokePath();


        let buttonBorder = this.add.graphics();
        buttonBorder.lineStyle(3, 0xf8c9d4, 1);

        let buttonX = centerX - (rectWidth * 0.3) / 2;
        let buttonY = centerY + 120 - 40;
        let buttonWidth = rectWidth * 0.3;
        let buttonHeight = 80;

        x = buttonX;
        y = buttonY;
        
        while (x < buttonX + buttonWidth) {
            buttonBorder.moveTo(x, y);
            buttonBorder.lineTo(x + dashLength, y);
            x += dashLength + gapLength;
        }
        while (y < buttonY + buttonHeight) {
            buttonBorder.moveTo(buttonX + buttonWidth, y);
            buttonBorder.lineTo(buttonX + buttonWidth, y + dashLength);
            y += dashLength + gapLength;
        }
        while (x > buttonX) {
            buttonBorder.moveTo(x, buttonY + buttonHeight);
            buttonBorder.lineTo(x - dashLength, buttonY + buttonHeight);
            x -= dashLength + gapLength;
        }
        while (y > buttonY) {
            buttonBorder.moveTo(buttonX, y);
            buttonBorder.lineTo(buttonX, y - dashLength);
            y -= dashLength + gapLength;
        }
        
        buttonBorder.strokePath();

        startButton.setInteractive();
        backgroundRect.setInteractive();

        startButton.on("pointerdown", () => {
            this.scene.start("instructions");
        });

        backgroundRect.on("pointerdown", () => {
            this.scene.start("instructions");
        });
    }

}

class Instructions extends Phaser.Scene {
    constructor() {
        super("instructions");
    }
    create() {
        this.cameras.main.setBackgroundColor("#F8C9D4")
        let centerX = this.sys.game.config.width/2;
        let centerY = this.sys.game.config.height/2;

        this.add.text(centerX, centerY - 280, "How To Play", {
            fontFamily: "Kalam",
            fontSize: "60px",
            color: "#000000",
            align: "center",
            fontStyle: "bold"
        }).setOrigin(0.5);

        this.add.text(centerX, centerY - 40, "Objective\n- Launch the fruit into the basket\n\nControls\n- Drag the fruit to aim\n- Release mouse to launch the fruit\n\nGameplay\n- Clear each level with the least amount of shots\n- For each fruit, players have three chances to get it\ninto the basket\n- If players don't succeed in three turns, they must\nrestart the level to move on", {
           fontSize: "30px",
           align: "left",
            color: "#595959",
        }).setOrigin(0.5);

        let rectWidth = this.sys.game.config.width * 0.85;

        this.add.rectangle(centerX, centerY + 240, rectWidth * 0.25, 70, 0xFEF6F8).setOrigin(0.5);

        let startButton = this.add.text(centerX, centerY + 240, "continue", {
            fontFamily: "Kalam",
            fontSize: "40px",
            fill: "#000000",
        }).setOrigin(0.5);

        let buttonBorder = this.add.graphics();
        buttonBorder.lineStyle(3, 0xe7839a, 1);

        let dashLength = 10;
        let gapLength = 5;

        let buttonX = centerX - (rectWidth * 0.25) / 2;
        let buttonY = centerY + 240 - 35;
        let buttonWidth = rectWidth * 0.25;
        let buttonHeight = 70;

        let x = buttonX;
        let y = buttonY;
        
        while (x < buttonX + buttonWidth) {
            buttonBorder.moveTo(x, y);
            buttonBorder.lineTo(x + dashLength, y);
            x += dashLength + gapLength;
        }
        while (y < buttonY + buttonHeight) {
            buttonBorder.moveTo(buttonX + buttonWidth, y);
            buttonBorder.lineTo(buttonX + buttonWidth, y + dashLength);
            y += dashLength + gapLength;
        }
        while (x > buttonX) {
            buttonBorder.moveTo(x, buttonY + buttonHeight);
            buttonBorder.lineTo(x - dashLength, buttonY + buttonHeight);
            x -= dashLength + gapLength;
        }
        while (y > buttonY) {
            buttonBorder.moveTo(buttonX, y);
            buttonBorder.lineTo(buttonX, y - dashLength);
            y -= dashLength + gapLength;
        }
        
        buttonBorder.strokePath();

        startButton.setInteractive();

        startButton.on("pointerdown", () => {
            this.scene.start("level1", {
                stats: {
                    shots: 0,
                    hits: 0,
                    startTime: Date.now()
                }
            });
        });

    }
}

class Level1 extends Phaser.Scene {
    constructor() {
        super("level1");
    }
    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("strawberry", "assets/images/strawberry.png");
        this.load.image("basket", "assets/images/basket.png");
    }
    create(data) {
        let bg = this.add.image(0, 0, "background").setOrigin(0);
        bg.displayWidth = this.sys.game.config.width;
        bg.displayHeight = this.sys.game.config.height;

        //center coordinates
        let centerX = this.sys.game.config.width / 2;
        let centerY = this.sys.game.config.height / 2;

        this.scored = false;

        //prevents multiple resets from triggering at once
        this.isResetting = false;

        //detects when the fruit has stopped moving to trigger reset
        this.stillTime = 0;
        this.requiredStillTime = 600;

        //tracks level stats
        this.stats = data.stats || {
            shots: 0,
            hits: 0,
            startTime: Date.now()
        };

        //Instructions UI box --> fades away after 5 seconds
        this.box = this.add.rectangle(
            centerX,
            centerY + 220,
            370,
            110,
            0xf8c9d4,
            0.9
        ).setOrigin(0.5);

        this.instructions = this.add.text(
            centerX,
            centerY + 220,
            "Get all fruits into the basket.\nEach fruit has 3 attempts.",
            {
                fontFamily: "Kalam",
                fontSize: "25px",
                color: "#000000",
                align: "center",
                backgroundColor: "#FEF6F8",
                padding: { x: 20, y: 20 }
            }
        ).setOrigin(0.5);

        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: [this.instructions, this.box],
                alpha: 0,
                duration: 1000,
                onComplete: () => {
                    this.instructions.destroy();
                    this.box.destroy();
                }
            });

        });
        
        //launch variables
        this.launchX = centerX - 410;
        this.launchY = centerY + 25;

        //checks if the fruit has been launched
        this.launched = false;
        this.attempts = 3;

        // attempts text display
        this.attemptText = this.add.text(
            centerX + 435,
            centerY - 315,
            "Attempts: " + this.attempts,
            {
                fontFamily: "Kalam",
                fontSize: "28px",
                color: "#000000"
            }
        );

        //level text display
        this.levelText = this.add.text(
            centerX - 550,
            centerY - 315,
            "Level 1",
            {
                fontFamily: "Kalam",
                fontSize: "35px",
                color: "#000000"
            }
        );

        //platform
        this.platform = this.add.rectangle(
            centerX - 420,
            centerY + 120,
            240,
            50,
            0x4b372c
        );

        this.physics.add.existing(this.platform, true);

        //basket
        this.basket = this.physics.add.sprite(
            centerX + 485,
            centerY + 60,
            "basket"
        );

        //scale basket size and adjust hitbox
        this.basket.setScale(0.14);
        this.basket.body.setSize(
            this.basket.width * 0.55,
            this.basket.height * 0.2,
            true
        );

        // make basket immovable and not affected by gravity
        this.basket.body.setAllowGravity(false);

        //strawberry
        this.strawberry = this.physics.add.sprite(
            this.launchX,
            this.launchY,
            "strawberry"
        );

        this.strawberry
            .setScale(0.1)
            .setBounce(0.5) //how bouncy the fruit is
            .setCollideWorldBounds(true); //prevents fruit from going out of bounds

        // disable gravity until launch
        this.strawberry.body.setAllowGravity(false);

        //make strawberry hitbox smaller
        this.strawberry.body.setSize(
            this.strawberry.width * 0.50,
            this.strawberry.height * 0.51,
            true
        );

        //collision w/ platform and basket
        this.physics.add.collider(
            this.strawberry,
            this.platform
        );

        this.physics.add.overlap(
            this.strawberry,
            this.basket,
            this.scoreFruit,
            null,
            this
        );

        //draggable strawberry
        this.strawberry.setInteractive();
        this.input.setDraggable(this.strawberry);

        //create aiming arrow
        this.aimArrow = this.add.graphics();

        //dragging mechanics
        this.input.on(
            "drag",
            (pointer, obj, dragX, dragY) => {

                if (this.launched) return; //prevents dragging after launch

                let maxDistance = 140;

                // calculate drag distance from launch point
                let dx = dragX - this.launchX;
                let dy = dragY - this.launchY;

                let distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                // limit drag range
                if (distance > maxDistance) {
                    let angle = Math.atan2(dy, dx);

                    dragX =
                        this.launchX +
                        Math.cos(angle) * maxDistance;

                    dragY =
                        this.launchY +
                        Math.sin(angle) * maxDistance;
                }

                // stop dragging below platform
                if (dragY > this.launchY + 40) {
                    dragY = this.launchY + 40;
                }

                // update position
                obj.x = dragX;
                obj.y = dragY;


                //create aiming arrow what dragging on strawberry
                this.aimArrow.clear();

                let arrowdx = this.launchX - obj.x;
                let arrowdy = this.launchY - obj.y;

                let length = Math.sqrt(dx * dx + dy * dy);
                let dirX = arrowdx / length;
                let dirY = arrowdy / length;

                // move arrow start slightly in front of strawberry
                let offset = 35;

                let startX = this.launchX + dirX * offset;
                let startY = this.launchY + dirY * offset;

                // arrow length based on drag distance
                let arrowLength = Math.min(length * 1.4, 170);

                let endX = startX + dirX * arrowLength;
                let endY = startY + dirY * arrowLength;

                // draw line
                this.aimArrow.lineStyle(6, 0xffffff, 1);

                this.aimArrow.beginPath();
                this.aimArrow.moveTo(startX, startY);
                this.aimArrow.lineTo(endX, endY);
                this.aimArrow.strokePath();

                let angle = Phaser.Math.Angle.Between(
                    startX,
                    startY,
                    endX,
                    endY
                );

                let size = 18;

                this.aimArrow.fillStyle(0xffffff, 1);

                //arrow tip fill and location
                let tipOffset = 20;
                let tipX = endX + dirX * tipOffset;
                let tipY = endY + dirY * tipOffset;
                this.aimArrow.fillTriangle(
                    tipX,
                    tipY,

                    tipX - Math.cos(angle - 0.5) * size,
                    tipY - Math.sin(angle - 0.5) * size,

                    tipX - Math.cos(angle + 0.5) * size,
                    tipY - Math.sin(angle + 0.5) * size
                );
            }
        );

        //release to launch mechanics
        this.input.on(
            "dragend",
            (pointer, obj) => {

                if (this.launched) return;

                this.stats.shots++;
                this.launched = true;

                this.aimArrow.clear();


                //calculate launch velocity based on drag distance
                let dx =
                    this.launchX - obj.x;

                let dy =
                    this.launchY - obj.y;

                let power = 8   ;

                obj.body.setAllowGravity(true);

                obj.setBounce(0.3);
                obj.setDamping(true); //slows the object down gradually
                obj.setDrag(0.7);
                obj.setFriction(1);


                obj.setVelocity(
                    dx * power,
                    dy * power
                );

                obj.disableInteractive();
            }
        );
    }

    //change scenes when strawberry overlaps with basket
    scoreFruit(strawberry, basket) {
        if (this.scored) return;
        this.scored = true;

        this.stats.hits++;

        //stop movement when strawberry and basked collide
        strawberry.setVelocity(0, 0);

        // disable physics
        strawberry.body.setAllowGravity(false);
        strawberry.body.moves = false;

        //strawberry landing in basket animation
        this.tweens.add({
            targets: strawberry,
            x: basket.x,
            y: basket.y - 10,
            duration: 150,
            ease: "Power2"
        });
        strawberry.disableInteractive();
        this.launched = false;

        //go to game summary
        this.time.delayedCall(1000, () => {
            this.scene.start("levelSummary",{
                level: 1,
                stats: this.stats
            });

        });
    }

    //reset fruit position and attempts if the basket is missed
    resetFruit() {
        if (this.isResetting) return; // prevent multiple triggers
        this.isResetting = true;

        this.attempts--; //decrease attempts by 1

        this.attemptText.setText("Attempts: " + this.attempts);

        //level reset condition
        if (this.attempts <= 0) {
            this.scene.start("restart",{
                level: 1
            });
            return;
        }

        // reset physics
        this.strawberry.setPosition(this.launchX, this.launchY);
        this.strawberry.setVelocity(0, 0);
        this.strawberry.body.setAllowGravity(false);
        this.strawberry.setBounce(0);

        //re-enable dragging
        this.strawberry.setInteractive();
        this.input.setDraggable(this.strawberry);

        this.launched = false;

        //delay before reset
        this.time.delayedCall(100, () => {
            this.isResetting = false;
        });
    }
    update() {
        if (!this.launched || this.isResetting) return;

        let body = this.strawberry.body;

        //if the fruit is out of bounds reset it
        if (
            this.strawberry.y > 700 ||
            this.strawberry.x < -100 ||
            this.strawberry.x > 1300
        ) {
            this.resetFruit();
            return;
        }

        //if the fruit is touching the basket, still isn't reset
        if (this.physics.overlap(this.strawberry, this.basket)) {
            return;
        }

        //checks if the fruit stopped moving for a certain amount of time to trigger reset (in case it gets stuck somewhere)
        if (body.velocity.length() < 10) {
            this.stillTime += this.game.loop.delta;

            if (this.stillTime > this.requiredStillTime) {
                this.resetFruit();
            }
        } else {
            this.stillTime = 0; // reset timer if it moves again
        }
    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super("level2");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("strawberry", "assets/images/strawberry.png");
        this.load.image("cherries", "assets/images/cherries.png");
        this.load.image("basket", "assets/images/basket.png");
    }

    create(data) {
        let bg = this.add.image(0, 0, "background").setOrigin(0);
        bg.displayWidth = this.sys.game.config.width;
        bg.displayHeight = this.sys.game.config.height;

        let centerX = this.sys.game.config.width / 2;
        let centerY = this.sys.game.config.height / 2;

        this.scored = false;

        this.isResetting = false;
        this.stillTime = 0;
        this.requiredStillTime = 600;
        

        this.stats = data.stats || {
            shots: 0,
            hits: 0,
            startTime: Date.now()
        };

        // instructions
        this.box = this.add.rectangle(
            centerX,
            centerY + 220,
            400,
            110,
            0xf8c9d4,
            0.9
        ).setOrigin(0.5);

        this.instructions = this.add.text(
            centerX,
            centerY + 220,
            "Get all fruits into the basket.\nEach fruit has 3 attempts.",
            {
                fontFamily: "Kalam",
                fontSize: "25px",
                color: "#000000",
                align: "center",
                backgroundColor: "#FEF6F8",
                padding: { x: 20, y: 20 }
            }
        ).setOrigin(0.5);

        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: [this.instructions, this.box],
                alpha: 0,
                duration: 1000,
                onComplete: () => {
                    this.instructions.destroy();
                    this.box.destroy();
                }
            });
        });

        this.launchX = centerX - 410;
        this.launchY = centerY + 25;

        this.launched = false;

        this.levelText = this.add.text(
            centerX - 550,
            centerY - 315,
            "Level 2",
            {
                fontFamily: "Kalam",
                fontSize: "35px",
                color: "#000000"
            }
        );

        this.attemptText = this.add.text(
            centerX + 435,
            centerY - 315,
            "",
            {
                fontFamily: "Kalam",
                fontSize: "28px",
                color: "#000000"
            }
        );

        // platform1 --> fruit starting platform
        this.platform1 = this.add.rectangle(
            centerX - 420,
            centerY + 120,
            240,
            50,
            0x4b372c
        );

        this.physics.add.existing(this.platform1, true);

        //platform2 --> platform for fruit to bounce off of
        this.platform2 = this.add.rectangle(
            centerX,
            centerY + 20,
            180,
            30,
            0x4b372c
        );
        this.physics.add.existing(this.platform2, true);

        // basket
        this.basket = this.physics.add.sprite(
            centerX + 485,
            centerY + 60,
            "basket"
        );

        this.basket.setScale(0.14);

        this.basket.body.setSize(
            this.basket.width * 0.50,
            this.basket.height * 0.1,
            true
        );

        this.basket.body.setAllowGravity(false);

        // fruit order
        this.fruitOrder = ["strawberry", "cherries"];
        this.currentFruitIndex = 0;
        this.attempts = 3;

        this.aimArrow = this.add.graphics();

        this.spawnFruit();

        //dragging mechanics
        this.input.on("drag", (pointer, obj, dragX, dragY) => {
            if (obj !== this.currentFruit) return;
            if (this.launched) return;

            let maxDistance = 140;

            let dx = dragX - this.launchX;
            let dy = dragY - this.launchY;

            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > maxDistance) {
                let angle = Math.atan2(dy, dx);

                dragX = this.launchX + Math.cos(angle) * maxDistance;
                dragY = this.launchY + Math.sin(angle) * maxDistance;
            }

            if (dragY > this.launchY + 40) { //og 40
                dragY = this.launchY + 40;
            }

            obj.x = dragX;
            obj.y = dragY;

            this.aimArrow.clear();

            let arrowdx = this.launchX - obj.x;
            let arrowdy = this.launchY - obj.y;

            let length = Math.sqrt(
                arrowdx * arrowdx + arrowdy * arrowdy
            );

            let dirX = arrowdx / length;
            let dirY = arrowdy / length;

            let offset = 35;

            let startX = this.launchX + dirX * offset;
            let startY = this.launchY + dirY * offset;

            let arrowLength = Math.min(length * 1.4, 170);

            let endX = startX + dirX * arrowLength;
            let endY = startY + dirY * arrowLength;

            this.aimArrow.lineStyle(6, 0xffffff, 1);
            this.aimArrow.beginPath();
            this.aimArrow.moveTo(startX, startY);
            this.aimArrow.lineTo(endX, endY);
            this.aimArrow.strokePath();

            let angle = Phaser.Math.Angle.Between(
                startX,
                startY,
                endX,
                endY
            );

            let size = 18;
            let tipOffset = 20;

            let tipX = endX + dirX * tipOffset;
            let tipY = endY + dirY * tipOffset;

            this.aimArrow.fillStyle(0xffffff, 1);

            this.aimArrow.fillTriangle(
                tipX,
                tipY,
                tipX - Math.cos(angle - 0.5) * size,
                tipY - Math.sin(angle - 0.5) * size,
                tipX - Math.cos(angle + 0.5) * size,
                tipY - Math.sin(angle + 0.5) * size
            );
        });

        //release to launch mechanics
        this.input.on("dragend", (pointer, obj) => {
            console.log("dragend fired", obj === this.currentFruit, this.launched);
            if (obj !== this.currentFruit) return;
            if (this.launched) return;

            this.launched = true;
            this.stats.shots++;

            this.aimArrow.clear();

            let dx = this.launchX - obj.x;
            let dy = this.launchY - obj.y;

            let power = 8;

            obj.body.setAllowGravity(true);
            obj.setBounce(0.3); //og 0.3
            obj.setDamping(true);
            obj.setDrag(0.7);
            obj.setFriction(1);

            obj.setVelocity(dx * power, dy * power);

            obj.disableInteractive();
        });
    }
    //With more fruits, move physics to apply to all the fruits
    spawnFruit() {
        let fruitName = this.fruitOrder[this.currentFruitIndex];

        this.currentFruit = this.physics.add.sprite(
            this.launchX,
            this.launchY,
            fruitName
        );

        this.currentFruit
            .setScale(0.1)
            .setBounce(0.5)
            .setCollideWorldBounds(true);

        this.currentFruit.body.setAllowGravity(false);

        this.currentFruit.body.setSize(
            this.currentFruit.width * 0.55,
            this.currentFruit.height * 0.55,
            true
        );

        this.physics.add.collider(
            this.currentFruit,
            this.platform1
        );

        this.physics.add.collider(
            this.currentFruit,
            this.platform2,

            //when the fruit lands on the platform there is a bounce so that it can reach the basket
            () => {
                let platformLeft = this.platform2.x - this.platform2.width / 2;
                let platformRight = this.platform2.x + this.platform2.width / 2;
                let fruitX = this.currentFruit.x;
                let fruitY = this.currentFruit.y;

                if (fruitX >= platformLeft && fruitX <= platformRight && fruitY < this.platform2.y) {
                    this.currentFruit.setVelocityY(-400);
                }
            }
        );
        

        this.physics.add.overlap(
            this.currentFruit,
            this.basket,
            this.scoreFruit,
            null,
            this
        );

        this.currentFruit.setInteractive();
        this.input.setDraggable(this.currentFruit);

        this.launched = false;

        this.attemptText.setText(
            "Attempts: " + this.attempts
        );
    }

    scoreFruit(fruit, basket) {
        if (this.scored) return; //can't score twice accidently
        this.scored = true;

        this.stats.hits++;

        fruit.setVelocity(0, 0);
        fruit.body.setAllowGravity(false);
        fruit.body.moves = false;

        this.tweens.add({
            targets: fruit,
            x: basket.x,
            y: basket.y - 10,
            duration: 150,
            ease: "Power2"
        });

        fruit.disableInteractive();

        this.time.delayedCall(700, () => {
            fruit.destroy();

            this.currentFruitIndex++; //move onto next fruit

            if (this.currentFruitIndex < this.fruitOrder.length) {
                this.attempts = 3;
                this.scored = false;   // reset score for next fruit
                this.spawnFruit();
            }
            else {
                this.scene.start("levelSummary", {
                    level: 2,
                    stats: this.stats
                });
            }
        });
    }

    resetFruit() {
        if (this.isResetting) return;

        this.isResetting = true;

        this.attempts--;

        this.attemptText.setText(
            "Attempts: " + this.attempts
        );

        if (this.attempts <= 0) {
            this.scene.start("restart", {
                level: 2
            });
            return;
        }

        this.currentFruit.setPosition(
            this.launchX,
            this.launchY
        );

        this.currentFruit.setVelocity(0, 0);
        this.currentFruit.body.setAllowGravity(false);
        this.currentFruit.setBounce(0);

        this.currentFruit.setInteractive();
        this.input.setDraggable(this.currentFruit);

        this.launched = false;

        this.time.delayedCall(100, () => {
            this.isResetting = false;
        });
    }

    update() {
        if (!this.launched || this.isResetting) return;
        if (!this.currentFruit || !this.currentFruit.body) return;

        let body = this.currentFruit.body;

        if (this.currentFruit.y > 700 || this.currentFruit.x < -100 || this.currentFruit.x > 1300) {
            this.resetFruit();
            return;
        }

        if (this.physics.overlap(this.currentFruit, this.basket)) {
            return;
        }

        if (body.velocity.length() < 10) {
            this.stillTime += this.game.loop.delta;

            if (this.stillTime > this.requiredStillTime) {
                this.resetFruit();
            }
        }
        else {
            this.stillTime = 0;
        }
    }
}

class LevelSummary extends Phaser.Scene {
    constructor() {
        super('levelSummary')
    }
    create(data){
        this.cameras.main.setBackgroundColor('#F8C9D4');
        let centerX = this.sys.game.config.width / 2;
        let centerY = this.sys.game.config.height / 2;

        let rectWidth = this.sys.game.config.width * 0.70;
        let rectHeight = this.sys.game.config.height * 0.75;
        let rectX = centerX - rectWidth / 2;
        let rectY = centerY - rectHeight / 2;
        this.add.rectangle(rectX, rectY, rectWidth, rectHeight, 0xFEF6F8).setOrigin(0, 0);
        
        let level = data.level;
        let stats = data.stats;

        let accuracy = Math.round((stats.hits / stats.shots) * 100);
        let time = Math.round((Date.now() - stats.startTime) / 1000);

        this.add.text(centerX, centerY - 290, "Level " + level + " Complete!", {
            fontFamily: "Kalam",
            fontSize: '40px',
            fill: "#000000",
            align: "center",
            fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(centerX, centerY - 100, "Shots Used: " + stats.shots + "\nAccuracy: " + accuracy + "%" + "\nTime: " + time + "s", {
            fontSize: '35px',
            align: 'center',
            fill: "#595959",
            lineSpacing: 25,
        }).setOrigin(0.5);

        let buttonRect = this.add.rectangle(centerX, centerY + 180, rectWidth * 0.21, 70, 0xe7839a).setOrigin(0.5);

        let nextButton = this.add.text(centerX, centerY + 180, "next level", {
            fontFamily: "Kalam",
            fontSize: "28px",
            fill: "#000000",
            backgroundColor: "#F8C9D4",
            padding: { x: 10, y: 10 }
        }).setOrigin(0.5);

        

        buttonRect.setInteractive();
        nextButton.setInteractive();

        buttonRect.on("pointerdown", () => {
            let nextLevel = level + 1;

            if (nextLevel == 2)
            {
                this.scene.start("level2", {
                    stats: {
                        shots: 0,
                        hits: 0,
                        startTime: Date.now()
                    }
                });
            }
            else if (nextLevel == 3)
            {
                this.scene.start("level3", {
                    stats: {
                        shots: 0,
                        hits: 0,
                        startTime: Date.now()
                    }
                });
            }
            else {
                this.scene.start("outro");
            }
        });

        nextButton.on("pointerdown", () => {
            let nextLevel = level + 1;
            
            if (nextLevel == 2)
            {
                this.scene.start("level2", {
                    stats: {
                        shots: 0,
                        hits: 0,
                        startTime: Date.now()
                    }
                });
            }
            else if (nextLevel == 3)
            {
                this.scene.start("level3", {
                    stats: {
                        shots: 0,
                        hits: 0,
                        startTime: Date.now()
                    }
                });
            }
            else {
                this.scene.start("outro");
            }
        });
    }
}

class Restart extends Phaser.Scene {
    constructor() {
        super("restart");
    }
    create(data) {
        this.cameras.main.setBackgroundColor("#e7839a");
        let centerX = this.sys.game.config.width / 2;
        let centerY = this.sys.game.config.height / 2;

        let rectWidth = this.sys.game.config.width * 0.85;
        let rectHeight = this.sys.game.config.height * 0.85;
        let rectX = centerX - rectWidth / 2;
        let rectY = centerY - rectHeight / 2;
        let backgroundRect = this.add.rectangle(rectX, rectY, rectWidth, rectHeight, 0xffffff).setOrigin(0, 0);

         this.add.text(centerX, centerY - 60, "You ran out of attempts!\nNot all fruits made it into the basket", {
            fontFamily: "Kalam",
            fontSize: "50px",
            fill: "#000000",
            align: "center",
        }).setOrigin(0.5);

        let buttonRect = this.add.rectangle(centerX, centerY + 120, rectWidth * 0.3, 80, 0xFEF6F8).setOrigin(0.5);

        let restartButton = this.add.text(centerX, centerY + 120, "restart level", {
            fontFamily: "Kalam",
            fontSize: "40px",
            fill: "#000000",
        }).setOrigin(0.5);

        let border = this.add.graphics();
        border.lineStyle(4, 0xf8c9d4, 1);

        let dashLength = 10;
        let gapLength = 7;

        let x = rectX;
        let y = rectY;
        let width = rectWidth;
        let height = rectHeight;

        while (x < rectX + width) {
            border.moveTo(x, y);
            border.lineTo(x + dashLength, y);
            x += dashLength + gapLength;
        }
        while (y < rectY + height) {
            border.moveTo(rectX + width, y);
            border.lineTo(rectX + width, y + dashLength);
            y += dashLength + gapLength;
        }
        while (x > rectX) {
            border.moveTo(x, rectY + height);
            border.lineTo(x - dashLength, rectY + height);
            x -= dashLength + gapLength;
        }
        while (y > rectY) {
            border.moveTo(rectX, y);
            border.lineTo(rectX, y - dashLength);
            y -= dashLength + gapLength;
        }

        border.strokePath();

        //button border
        let buttonBorder = this.add.graphics();
        buttonBorder.lineStyle(3, 0xf8c9d4, 1);

        let buttonX = centerX - (rectWidth * 0.3) / 2;
        let buttonY = centerY + 120 - 40;
        let buttonWidth = rectWidth * 0.3;
        let buttonHeight = 80;

        x = buttonX;
        y = buttonY;
        
        while (x < buttonX + buttonWidth) {
            buttonBorder.moveTo(x, y);
            buttonBorder.lineTo(x + dashLength, y);
            x += dashLength + gapLength;
        }
        while (y < buttonY + buttonHeight) {
            buttonBorder.moveTo(buttonX + buttonWidth, y);
            buttonBorder.lineTo(buttonX + buttonWidth, y + dashLength);
            y += dashLength + gapLength;
        }
        while (x > buttonX) {
            buttonBorder.moveTo(x, buttonY + buttonHeight);
            buttonBorder.lineTo(x - dashLength, buttonY + buttonHeight);
            x -= dashLength + gapLength;
        }
        while (y > buttonY) {
            buttonBorder.moveTo(buttonX, y);
            buttonBorder.lineTo(buttonX, y - dashLength);
            y -= dashLength + gapLength;
        }
        
        buttonBorder.strokePath();

        restartButton.setInteractive();
        buttonRect.setInteractive();

        //restart certain level depending on where the player is in the game

        let level = data.level;
        restartButton.on("pointerdown", () => {
            if (level === 1) {
                this.scene.start("level1", { stats: { shots: 0, hits: 0, startTime: Date.now() } });
            }
            else if (level === 2) {
                this.scene.start("level2", { stats: { shots: 0, hits: 0,startTime: Date.now() } });
            }
            else if (level === 3) {
                this.scene.start("level3", { stats: { shots: 0, hits: 0, startTime: Date.now() } });
            }
        });

        buttonRect.on("pointerdown", () => {
            if (level === 1) {
                this.scene.start("level1", { stats: { shots: 0, hits: 0, startTime: Date.now() } });
            }
            else if (level === 2) {
                this.scene.start("level2", { stats: { shots: 0, hits: 0, startTime: Date.now() } });
            }
            else if (level === 3) {
                this.scene.start("level3", { stats: { shots: 0, hits: 0, startTime: Date.now() } });
            }
        });
    }

}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1200,
        height: 675,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: { y : 300}
        },
    },
    scene: [Intro, Instructions, Level1, Level2, LevelSummary, Restart],
    //scene: [Level2, LevelSummary],
    title: "Fruit Blast",
});