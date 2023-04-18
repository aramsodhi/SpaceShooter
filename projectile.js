"use strict";

class Projectile {
	constructor(gameWidth, gameHeight, playerX, playerY, xVel, yVel, radius, damage) {
		this.radius = radius;
		this.color = "dodgerblue";

		this.xVel = xVel;
		this.yVel = yVel;

		this.damage = damage;

		this.position = {
			x: playerX,
			y: playerY
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	} 

	update() {
		this.position.x += this.xVel;
		this.position.y += this.yVel; 
	}

	checkCollision(enemyX, enemyY, enemyRadius) {
		let xDist = Math.abs(enemyX - this.position.x);
		let yDist = Math.abs(enemyY - this.position.y);
		let totalRadii = enemyRadius + this.radius;

		if (Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) <= totalRadii) return true;
		else return false;
	}

	checkEdgeHit(gameWidth, gameHeight) {
		if (this.position.x - this.radius <= 0 || this.position.y - this.radius <= 0 || this.position.x + this.radius >= gameWidth || this.position.y + this.radius >= gameHeight) return true;
		else return false;
	}
}