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
	var velBFrame = new Vector (ballA.vx - ballB.vx, ballA.vy - ballB.vy); //creates a vew vector with x and y components that are ball A's velocity in B's reference frame
	var vectorAtoB = new Vector (ballB.x - ballA.x, ballB.y - ballA.y); //creates a vector that starts at A and points to B
	var cosTheta = dotP (vectorAtoB, velBFrame); //defines the nubmer value of the cosine of angle subtended by the two vectors
	var theta  = cosInv(cosTheta); //the angle that subtends the two vectors
	var magV = velBFrame.mag(); //magnitude of the velocity vector in ball B's reference frame
	var vx = magV*Math.cos(theta);
	var vy = magV*Math.sin(theta);
	var vx1After = ((ballA.mass-ballB.mass)/(ballA.mass+ballB.mass))*vx;
	var vy1After = 
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

function dotP (vector1, vector2) {
	return (vector1.x*vector2.x)+(vector1.y*vector2.y); //finds the dot product of two vectors
}

function cosInv (theta) {
	if (theta > 1) {return null;}
	else return Math.acos(theta);
}
