"use strict";

function updateScore() {
	ctx.clearRect(0, 0, 155, 21);
	scoreText.text = `Score: ${score}`;
	scoreText.draw(ctx);
}

const randomNum = (min, max) => { return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)) };

function checkGameOver() {
	if(wall.hp <= 0) {
		scoreElem.innerHTML = `Score: ${score}`;
		messageElem.innerHTML = "Game Over";
		gameOverElem.style.display = "block";

		running = false;		
		clearInterval(_interval);
	}
}

function checkWin() {
	if (currentLevel > levels.length) {
		scoreElem.innerHTML = `Score: ${score}`;
		messageElem.innerHTML = "You Win!";
		gameOverElem.style.display = "block";
		
		running = false;			
		clearInterval(_interval);
	}
}

function pauseGame() {
	shopElem.style.display = "block";
	running = false;			
	shopOpen = true;
}

function unpauseGame() {		
	shopElem.style.display = "none";
	running = true;	
	shopOpen = false;
}