"use strict";

class Wall {
	constructor(gameWidth, gameHeight) {
		this.width = 15;
		this.height = gameHeight;
		this.color = "gainsboro";

		this.maxHP = 20;
		this.hp = 20;

		this.position = {
			x: Math.floor(gameWidth / 6),
			y: 0
		}
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(enemyX, enemyY, enemyRadius, enemyStrength) { 
		if (enemyX - enemyRadius === this.position.x + this.width && randomNum(1, 300) === 150) {
			this.hp -= enemyStrength;
			createParticles(enemyX, enemyY, enemyStrength, this.color);
		}
	}
}
