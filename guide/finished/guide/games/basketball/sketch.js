var mouseJustPressed = false;
var shotMade = 0;
var score = 0;
var plays = 0;
var img;
var basketball;
var sound;
var countdown;
var state = 0;
var timer = 30;
var mid = 0;
var countdown1;
var scorePic;
var playAgain;
var img2;
var finalScore;

function preload() {
  img = loadImage('../games/basketball/assets/background.jpg');
  basketball = loadImage('../games/basketball/assets/basketball.png');
  countdown1 = loadImage('../games/basketball/assets/countdown.png');
  scorePic = loadImage('../games/basketball/assets/score1.png');
  playAgain = loadImage('../games/basketball/assets/clicktoplayagain.png')
  finalScore = loadImage('../games/basketball/assets/finalscore.png');
  img2 = loadImage('../games/basketball/assets/img2.jpg');
  sound = loadSound('../games/basketball/assets/hahaha.mp3');
}

function setup() {
  cvs = createCanvas(600, 400);
  xbegin = 50;
  ybegin = 325;
  
  x = xbegin;
  y = ybegin;
  
  speedX = 0.3;
  speedY = -9;
  
  speed = sqrt(speedX * speedX + speedY * speedY);
  
  g = -0.3;

  hoopX = 500;
  hoopY = 100;

  direction = 1;

  radius = 23;
  
  shoot = 0;
  scoreCounted = 0;

  sound = loadSound('../games/basketball/assets/hahaha.mp3');
  cvs.parent("game-content");

}

function draw() {
  textAlign(CENTER);
  imageMode(CENTER);
  image(img,width/2,height/2,width,height);

  fill(0);
  textSize(30);
  image(scorePic,480,183,900,800);
  text(+ score, 320, 65);
  
  noFill();
  stroke(0);
  strokeWeight(4);
  stroke(255, 140, 0);
  ellipse(hoopX, hoopY, radius * 3, radius / 2);
  stroke(0);
  fill(255, 255, 255);
  quad(hoopX + radius * 3 / 2 - radius / 5, hoopY - radius / 5, hoopX + radius * 3 / 2 + radius *   0.75 - radius / 5, hoopY + radius / 5, hoopX + radius * 3 / 2 + radius * 0.75 - radius / 5,       hoopY - radius * 3 + radius / 5, hoopX + radius * 3 / 2 - radius / 5, hoopY - radius * 3 -       radius / 5)
  line(hoopX + radius * 3 / 2 + radius / 10, hoopY, hoopX + radius * 3 / 2 + radius / 10, height*0.62   + radius);
  
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }

  noFill();

  stroke(204, 51, 51);
  strokeWeight(2.5);
  line(hoopX - radius * 3 / 2, hoopY, hoopX - radius, hoopY + 3 * radius);
  line(hoopX + radius, hoopY + 3 * radius, hoopX + radius * 3 / 2, hoopY);
  line(hoopX + radius * 3 / 2, hoopY, (hoopX - radius * 3 / 2 + hoopX - radius) / 2, hoopY + radius * 3 / 2);
  line(hoopX - radius * 3 / 2, hoopY, (hoopX + radius * 3 / 2 + hoopX + radius) / 2, hoopY + radius * 3 / 2);
  line((hoopX - radius * 3 / 2 + hoopX - radius) / 2, hoopY + radius * 3 / 2, hoopX + radius, hoopY + 3 * radius);
  line((hoopX + radius * 3 / 2 + hoopX + radius) / 2, hoopY + radius * 3 / 2, hoopX - radius, hoopY + 3 * radius);
  stroke(0);
  strokeWeight(1);

  rimX = hoopX - radius * 3 / 2;
  rimY = hoopY;

  boardX = hoopX + radius * 3 / 2;
  boardY = hoopY - radius * 3;

  if (shoot == 1) {
    speedY = speedY - g;

    x += direction * speedX;

    y += speedY;

    if (y > ybegin) {
      y = ybegin;
      speedY *= -0.5;
    }

    if (x > 600 - radius) {
      x = 600 - radius;
      speedX *= -0.5;
    }

    if (x < 0 + radius) {
      x = radius;
      speedX *= -0.5;
    }
  }
  
  

  if ((rimX - x) * (rimX - x) + (rimY - y) * (rimY - y) <= radius * radius) {
    speed = sqrt(speedX * speedX + speedY * speedY);
    speedX = -speed * (rimX - x) / radius;
    speedY = -speed * (rimY - y) / radius;
  }

  if (hoopY - radius * 3 - radius / 5 < y & y < hoopY + radius / 5) {
    if (x > hoopX + radius * 3 / 2 - radius / 5 - radius & x < hoopX + radius * 3 / 2 + radius * 0.75 - radius / 5 & speedX > 0) {
      x = hoopX + radius * 3 / 2 - radius / 5 - radius
      speedX = -speedX * 0.5;
    }
    if (x > hoopX + radius * 3 / 2 + radius * 0.75 & x < hoopX + radius * 3 / 2 + radius * 0.75 + radius - radius / 5 & speedX < 0) {
      x = hoopX + radius * 3 / 2 + radius * 0.75 + radius - radius / 5
      speedX = -speedX * 0.5;
    }
  } else if ((boardX - x) * (boardX - x) + (boardY - y) * (boardY - y) <= radius * radius) {
    speed = sqrt(speedX * speedX + speedY * speedY);
    speedX = -speed * (boardX - x) / radius;
    speedY = -speed * (boardY - y) / radius;
  }

  if ((hoopX - x) * (hoopX - x) + (hoopY - y) * (hoopY - y) <= (0.6 * radius) * (0.6 * radius) & speedY > 0) {
    shotMade = 1;
    speedX = 0.3 * speedX;

  }

  fill(201, 16, 174);
  stroke(0);
  strokeWeight(1);
  image(basketball, x, y, radius * 2, radius * 2);
  push();
    mid=(speedX * speedY + speedX*2+(frameCount/60*speedX));
    translate(x,y);
    rotate(mid);
    image(basketball,0,0,radius*2,radius*2);
  pop();
  noFill();
  if (shotMade == 1) {
    if (scoreCounted == 0) {
      score += 1;
      scoreCounted = 1;
      sound.play();
      endText = random(["Nice!!","Excellent!!"]);
      fill(0);
      textSize(28);
      text("+2",150,60);
      timer += 2;
    }
   
    textSize(56);
    fill(153, 51, 51);
    strokeWeight(4);
    stroke(0);
    textAlign(CENTER);
    text(endText, 300, ybegin);
    noFill();
  }
  stroke(0);
  strokeWeight(4);
  stroke(255, 140, 0);

  arc(hoopX, hoopY, radius * 3, radius / 2, 2 * PI, PI, OPEN);
  stroke(0);
  strokeWeight(1);
  
  

  if (mouseIsPressed) {
    shoot = 0;
    if (!mouseJustPressed) {
      if (shotMade == 1) {
        if (random(0, 1) > 0.75) {
          x = random(1.5 * radius, hoopX - 3 * radius / 2 - 2 * radius);
        } else {
          x = random(1.5 * radius, hoopX - 3 * radius / 2 - 4 * radius);
        }
        y = random(200, 400 - 2 * radius);
        mouseJustPressed = true;
        xbegin = x;
        ybegin = y;
        shotMade = 0;

      } else {
        mouseJustPressed = true;
        x = xbegin;
        y = ybegin;
      }
      
    }

    line(xbegin, ybegin, mouseX, mouseY);
    
  }
  
  
  if (state == 0) {
    fill(0);
    textSize(24);
    //text("Countdown",100,35);
    image(countdown1,270,145,700,900);
    textSize(30);
    text(timer,100,65);
  } else if (state == 1) {
    fill(0);
    text("score: "+ score, width/2, height/2);
    //background(255,204,204);
    image(img2,width/2,height/2,width,height);
    textSize(35);
    //text("Your final score is : "+score,width/2, height/2-25);
    image(finalScore,400,520,900,1200); //520
    text(+score,width/2+170, height/2-30);
    textSize(24);
    //text("Click to play again", width/2, height/2+25);
    image(playAgain,480, 515,900,1200); //515
  }

  if (timer ==0){
    state = 1;
  }
  
}

function mouseClicked() {
  if (state==1) reset();
}

function reset() {
  mouseJustPressed = false;
  shotMade = 0;
  score = 0;
  state = 0;
  timer = 30;
  mid=0;
}

function mouseReleased() {
  if (mouseJustPressed) {
    shoot = 1;
    speedX = -g * 5 * (mouseX - xbegin) / 30;
    speedY = -g * 5 * (mouseY - ybegin) / 30;
    mouseJustPressed = false;
    shotMade = 0;
    plays += 1;
    scoreCounted = 0;
  }
  
}