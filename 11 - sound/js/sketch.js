/*
* @Author: OMAO
* @Date:   2019-08-12 21:05:42
* @Last Modified by:   OMAO
* @Last Modified time: 2019-08-12 22:02:51
*/


var spectrum;
var jumpButton;
var playButton;

function preload(){
  sound = loadSound('assets/lille.mp3');
}

function setup(){
  var cnv = createCanvas(800,800);
  fft = new p5.FFT();
  sound.amp(0.7);
  playButton = createButton("play");
  playButton.mouseClicked(togglePlay);

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
}

function draw(){
  background(100);

  spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }

  var waveform = fft.waveform();
  noFill();
  //beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);

    vertex(x,y);
  }
  //endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  console.log("togglePlay");
  if (sound.isPlaying()) {
    sound.pause();
    playButton.html("play");
    console.log("true->false");
  } else {
    sound.loop();
    playButton.html("pause");
    console.log("false->true");
  }
}

function jumpSong(jumpSong) {
  console.log("--jumpSong");
  let len = sound.duration();
  let jumpCurs = random(len);
  sound.jump(jumpCurs, 1);
  console.log(jumpCurs);
}
