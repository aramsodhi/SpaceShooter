"use strict";

class hpBar {
	constructor(enemy) {
		this.width = 20;
		this.height = 5;
		this.fillWidth = 20;

		this.color = "red";

		this.position = {
			x: enemy.position.x,
			y: enemy.position.y - 30
		};
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.fillWidth, this.height);
	}

	update(enemyX, enemyY, enemyHP, enemyMaxHP) {
		this.position.x = enemyX;
		this.position.y = enemyY - 30;

		this.fillWidth = (enemyHP / enemyMaxHP) * this.width;
	}
}