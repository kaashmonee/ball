//alert('something is working2');
function handleCollision(ball, canvas) { //attempts to detect and fix collisions by fixing ball's velocity
    //takes canvas argument so it knows which canvas boundaries to adhere to
    if (canvas.width - ball.x < (ball.r + 10) || ball.x < ball.r - 10) {
        ball.vx *= -1 * dampingCoefficient;
        //ball.x += ball.vx;
    }
    if (canvas.height - ball.y < (ball.r + 10) || ball.y < ball.r - 10) {
        ball.vy *= -1 * dampingCoefficient;
        //ball.y+=ball.vy;
    }
}
//handling collissions with two balls
function handleCollisionMultipleBalls() {
    //alert("this function is being called");
    for (var a = 0; a < ballArray.length; a++) {
        for (var b = a + 1; b < ballArray.length; b++) {
            if (isCollide(ballArray[a], ballArray[b])) {
                doCollision(ballArray[a], ballArray[b]);
            }
        }
    }
}

function isCollide(ballA, ballB) {
    //determine whether or not ball A and ball B are colliding
    return distance(ballA, ballB) <= (ballA.r + ballB.r); //just checks one ball because there is no need to check multiple balls for collissions
}

function doCollision(ballA, ballB) {
    var tangent = new Vector(ballB.x - ballA.x, ballB.y - ballA.y);
    var utangent = tangent.divide(tangent.mag());
    var unormal = new Vector(-1 * utangent.y, utangent.x);
    alert("x: " + utangent.x + " y: " + utangent.y);
    alert("Mag: " + unormal.mag() + "unormal: " + unormal.x + " " + unormal.y); //testing to see whether the vectors and the magnitudes are working
}

function dotP(vector1, vector2) {
    return (vector1.x * vector2.x) + (vector1.y * vector2.y); //finds the dot product of two vectors
}

function cosInv(theta) {
    if (theta > 1) {
        return null;
    } else return Math.acos(theta);
}

function twoBallVector(ball1, ball2) {
    return new Vector(ball2.x - ball1.x, ball2.y - ball1.y);
}

function perpVector(vector) {
    return new Vector(-vector.y, vector.x);
}

function unitize(vector) { //returns a unit vector in the same direction
    return new Vector(vector.x / vector.mag(), vector.y / vector.mag());
}

function elasticCollissionV1(v1, v2, m1, m2) {
    return ((m1 - m2) / (m1 + m2)) * v1 + ((2 * m2) / (m1 + m2)) * v2;
}

function elasticCollissionV2(v1, v2, m1, m2) {
    return ((2 * m1) / (m1 + m2)) * v1 - ((m1 - m2) / (m1 + m2)) * v2;
}

function aProjectOntoB(vectorA, vectorB) {
    return dotP(vectorA, vectorB) / vectorMag(vectorB);
}

function distance(ballA, ballB) {
    return Math.sqrt(Math.pow(ballA.x - ballB.x, 2) + Math.pow(ballA.y - ballB.y, 2));
}
