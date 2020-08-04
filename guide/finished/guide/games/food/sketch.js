var score
var highscore = 0
var interval
var timer
var plate
var bg
var x
var screen

var sprites = []
var sounds = []
var foods = []


function preload() {
  sounds[0] = loadSound("../games/food/sounds/bite.mp3")
  sounds[1] = loadSound("../games/food/sounds/fail.mp3")
  for (var i = 0; i < 5; i++) {
    sprites[i] = loadImage("../games/food/sprites/food" + (i + 1) + ".png")
  }
  bg = loadImage("../games/food/sprites/background.png")
  plate = loadImage("../games/food/sprites/plate2.png")
}

function setup() {
  cv = createCanvas(windowWidth*0.6, windowWidth*0.4)
  cv.parent("game-content")
  screen = 0
  foods = []
  score = 0
  interval = 2000
  clearTimeout(timer)
  textAlign(CENTER)
  imageMode(CENTER)
  rectMode(CENTER)
  textStyle(BOLD)
  stroke(255)
  strokeWeight(2)
  loop()
}

function draw() {
  image(bg, width/2, height/2, width, height)
  if (screen == 1) {
    menu()
    noLoop()
  } else if (screen == 2) {
    game()
  } else if (screen == 3) {
    failed()
  }
}

function menu() {
  filter(BLUR,10)
  textSize(width/16)
  fill(0)
  text("食堂战争 FOOD WARS", width / 2, height * 0.45)
  textSize(width/28)
  text("点击任意处", width / 2, height*0.6)
}

function game() {
  push()
  textAlign(LEFT)
  textSize(width/35);
  fill(0)
  text("Score: " + score, width/50, height/20)
  text("Highscore: " + highscore, width/50, height*0.15)
  pop()
  x = mouseX<width*0.08?width*0.08:mouseX>=width*0.92?width*0.92:mouseX
  image(plate, x, height *0.96, width*0.16, height/15)
  for (let i = 0; i < foods.length; i++) {
    foods[i].fall()
    foods[i].display()
    if (foods[i].miss()) {
      screen = 3
      sounds[1].play()
      foods.splice(i, 1)
    } else if (foods[i].catched()) {
      sounds[0].play()
      score += 1
      highscore = score > highscore ? score : highscore
      foods.splice(i, 1)     
    }   
  }
}

function failed() {
  clearTimeout(timer)
  filter(INVERT)
  fill(255,0,0) //discord: Chomusuke#2719
  textSize(width/16)
  text("You Failed", width / 2, height*0.4)
  textSize(width/36)
  text("Your final score is", width / 2, height*0.55)
  text(score, width / 2, height*0.63)
  text("Click to try again", width / 2, height*0.7)
}

function restart() {
  setup()
}

function spawn() {
  foods.push(new Food())
  if (interval >= 300) interval *= 0.98
  timer = setTimeout(spawn, interval)
}

function mouseReleased() {
  if (screen!=0) {
    if (screen == 1 && mouseInRange(0, 0, width, height)) {
      screen = 2
      loop()
      setTimeout(spawn, 1000)
    }

    if (screen == 3 && mouseInRange(0, 0, width, height)) {
      sounds[1].stop()
      score = 0
      interval = 2000
      foods = []
      screen = 2
      setTimeout(spawn, 1000)
    }
  }
}

function windowResized() {
  cv.resize(windowWidth*0.6, windowWidth*0.4)
  for (i=0;i<foods.length;i++) foods[i].resize()
}

function mouseInRange(minX, minY, maxX, maxY) {
  if (mouseX  > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
    return true
  }
  return false
}