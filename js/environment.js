const gameCanvas = document.querySelector("#game-canvas");
const context = gameCanvas.getContext("2d");
const GRAVITY = 2;
gameCanvas.width = innerWidth;
gameCanvas.height = innerHeight - 120;