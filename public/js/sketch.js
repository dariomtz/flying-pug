var pug, dogImage, chancla;
var gravity = 0.3;
var difficulty = 1;
var points = 0;

var dogFrames = [], chanclaFrames = []

function preload(){
  dogImage = loadImage('img/pug0001.png')

  for (var i = 1; i < 18; i++) {
    var numStr = i.toString() 
    if (numStr.length === 1) {
      numStr = 0 + numStr;
    }
    chanclaFrames.push( loadImage('img/chancla00' + numStr + '.png'))
  }

  for (var i = 2; i < 15; i++) {
    var numStr = i.toString() 
    if (numStr.length === 1) {
      numStr = 0 + numStr;
    }
    dogFrames.push(loadImage('img/pug00' + numStr + '.png'))
  }
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  pug = new Dog();
  chancla = new Chancla(difficulty)

}
function draw(){
  background(255);
  pug.update(gravity);
  pug.show(dogFrames, dogImage);

  chancla.show(chanclaFrames);
  chancla.update();
  if(chancla.x < -(chancla.height)){
      points += 1
      $('#points').html("Points: "+ points);
      difficulty += 0.1;
      chancla = new Chancla(difficulty);
  }

  chanclaCenter = isInsideOf(pug.x, pug.y, pug.height, chancla.x + chancla.height / 2, chancla.y + chancla.height / 2);
  if ( chanclaCenter ) {
    alert('You lost!');
    difficulty = 1
    points = 0
    $('#points').html("Points: "+ points);
    chancla = new Chancla(difficulty);
    pug = new Dog();
  }
}

function keyPressed(){
  if(key === " " ){
    pug.jump()
  }
}

function isInsideOf(xSquare, ySquare, sideSquare, xPoint, yPoint) {
  if ((xPoint > xSquare && xPoint < xSquare + sideSquare) && (yPoint > ySquare && yPoint < ySquare + sideSquare)) {
    return true
  }else{
    return false
  }
}
