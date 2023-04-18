"use strict";

let running;
let _interval;

let score = 10000000;

let levels =  levelsInit;
let currentLevel = 0;

let bestWpn = 0;

let particles = [];
let rocketParticles = [];
let projectiles = [];
let enemies = [];
let hpbars = [];

let canvas, ctx;

(function gameInit() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	canvas.width = gameWidth;
	canvas.height = gameHeight;
})();

const wall = new Wall(gameWidth, gameHeight);
const player = new Player(gameWidth, gameHeight);
player.init(ctx);

const scoreText = new Text(`Score: ${score}`, 10, 20, "white");
const wallText = new Text(`Wall HP: ${wall.hp}/${wall.maxHP}`, 10, 40, "white");
const levelText = new Text(`Level: ${currentLevel + 1}`, 10, 60);

function loop() {
	if (running) {
		ctx.fillStyle = "rgba(25, 25, 26, 0.2)";
		ctx.fillRect(0, 0, gameWidth, gameHeight);

		wall.draw(ctx);

		spawnEnemies();

		checkGameOver();
		checkWin();

		checkLivingParticles();

		projectiles.forEach((projectile, index) => {
			if(projectile.checkEdgeHit(gameWidth, gameHeight)) {
				projectiles.splice(index, 1);
				createParticles(projectile.position.x, projectile.position.y, projectileParticleNum, projectile.color);
			}

			projectile.update();
			projectile.draw(ctx);
		});

		enemies.forEach((enemy, index) => {
			wall.update(enemy.position.x, enemy.position.y, enemy.radius, enemy.strength);

			projectiles.forEach((projectile, index) => {
				if (projectile.checkCollision(enemy.position.x, enemy.position.y, enemy.radius)) {
					enemy.hp -= projectile.damage;
					projectiles.splice(index, 1);

					if (enemy.type === "teleport") enemy.teleport(gameWidth, gameHeight);
				}
			});

			if (enemy.hp <= 0) {
				enemies.splice(index, 1);
				hpbars.splice(index, 1);

				createParticles(enemy.position.x, enemy.position.y, particleNum, enemy.color);
				score += 50;
			}
			
			enemy.move(wall);
			enemy.update(wall.position.x, wall.width);
			enemy.draw(ctx);
		});

		hpbars.forEach((hpbar, index) => {
			if (enemies.length !== 0) {
				const enemy = enemies[index];

				hpbar.update(enemy.position.x, enemy.position.y, enemy.hp, enemy.maxHP);
				hpbar.draw(ctx);
			}
		});

		player.draw(ctx);
		player.update();

		scoreText.text = `Score: ${score}`;
		scoreText.draw(ctx);

		wallText.text = `Wall HP: ${wall.hp}/${wall.maxHP}`;
		wallText.draw(ctx);

		levelText.text = `Level: ${currentLevel + 1}`;
		levelText.draw(ctx);
	}
}

_interval = setInterval(loop, [10]);