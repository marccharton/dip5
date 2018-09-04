function setup() {
  createCanvas(720, 400);
}

function draw() {
  
  // change these parameters to change density
  // waouh incredible -_-
  var pas = 20; 
  var marge = 1;
  var size = pas / 2;

  var back = 127;
  var front1 = color(129, 206, 15);
  var front2 = color(255);
  background(back);
  noStroke();

  var square = new PrettySquare(height, width, front1, front2);
  square.draw(pas, marge, size, height, width);
}