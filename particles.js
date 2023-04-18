"use strict";

class Particle {
	constructor(x, y, r, v, color) {
		this.radius = r;

		this.friction = 0.99;
		this.gravity = 0.02;

		this.color = color;
		this.opacity = 0.9;

		this.xVel = v.x;
		this.yVel = v.y;

		this.position = {
			x: x,
			y: y
		}

		this.rocketDamage = 3;
	}

	draw(ctx) {
	    ctx.save();
  	 	ctx.globalAlpha = this.opacity;
   		ctx.beginPath();
    	ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    	ctx.fillStyle = this.color
    	ctx.fill();
    	ctx.closePath();
    	ctx.restore();
	}

	update() {
		this.xVel *= this.friction;
		this.yVel *= this.friction;

		this.yVel += this.gravity;

		this.position.x += this.xVel;
		this.position.y += this.yVel;
		this.opacity -= 0.004;
	}

	checkCollision(enemyX, enemyY, enemyRadius) {
		let xDist = Math.abs(enemyX - this.position.x);
		let yDist = Math.abs(enemyY - this.position.y);
		let totalRadii = enemyRadius + this.radius;

		if (Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) <= totalRadii) return true;
		else return false;
	}
}

function createParticles(x, y, num, color) {
	let rads = (Math.PI * 2) / num;

	for (let particleIndex = 0; particleIndex < num; particleIndex++) {
		let velocity = {
			x: Math.cos(rads * particleIndex) * (Math.random() * particlePower),
			y: Math.sin(rads * particleIndex) * (Math.random() * particlePower)
		}

		particles.push(new Particle(x, y, 4, velocity, color));
	}
}

function checkLivingParticles() {
	particles.forEach((particle, index) => {
		if (particle.opacity > 0) {
			particle.draw(ctx);
			particle.update();
		} else particles.splice(index, 1);
	});
}