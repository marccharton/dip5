class GlitchLine {
	
	constructor(color, position, speed) {
		this.color = color;
		this.positionStart = position;
		this.positionEnd = position;
		this.speed = speed;
		this.isBending = false;
	}

	move(speed) {
		if (speed === undefined) {
			speed = this.speed;
		}

		this.positionStart = this.positionStart - speed;
		this.positionEnd = this.positionEnd - speed;

	  if (this.positionStart < 0) { 
	    this.positionStart = height; 
	    this.positionEnd = height; 
	  } 
	}

	glitchMove(distance) {
		this.move(distance);
	}

	glitchBend(bendDelayMax) {
		this.isBending = true;
		this.bendDelay = 0;
		this.bendDelayMax = bendDelayMax;
		this.bendDirection = round(random(20) % 2) == 0 ? "right" : "left";
	}

	bend(bendOffset) {
		if (this.bendDirection == "right") {
			this.bendRight(bendOffset);
		}
		else {
			this.bendLeft(bendOffset);
		}

		this.bendDelay++;

		if (this.bendDelay >= this.bendDelayMax)	{
			this.bendDelay = 0;
			this.isBending = false;
			this.positionStart = this.positionEnd;
		}
	}

	bendRight(bendOffset) {
		this.positionStart -= bendOffset;
		this.positionEnd += bendOffset;
	}

	bendLeft(bendOffset) {
		this.positionStart += bendOffset;
		this.positionEnd -= bendOffset;
	}

	draw() {
		stroke(this.color);
		line(0, this.positionStart, width, this.positionEnd);
	}
}