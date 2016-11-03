function Vector (xval,yval) {
	this.x=xval;
	this.y=yval;
}

function Ball (posx, posy, velx, vely, radius) {
	this.x=posx;
	this.y=posy;
	this.vx=velx;
	this.vy=vely;
	this.r=radius;
}
var canvasCounter=1;
//initializes canvas variables to be used in externa files
var canvasWidth = window.innerWidth-5;
var canvasHeight = window.innerHeight-5;
function createCanvas () { //creates and returns a new canvas element
	var canvas = document.createElement('canvas');
	//canvas.id = "canvas"+canvasCounter;
	canvas.width=canvasWidth;
	canvas.height=canvasHeight;
	canvas.style.zIndex=canvasCounter;//creates canvas hierarchy, on what zplane each canvas is on
	canvasCounter++;
	//positions all the canvasas to be right on top of each other
	canvas.style.left = "2px";
	canvas.style.top = "2px";
	canvas.style.position = "absolute";

	document.body.appendChild(canvas); //appends the canvas on to the HTML file
	return canvas;
}