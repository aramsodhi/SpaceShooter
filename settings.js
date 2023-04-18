"use strict";

const gameWidth = 1000;
const gameHeight = 562;

const levelsInit = [
	[10, 0, 0, 5], // 1
	[10, 5, 0, 0], // 2
	[15, 5, 0, 0], // 3
	[15, 10, 0, 0], // 4
	[20, 15, 10, 0], // 5
	[25, 20, 10, 0], // 6
	[20, 15, 15, 0], // 7
	[40, 10, 20, 0], // 8
	[35, 30, 20, 0], // 9
	[50, 50, 50, 0] // "boss" fight 1 27800
];

let particleNum = 20;
let projectileParticleNum = 5;
const particlePower = 10;