/*
	PrettySquare
*/
class PrettySquare {

	constructor(height, width, frontColor1, frontColor2) {
		this.height = height;
		this.width = width;
		this.frontColor1 = frontColor1;
		this.frontColor2 = frontColor2;
	}

	draw(pas, marge, size, height, width) {
		
		var step = 0;
		var stepH = 0;

		for (var i = 0; i < height/pas; i += 1) {
				step = i * pas;
				fill(this.frontColor1);
				rect(0, step, width, size);

				stepH = step * marge;
				if (stepH < height) {
					fill(this.frontColor2);
					rect(stepH, 0, size, height);
				}
		}
	}

}