var bird;
var pipes = [];
var flr;

var spawnRate;
var fwdSpeed;
var score = 0;
var highscore = [0, 0, 0];
var magnification;

var usingMobile = false;
var cvs;
var startImg;
var bg;
var overImg;
var fg;
var ball;
var wall;

var gameState = {
    current : 1,
    begin : 1,
    game : 2,
    over : 3
}
var difficultyIndex = {
    current : 0,
    easy : 0,
    normal : 1,
    hard : 2
}

const flap = new Audio();
flap.src = ("../games/flappy/sound/flap.wav");

const hit = new Audio();
hit.src = ("../games/flappy/sound/hit.wav");

const drop = new Audio();
drop.src = ("../games/flappy/sound/drop.wav");

const pts = new Audio();
pts.src = ("../games/flappy/sound/pts.wav");

const submitButton = document.querySelectorAll('[data-submit-button]');

submitButton.forEach(button => {
  button.addEventListener("click", () => {
    submitHighscore();
  })
})

function preload() {
  startImg = loadImage("../games/flappy/img/start.png");
  bg = loadImage("../games/flappy/img/background.png");
  overImg = loadImage("../games/flappy/img/game_over.png");
  fg = loadImage("../games/flappy/img/grass.png");
  ball = loadImage("../games/flappy/img/football.png");
}

function setup() {
  frameRate(60);
  if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    usingMobile = true;
    cvs = createCanvas(windowWidth * .7, windowHeight / 2);
  }
  else {
    cvs = createCanvas(400, 600);
  }
  magnification = height / 600;
  cvs.parent("game-content");
  if(usingMobile) cvs = resizeCanvas(400 * magnification, windowHeight / 2);
  bird = new Bird(magnification);
  flr = new Floor();
}

function draw() {
    background(230);

    isOpen = document.querySelectorAll('.modal.active');
    if(isOpen.length == 0){
      gameState.current = gameState.begin;
    }

    switch(gameState.current){
      case gameState.begin:
        fill(255);
        rect(width / 2 - (60 * magnification), 180 * magnification, 120 * magnification, 60 * magnification); //Easy
        rect(width / 2 - (60 * magnification), 255 * magnification, 120 * magnification, 60 * magnification); //Norm
        rect(width / 2 - (60 * magnification), 330 * magnification, 120 * magnification, 60 * magnification); //Hard
        score = 0;
        bird.reset();
        pipes = [];
        image(startImg, width / 2 - 200 * magnification, 0, 400 * magnification, 600 * magnification);
        break;
        
      case gameState.game:
        image(bg, width / 2 - 200 * magnification, 0, 400 * magnification, 600 * magnification);
        for (var i = pipes.length - 1; i >= 0; i--) {
          pipes[i].show();
          pipes[i].update();
          if (pipes[i].hits(bird)) {
            hit.play();
            gameState.current = gameState.over;
          }
          if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
            pts.play();
            score++;
          }
        }

        if (flr.hit(bird)) {
            drop.play();
            gameState.current = gameState.over;
        }

        bird.update();
        bird.show();
        image(ball, bird.x - bird.radius, bird.y - bird.radius, bird.imgSize, bird.imgSize);
        flr.show();
        image(fg, flr.x, flr.y, flr.w, flr.h);

        if (frameCount % spawnRate == 0) {
          pipes.push(new Pipe(fwdSpeed));
        }
        fill(0);
        textAlign(LEFT);
        text("分数: " + score, 5, height - 5);
        textSize(26 * magnification);
        break;
        
      case gameState.over:
        image(bg, width / 2 - 200 * magnification, 0, 400 * magnification, 600 * magnification);
        for (var j = 0; j < pipes.length; j++){
          pipes[j].speed = 0;
          pipes[j].show();
          pipes[j].update();
        }
        flr.show();
        image(fg, flr.x, flr.y, flr.w, flr.h);
        bird.update();
        bird.show();
        image(ball, bird.x - bird.radius, bird.y - bird.radius, bird.imgSize, bird.imgSize);
        fill(255);
        stroke(0);
        rect(width / 2 - 100 * magnification, height / 2 + 55 * magnification, 200 * magnification, 50 * magnification);
        image(overImg, width / 2 - 200 * magnification, height / 2 - 200 * magnification, 400 * magnification, 400 * magnification);
        highscore[difficultyIndex.current] = Math.max(score, highscore[difficultyIndex.current]);
        fill(0);
        textAlign(CENTER);
        text(score, width / 2 - 47 * magnification, height / 2 - 5 * magnification);
        text(highscore[difficultyIndex.current], width / 2 + 43 * magnification, height / 2 - 5 * magnification)
        textSize(40 * magnification);
        break;
        
      default:
        break;
    }
}

function mouseClicked() {
  switch (gameState.current) {
    case gameState.begin:
      if (mouseInRange(width / 2 - (60 * magnification), 180 * magnification, width / 2 + 60 * magnification, 240 * magnification)) {
        spawnRate = 80;
        fwdSpeed = 2 * magnification;
        difficultyIndex.current = difficultyIndex.easy;
        gameState.current = gameState.game;
      }
      else if (mouseInRange(width / 2 - (60 * magnification), 255 * magnification, width / 2 + 60 * magnification, 315 * magnification)) {
        spawnRate = 60;
        fwdSpeed = 3 * magnification;
        difficultyIndex.current = difficultyIndex.normal;
        gameState.current = gameState.game;
      }
      else if (mouseInRange(width / 2 - (60 * magnification), 330 * magnification, width / 2 + 60 * magnification, 390 * magnification)) {
        spawnRate = 40;
        fwdSpeed = 4 * magnification;
        difficultyIndex.current = difficultyIndex.hard;
        gameState.current = gameState.game;
      }
      break;

    case gameState.game:
      if(mouseInRange(0, 0, width, height)) {
        flap.pause();
        flap.currentTime = 0;
        bird.up();
        flap.play();
      }
      break;

    case gameState.over:
      if(mouseInRange(width / 2 - 100 * magnification, height / 2 + 55 * magnification, width / 2 + 100 * magnification, height / 2 + 105 * magnification)) gameState.current = gameState.begin;
      break;

    default:
      break;
  }
}

function windowResized() {
  if (usingMobile) {
    cvs = resizeCanvas(windowWidth * .72, windowHeight / 2);
    magnification = windowHeight / (2 * 600);
    cvs = resizeCanvas(400 * magnification, windowHeight / 2);
    bird = new Bird(magnification);
  }
}

function mouseInRange(minX, minY, maxX, maxY) {
  if (mouseX  > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
    return true;
  }
  return false;
}

function submitHighscore() {
  print("Submit: " + highscore);
}
