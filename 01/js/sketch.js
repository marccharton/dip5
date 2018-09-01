
function setup() {
    createCanvas(1080, 720);

    drawingContext.shadowOffsetX = 5;
  	drawingContext.shadowOffsetY = -5;
  	drawingContext.shadowBlur = 50;
  	drawingContext.shadowColor = "black";
  	background(200);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        stroke(255);
        drawingContext.shadowColor = "blue";
    } else {
    	drawingContext.shadowColor = "black";
        fill(255);
        stroke(0);
    }
    ellipse(mouseX, mouseY, 80, 80);
}