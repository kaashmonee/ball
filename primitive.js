function Vector (xval,yval) {
	this.x=xval;
	this.y=yval;
	this.add = function (vector) {return new Vector (this.x+vector.x, this.y+vector.y)}; //function to add two vectors
	this.subtract = function (vector) {return new Vector (this.x-vector.x, this.y-vector.y)}; //function to subtract two vectors
	this.mag = function () {return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y,2))}; //returns the magnitude of the vector
}

function Ball (posx, posy, velx, vely, radius) {
	this.x=posx;
	this.y=posy;
	this.vx=velx;
	this.vy=vely;
	this.r=radius;
	this.mass=radius/50;
}
var canvasCounter=1;
//initializes canvas variables to be used in externa files
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

function createCanvas () { //creates and returns a new canvas element
	var canvas = document.createElement('canvas');
	//canvas.id = "canvas"+canvasCounter;
	canvas.width=canvasWidth;
	canvas.height=canvasHeight;
	canvas.style.zIndex=canvasCounter;//creates canvas hierarchy, on what zplane each canvas is on
	canvasCounter++;
	//positions all the canvasas to be right on top of each other
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.position = "absolute";

	document.body.appendChild(canvas); //appends the canvas on to the HTML file
	return canvas;
}