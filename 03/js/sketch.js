var delay = 0;
var lineManager;

function setup() {
  createCanvas(720, 400);  
  frameRate(30);
  lineManager = new LineManager(width, height);
  lineManager.addLine();
}

function draw() { 
  background(0);
  lineManager.draw();
} 

function mouseClicked(event) {
  event.preventDefault();
  lineManager.addLine();
}

function mouseWheel() {
  lineManager.reset();
}
