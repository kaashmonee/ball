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
function handleCollisionMultipleBalls (ball1, ball2){
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
}

function doCollision (ballA, ballB) {
	//does the collission between ball A and ball B
}

function calcDistance (ballA, ballB) {
	//calculates the distance between the two balls
}