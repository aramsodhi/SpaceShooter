"use strict";

const titleScreen = document.getElementById("titleScreen");
const playBtn = document.getElementById("playBtn").addEventListener("click", () => {
	unpauseGame();
	titleScreen.style.display = "none";
});

const twoBtn = document.getElementById("2projBtn");
const shotgunBtn = document.getElementById("shotgunBtn");
const rocketBtn = document.getElementById("rocketBtn");
const xrayBtn = document.getElementById("xrayBtn");
const laserBtn = document.getElementById("laserBtn");
const flameBtn = document.getElementById("flameBtn");
const shopElem = document.getElementById("shop");
let shopOpen = false;

const gameOverElem = document.getElementById("gameover");
const resetGameBtn = document.getElementById("playagain").addEventListener("click", function resetGame() {
	projectiles = [];
	particles = [];
	enemies = [];
	hpbars = [];
	enemies.push(new Enemy(gameWidth, gameHeight));
	score = 0;
	gameOverElem.style.display = "none";
	levels = levelsInit;
	currentLevel = 0;
	bestWpn = 0;

	wall.hp = wall.maxHP;
	player.position.y = (gameHeight / 2) - player.width / 2;

	running = true;
	_interval = setInterval(loop, [10]);
});

const scoreElem = document.getElementById("score");
const messageElem = document.getElementById("message");