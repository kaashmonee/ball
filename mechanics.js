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
    return calcDistance(ballA, ballB) <= (ballA.r + ballB.r); //just checks one ball because there is no need to check multiple balls for collissions
}

function doCollision(ballA, ballB) {
    var parallelVector = twoBallVector(ballA, ballB); //defined vector between two balls in new coordinate frame
    var perpVector = perpVector(parallelVector); //defined perpendicular vector in new coordinate frame
    var avectorx = aProjectOntoB(new Vector(ballA.vx, ballA.vy), parallelVector);
    var avectory = aProjectOntoB(new Vector(ballA.vx, ballA.vy), perpVector);
    var bvectorx = aProjectOntoB(new Vector(ballB.vx, ballB.vy), parallelVector);
    var bvectory = aProjectOntoB(new Vector(ballB.vx, ballB.vy), perpVector);
    var aPrimeVectorX = elasticCollissionV1(avectorx, bvectorx, ballA.mass, ballB.mass);
    var bPrimeVectorX = elasticCollissionV2(avectorx, bvectorx, ballA.mass, ballB.mass);
    var aPrimeVectorY = elasticCollissionV1(avectory, bvectory, ballA.mass, ballB.mass);
    var bPrimeVectorY = elasticCollissionV2(avectory, bvectory, ballA.mass, ballB.mass);
    //vector components after collission
    var axPrimeVectorX = aProjectOntoB(aPrimeVectorX, new Vector(1, 0));
    var ayPrimeVectory = aProjectOntoB(aPrimeVectorY, new Vector(0, 1));
    var bxPrimeVectorX = aProjectOntoB(bPrimeVectorX, new Vector(1, 0));
    var byPrimeVectorY = aProjectOntoB(bPrimeVectory, new Vector(0, 1));
    ballA.vx = axPrimeVectorX;
    ballA.vy = ayPrimeVectorY;
    ballB.vx = bxPrimeVectorX;
    ballB.vy = byPrimeVectorY;
    //both velocity vectors of each ball in new coordinate frames
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

function vectorMag(vector) {
    return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
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
