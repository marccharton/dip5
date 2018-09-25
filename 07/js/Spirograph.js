/**
 * Main spirograph class
 * Manage all the spirograph context
 * 2 modes :
 *  - Design mode : circles with all circles and paths
 *  - Trace mode : drawing based on circles' paths
 */
class Spirograph {
  /**
  * @param {Object} p5                 - p5 object context
  * @param {Array}  circleList         - an array to hold all the current angles
  * @param {bool}   isTraceMode        - are we tracing?
  * @param {color}  backgroundColor    - mh well... the color of the... background ? maybe...
  * @param {color}  designModePenColor - the color of pen in design mode (no shit ! really ?!)
  * @param {int}    baseRadius         - an initial radius value for the central sine
  * @param {int}    circleSizeStep     - divider of cirecle size step by step
  * @param {int}    minSizeToTrace     - min circle size to draw
  * @param {float}  fund               - the speed of the central sine
  * @param {int}    ratio              - what multiplier for speed is each additional sine?
  * @param {int}    alpha              - how opaque is the tracing system
  */

  constructor(p5) {
    this.p5 = p5;
    this.circleList = new Array(10);
    this.isTraceMode = false;
    this.backgroundColor = this.p5.color(240);
    this.designModePenColor = this.p5.color(150);
    this.circleSizeStep = 1;
    this.minSizeToTrace = 0;
    this.fund = 0.015;
    this.ratio = 1;

    // cursors
    this.backgroundColorCursor = p.createSlider(0, 255);
    this.backgroundColorCursor.position(0,20);
  }

  init() {
    this.baseRadius = this.p5.height / 4;
    this.p5.background(this.backgroundColor);

    for (var i = 0; i < this.circleList.length; i++) {
      this.circleList[i] = this.p5.PI;
    }
  }

  drawBackground() {
    if (!this.isTraceMode) {
      this.p5.background(this.backgroundColor);
      this.p5.stroke(this.designModePenColor);
      this.p5.noFill();
    }
  }

  drawCircles() {

    this.updateParams();

    this.p5.push(); // start a transformation matrix
    this.p5.translate(this.p5.width/2, this.p5.height/2); // move to middle of screen

    for (var i = 0; i < this.circleList.length; i++) {
      var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
      var radius = this.rotateCircle(i);
      this.drawCircle(radius, i);
      this.drawLittleCircle(radius, i, erad);
      this.p5.translate(0, radius); // move into position for next sine
      this.moveCurrentCircle(i);
    }

    this.p5.pop();
  }

  rotateCircle(i) {
    var radius = this.baseRadius / (i+ this.circleSizeStep); // radius for circle itself
    this.p5.rotate(this.circleList[i]); // rotate circle
    return radius;
  }

  drawCircle(radius, i) {
    if (!this.isTraceMode) {
      if (i >= this.minSizeToTrace) {
        this.p5.ellipse(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
      }
    }
  }

  drawLittleCircle(radius, i, erad) {
    this.p5.push(); // go up one level

    this.p5.translate(0, radius); // move to sine edge
    if (!this.isTraceMode) {
      if (i >= this.minSizeToTrace) {
        this.p5.ellipse(0, 0, 5, 5); // draw a little circle
      }
    }
    if (this.isTraceMode && i > this.minSizeToTrace) {
      this.p5.stroke(0, 0, 255*(this.p5.float(i)/this.circleList.length), this.alpha); // blue
      this.p5.fill(0, 0, 255, this.alpha/2); // also, um, blue
      erad = 5.0*(1.0-this.p5.float(i)/this.circleList.length); // pen width will be related to which sine
      this.p5.ellipse(0, 0, erad, erad); // draw with erad if tracing
    }

    this.p5.pop(); // go down one level
  }

  moveCurrentCircle(i) {
    this.circleList[i] = (this.circleList[i]+(this.fund+(this.fund*i*this.ratio))) % this.p5.TWO_PI; // update angle based on fundamental
  }

  switchMode() {
    this.isTraceMode = !this.isTraceMode;
    this.p5.background(this.backgroundColor);
  }

  updateParams() {
    this.backgroundColor = this.backgroundColorCursor.value();
  }

}