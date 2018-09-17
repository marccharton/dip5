function setup() {
  createCanvas(710, 400);
  background(204); // clear the screen
}

function draw() {
	clearStates(height/4);
	push();
	noState(height/2);
	pop();
	recursiveState(height/4 * 3);
}

function clearStates(height) {
	push();
  translate(width/3,height);
  fill(150,0,0);
  ellipse(0, 0, 70, 70);
	pop();

  push();
  translate(width/2,height);
  fill(0,150,0);
  ellipse(0, 0, 60, 60);
  pop();

  push();
  translate(width/3 * 2,height);
  fill(0,0,150);
  ellipse(0, 0, 50, 50);
  pop();
}

function noState(height) {
  translate(width/3,height);
  fill(150,0,0);
  ellipse(0, 0, 70, 70);

  translate(width/6,0);
  fill(0,150,0);
  ellipse(0, 0, 60, 60);

  translate(width/6,0);
  fill(0,0,150);
  ellipse(0, 0, 50, 50);
}


function recursiveState(height) {

	push();
  translate(width/3,height);
  fill(150,0,0);

  push();
  translate(width/6,0);
  fill(0,150,0);

  push();
  translate(width/6,0);
  fill(0,0,150);

  ellipse(0, 0, 70, 70);
  pop();
  ellipse(0, 0, 60, 60);
  pop();
  ellipse(0, 0, 50, 50);
}