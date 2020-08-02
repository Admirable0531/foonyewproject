var bird;
var pipes = [];
var flr;

var spawnRate;
var fwdSpeed;
var score = 0;  

var usingMobile = false;
var cvs
//let img;
var gameState = {
    current : 1,
    start : 1,
    game : 2,
    over : 3
}
var difficulty = {
    easy : "1",
    normal : "2",
    hard : "3"
}

const flap = new Audio();
flap.src = ("../games/flappyball/sound/sfx_flap.wav");

const hit = new Audio();
hit.src = ("../games/flappyball/sound/sfx_hit.wav");

const drop = new Audio();
drop.src = ("../games/flappyball/sound/drop.wav");

const pts = new Audio();
pts.src = ("../games/flappyball/sound/sfx_point.wav");

/*function preload() {
  img = loadImage('img/football.png');
}*/

function setup() {
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    usingMobile = true;
    cvs = createCanvas(windowWidth * .72, windowHeight / 2);
  }
  else {
    cvs = createCanvas(400, 600);
  }
    bird = new Bird(/*img*/);
    flr = new Floor();
    cvs.parent("game-content");
}

function draw() {
    background(0);

    const isOpen = document.querySelectorAll('.modal.active');
    if(isOpen.length == 0){
      gameState.current = gameState.start;
    }

    switch(gameState.current){
      case gameState.start:
        score = 0;
        bird.reset();
        pipes = [];
        fill(255);
        text("1.Easy\n2.Normal\n3.Hard\n\nType the numbers on your keyboard to\nchoose diffculty", 5, 20);
        textSize(20);
        break;
        
      case gameState.game:
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
        flr.show();

        if (frameCount % spawnRate == 0) {
          pipes.push(new Pipe(fwdSpeed));
        }
        fill(0);
        text("Score: " + score, 5, height - 5);
        textSize(20);
        break;
        
      case gameState.over:
        for (var j = 0; j < pipes.length; j++){
          pipes[j].speed = 0;
          pipes[j].show();
          pipes[j].update();
        }
        bird.update();
        bird.show();
        flr.show();
        fill(0);
        text("Your score: " + score + "\nPress 'r' to restart", 5, height - 30);
        textSize(20);
        break;
        
      default:
        break;
    }
}

function keyPressed() {
  if (gameState.current == gameState.start){
    switch(key){
          case difficulty.easy:
            spawnRate = 80;
            fwdSpeed = 2;
            gameState.current = gameState.game;
            break;
            
          case difficulty.normal:
            spawnRate = 60;
            fwdSpeed = 3;
            gameState.current = gameState.game;
            break;
            
          case difficulty.hard:
            spawnRate = 40;
            fwdSpeed = 4;
            gameState.current = gameState.game;
            break;
            
          default:
            break;
        }  
  }
  else if (key == " " && gameState.current == gameState.game){
    flap.pause();
    flap.currentTime = 0;
    bird.up();
    flap.play();
  }
  else if (key == "r" && gameState.current == gameState.over){
    print(score);
    gameState.current = gameState.start;
  }
}

function mouseClicked() {
  if (gameState.current == gameState.game) {
    flap.pause();
    flap.currentTime = 0;
    bird.up();
    flap.play();
  }
}

function windowResized() {
  if (usingMobile) {
    cvs = resizeCanvas(windowWidth * .72, windowHeight / 2);
  }
}
