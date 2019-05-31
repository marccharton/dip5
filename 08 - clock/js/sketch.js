/*
* @Author: OMAO
* @Date:   2019-04-10 12:58:47
* @Last Modified by:   OMAO
* @Last Modified time: 2019-04-10 13:42:27
*/

var angleEnd = 0;
var angleStart = 0.01;
var colorR = 0;
var colorG = 0;
var colorB = 0;

function setup() {
  createCanvas(720, 400);
  /*drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = "black";*/
  background(200, 150, 255);
  angleEnd = random(3);
  colorR = random(255);
  colorG = random(255);
  colorB = random(255);
}

function draw() {
  noFill();
  colorR = (colorR + random(2)) % 255;
  colorG = (colorG + random(2)) % 255;
  colorB = (colorB + random(20)) % 255;
  stroke(colorR, colorG, colorB);
  arc(500, 100, 200, 200, angleStart, angleEnd, PIE);

  angleEnd += random(200) / 1000;
  angleStart += random(4000) / 1000;
/*  if (Math.round(angleEnd) % 5 == 0) {
    background(200, 150, 255);
  }*/

  console.log("start = " + angleStart);
  console.log("end = " + angleEnd);
  console.log("colorR = " + colorR);
  console.log("colorG = " + colorG);
  console.log("colorB = " + colorB);
}
