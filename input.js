"use strict";

document.addEventListener("keydown", (event) => {
	if (event.code === "KeyW") player.upPressed = true;
	else if (event.code === "KeyS") player.downPressed = true;
});

document.addEventListener("keyup", (event) => { 
	if (event.code === "KeyW") player.upPressed = false;
	if (event.code === "KeyS") player.downPressed = false;
});

document.addEventListener("keypress", (event) => {
	if(event.code === "KeyP" && shopOpen === false) { pauseGame(); }
	else if (event.code === "KeyP" && shopOpen === true) { unpauseGame(); }
});




let mouseX = null;
let mouseY = null;

document.addEventListener("mousemove", (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
});

let _shooting_interval;

document.addEventListener("mousedown", (event) => {
	_shooting_interval = setInterval(function() {
		const angle = Math.atan2((mouseY - player.position.y), (mouseX - player.position.x));
		const xVel = Math.cos(angle) * 10;
		const yVel = Math.sin(angle) * 10;
		const playerXJustified = player.position.x + (player.width / 2);
		const playerYJustified = player.position.y + (player.height / 2);

		const projectile = new Projectile(gameWidth, gameHeight, playerXJustified, playerYJustified, xVel, yVel, 10, 3)
		projectiles.push(projectile);
	}, 120);
});

document.addEventListener("mouseup", () => clearInterval(_shooting_interval));




twoBtn.addEventListener("click", () => {
	if (bestWpn < 1 && score >= 2000) {
		score -= 2000;
		bestWpn = 1;
		updateScore();
	}
});

shotgunBtn.addEventListener("click", () => {
	if (bestWpn < 2 && score >= 10000) {
		score -= 10000;
		bestWpn = 2;
		updateScore();
	}
});

rocketBtn.addEventListener("click", () => {
	if (bestWpn < 3 && score >= 25000) {
		score -= 25000;
		bestWpn = 3;
		updateScore();
	}
});

xrayBtn.addEventListener("click", () => {
	if (bestWpn < 4 && score >= 50000) {
		score -= 50000;
		bestWpn = 4;
		updateScore();
	}
});

laserBtn.addEventListener("click", () => {
	if (bestWpn < 5 && score >= 125000) {
		score -= 125000;
		bestWpn = 5;
		updateScore();
	}
});

flameBtn.addEventListener("click", () => {
	if (bestWpn < 6 && score >= 200000) {
		score -= 200000;
		bestWpn = 6;
		updateScore();
	}
});
