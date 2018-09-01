function setup() {
    createCanvas(1080, 720);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        stroke(255);
    } else {
        fill(255);
        stroke(0);
    }
    ellipse(mouseX, mouseY, 80, 80);
}