function handleCollision (ball, canvas) { //attempts to detect and fix collisions by fixing ball's velocity
	//takes canvas argument so it knows which canvas boundaries to adhere to
	if (canvas.width-ball.x<(ball.r+10)|| ball.x<ball.r-10) {
		ball.vx*=-1*dampingCoefficient;
	}
	if (canvas.height-ball.y<(ball.r+10) || ball.y<ball.r-10) {
		ball.vy*=-1*dampingCoefficient;
	}
}
//handling collissions with two balls 
function handleCollisionMultipleBalls (ball1, ball2) {
	for (var a = 0; a < ballArray.length; a++) {
		for (var b = a+1; b < ballArray.length; b++) {
			if (isCollide(ballArray[a], ballArray[b])) {
				doCollision(ballArray[a], ballArray[b]);
			}
		}
	}
}

function isCollide (ballA, ballB) {
	//determine whether or not ball A and ball B are colliding
	return calcDistance(ballA, ballB) <= (ballA.r+ballB.r); //just checks one ball because there is no need to check multiple balls for collissions
}

function doCollision (ballA, ballB) {
	//does the collission between ball A and ball B
	var theta = atan(calcAbsDistance(ballB.y, ballA.y)/calcAbsDistance(ballB.x, ballB.y));

	}

function calcDistance (ballA, ballB) {
	//calculates the distance between the two balls
	var ydist = Math.abs(ballB.y - ballA.y);
	var xdist = Math.abs(ballB.x - ballB.y);
	var distance = Math.sqrt(Math.pow(xdist,2)+Math.pow(ydist,2));
	//uses pythogorean theorem to calculate the distance between the two balls
}

function calcAbsDistance (pointA, pointB) {//calculates the absolute value of the distance between two points
	return Math.abs(pointB - pointA);
}