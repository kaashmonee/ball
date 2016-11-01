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

function createCanvas () { //creates and returns a new canvas element
	var canvas = document.createElement('canvas');
	//canvas.id = "canvas"+canvasCounter;
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	canvas.style.zIndex=canvasCounter;//creates canvas hierarchy, on what zplane each canvas is on
	canvasCounter++;
	//main.style.left = "2px";
	//main.style.right = "2px";
	document.body.appendChild(canvas); //appends the canvas on to the HTML file
	return canvas;
}