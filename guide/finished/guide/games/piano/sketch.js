var keys = []
var sounds1 = []
var black
var on

function preload() {
  for (i = 0; i < 17; i++) {
    sounds1[i] = loadSound("../games/piano/sounds/" + i + ".ogg");
  }

}

function setup() {
  cvs = createCanvas(windowHeight,windowHeight*0.4)
  rectMode(CENTER)
  stroke(0)
  strokeWeight(2)
  for (i = 0; i < 17; i++) {
    keys[i] = i < 10 ? new WhiteKey(i) : new BlackKey(i); 

  }
  cvs.parent("game-content")
}

function draw() {
  background(255)
  for (i = 10; i < 17; i++) {
    black = keys[i].onHover()
    if (black) break
  }
  for (i = 0; i < 17; i++) {
    keys[i].display(i < 10 ? 255 : 0)
    if (keys[i].onHover()) {
      if (!black || (black && i > 9)) {
        keys[i].tint()
      }
    }
  }

}

function mousePressed() {
  for (i = 0; i < 17; i++) {
    sounds1[i].stop()
  }
  for (i = 16; i > -1; i--) {
    if (keys[i].onHover()) {
      if (on)sounds1[i].play()
      break
    }
  }
}