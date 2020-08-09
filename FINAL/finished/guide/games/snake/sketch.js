let book;
let gap;
let snake;
let pLoc = [];
let highest = 0;
let game_over;
let bite;
let bg;
let head;
let cv;


function preload() {
    game_over    =loadSound('../games/snake/library/game_over.mp3');
    bite         =loadSound('../games/snake/library/bite.mp3');
    bk           =loadImage ("../games/snake/library/food.png");
    bg           =loadImage("../games/snake/library/background.png");
    head         =loadImage("../games/snake/library/wormhead.png");
    }

function setup() {
    cv=createCanvas(460,460);

    cv.parent("game-content");
    gap=width/10;
    book = new Fruit();
    snake = new Head();
    frameRate(10);
    textSize(14);
    textStyle(BOLD);

    for (let i = 0; i < 2; i++) {
        snake.tails.push(new Tail(snake.x, snake.y + (15 * i)));
    }
     var options = {
    preventDefault: true
  };

 
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);

  noLoop();

}

function draw() {
    background(bg);
    

    noFill();
    noStroke();
    
    for (let i = snake.tails.length - 1; i >= 0; i--) {
        if (i == 0) {
            snake.tails[i].x = snake.x;
            snake.tails[i].y = snake.y;
        } else {
            snake.tails[i].x = snake.tails[i - 1].x;
            snake.tails[i].y = snake.tails[i - 1].y;
        }
        snake.tails[i].show(i);
    }
    pLoc.x = snake.x;
    pLoc.y = snake.y;
    snake.update();
    if (snake.collision(book)) {
        bite.play();
        snake.score++;
        book.eat();
        snake.tails.push(new Tail(pLoc.x, pLoc.y));
    }
    if (snake.score > highest) {
        highest = snake.score;
    }
    if (snake.collision(book) == false || snake.tail_collide() == true) {
        game_over.play();
        snake.redefine();
        book.eat();
    }
    book.show();
    fill(43, 51, 25);
    text("目前分数: " + int(snake.score), width/45, height*0.92);
    text("最高分数: " + int(highest), width/45, height*0.97);
    snake.show();
    noFill();
    strokeWeight(4);
    stroke(43, 51, 25);
    rect(1, 1, width - 2, height - 2);
}
    

function keyPressed() {
    if (keyCode == LEFT_ARROW && snake.dir != 'right') {
        snake.dir = 'left';
    } else if (keyCode == RIGHT_ARROW && snake.dir != 'left') {
        snake.dir = 'right';
    } else if (keyCode == UP_ARROW && snake.dir != 'down') {
        snake.dir = 'up';
    } else if (keyCode == DOWN_ARROW && snake.dir != 'up') {
        snake.dir = 'down';
    }
}
function swiped(event) {
    if (event.direction==2 && snake.dir != 'right') {
        snake.dir = 'left';
    } else if (event.direction==4 && snake.dir != 'left') {
        snake.dir = 'right';
    } else if (event.direction==8 && snake.dir != 'down') {
        snake.dir = 'up';
    } else if (event.direction==16 && snake.dir != 'up') {
        snake.dir = 'down';
    }
  
}
function windowResized() {
 cv.resize(windowHeight*0.8,windowHeight*0.8)

}