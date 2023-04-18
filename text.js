"use strict";

class Text {
	constructor(text, x, y, color) {
		this.text = text;
		this.color = color;

		this.font = " 24px 'VT323', monospace";

		this.position = {
			x: x,
			y: y
		}		
	}

	draw(ctx) {
		ctx.font = this.font;
		ctx.fillStyle = this.color;

		ctx.textAlign = "start";
		ctx.textBaseline = "alphabetic";
		ctx.direction = "ltr";

		ctx.fillText(this.text, this.position.x, this.position.y);
	}
}