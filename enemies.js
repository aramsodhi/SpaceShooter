"use strict";

class Enemy {
	constructor(gameWidth, gameHeight) {
		this.radius = 20;
		this.color = "limegreen";

		this.type = "normal";

		this.hp = 4;
		this.maxHP = 4;

		this.strength = 2;

		this.position = {
			x: gameWidth + this.radius,
			y: randomNum(this.radius, gameHeight - this.radius)
		}

		this.xVel = 2.5;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	move() { this.position.x -= this.xVel }

	update(wallX, wallWidth) { if (this.position.x - this.radius < wallX + wallWidth) this.position.x = wallX + wallWidth + this.radius }
}

class strongEnemy {
	constructor(gameWidth, gameHeight) {
		this.radius = 25;
		this.color = "tomato";

		this.type = "strong";


		this.hp = 12;
		this.maxHP = 20;

		this.strength = 1;

		this.position = {
			x: gameWidth + this.radius,
			y: randomNum(this.radius, gameHeight - this.radius)
		}

		this.xVel = 1.7;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	move() { this.position.x -= this.xVel }

	update(wallX, wallWidth) { if (this.position.x - this.radius < wallX + wallWidth) this.position.x = wallX + wallWidth + this.radius }
}

class fastEnemy {
	constructor(gameWidth, gameHeight) {
		this.radius = 15;
		this.color = "#ee82ee";

		this.type = "fast";

		this.hp = 2;
		this.maxHP = 2;

		this.strength = 2;

		this.position = {
			x: gameWidth + this.radius,
			y: randomNum(this.radius, gameHeight - this.radius)
		}

		this.xVel = 3.5;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	move() { this.position.x -= this.xVel }

	update(wallX, wallWidth) { if (this.position.x - this.radius < wallX + wallWidth) this.position.x = wallX + wallWidth + this.radius }
}

class teleportingEnemy {
	constructor(gameWidth, gameHeight) {
		this.radius = 17.5;
		this.color = "slateblue";

		this.type = "teleport";

		this.hp = 5;
		this.maxHP = 5;

		this.strength = 3;

		this.position = {
			x: gameWidth + this.radius,
			y: randomNum(this.radius, gameHeight - this.radius)
		}

		this.xVel = 2.75;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	move() { this.position.x -= this.xVel }

	update(wallX, wallWidth) { if (this.position.x - this.radius < wallX + wallWidth) this.position.x = wallX + wallWidth + this.radius }

	teleport(gameWidth, gameHeight) {
		const newX = randomNum(this.position.x + 100, gameWidth);
		const newY = randomNum(this.radius, gameHeight - this.radius);

		this.position.x = newX;
		this.position.y = newY;
	}
}

function spawnEnemies() {
	const enemyTypes = [Enemy, strongEnemy, fastEnemy, teleportingEnemy];

	for (let i = 0; i < levels[currentLevel].length; i++) {
		if (levels[currentLevel][i] !== 0 && randomNum(1, 100) === 1) {
			const enemyType = enemyTypes[i];
			const enemy = new enemyType(gameWidth, gameHeight)

			enemies.push(enemy);
			hpbars.push(new hpBar(enemy));

			levels[currentLevel][i] -= 1;
		}

	}

	if (levels[currentLevel][0] === 0 && levels[currentLevel][1] === 0 && levels[currentLevel][2] === 0) currentLevel++;
}