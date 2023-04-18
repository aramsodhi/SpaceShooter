"use strict";

class Player {
	constructor(gameWidth, gameHeight) {
		this.width = 50;
		this.height = 50;

		this.src = "assets/ships.png";
		this.img = null;

		this.sx = 31;
		this.sy = 65;
		this.sw = 16;
		this.sh = 16;

		this.speed = 5;
		this.upPressed = false;
		this.downPressed = false;

		this.position = {
			x: Math.round(gameWidth / 17),
			y: (gameHeight / 2) - this.width / 2
		}

		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.position.x, this.position.y, this.width, this.height);
	}

	init(ctx) {
		this.img = new Image();
		this.img.src = this.src;
		this.img.onload = function() { 
			ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sy, 50, 50, this.width, 500);
		};
	}

	update() {
		if (this.upPressed) this.position.y -= this.speed;
		if (this.downPressed) this.position.y += this.speed;

		if (this.position.y <= 0) this.position.y = 0;
		if (this.position.y + this.height >= gameHeight) this.position.y = gameHeight - this.height;
	}
}
