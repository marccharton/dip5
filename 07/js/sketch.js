var mysketch = function(p){

  var spiro = new Spirograph(p);
  var curseur = {};

  p.setup = function() {
    p.createCanvas(700, 600);
    spiro.init();
    
    //curseur.value()
  }

  p.draw = function() {
    spiro.drawBackground();
    spiro.drawCircles();
  }

  p.keyReleased = function() {
    if (p.key==' ') {
      spiro.switchMode();
    }
  }

};

var myP5 = new p5(mysketch);