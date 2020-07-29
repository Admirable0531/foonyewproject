mouseJustPressed = 0;
  shotMade = 0;
  score = 0;
  shots = 0;
  tries = 0;
  rims = 0;
  bricks = 0;
  textDisplay = 0;
  hotStreak = 0;
var img;
var basketball;
var sound;

function preload(){

	 img = loadImage('https://image.freepik.com/free-vector/cloud-sky-beautiful-cartoon-background-night-sky-with-colorful-clouds-flat_153791-5.jpg');
    basketball = loadImage('https://image.shutterstock.com/image-vector/vector-single-cartoon-basketball-ball-260nw-229101946.jpg');
    sound = loadSound('assets/hahaha.mp3');
  }

function setup() {
  createCanvas(600, 400); 
  
  x_start = 50;
  y_start = 325;
  
  
  
  skyBall = 0;
  
  scoreCounted = 0;

  x = x_start;
  y = y_start;
  
  hoopX = 400
  hoopY = 100
   
  direction=1;
  speedX = 0.3; 
  
  speedY = -9;
  
  speed = sqrt(speedX*speedX + speedY*speedY);
  
  g = - 0.3;
  
  shoot = 0;
  
  radius = 23;

  soundFormats('mp3', 'ogg');
  sound = loadSound('hahaha.mp3');

}

function draw() {
  textAlign(CENTER)
  imageMode(CENTER)
  image(img,width/2,height/2,width,height);
		
  //background(102, 179, 255);
  //fill(50, 168, 127) // This is color of rect below
   //rect(0, 200, 600, 200) // (x, y, width, height)

  //fill(255, 255, 255)
  // noStroke();
  //ellipse(50,50,60,50);
  //ellipse(80,40,60,50);
  //ellipse(130,50,60,50);
  // ellipse(70,70,60,50);
  // ellipse(110,65,60,50);
  
  fill(0)
  textSize(28)
  text("Buckets: " + score, 300, 35)
  fill(255, 100, 100)
  text("Times: " + shots, 100, 35)
  
  noFill()
  stroke(0);
  strokeWeight(4);
  stroke(255,140,0);
  ellipse(hoopX,hoopY,radius*3,radius/2)
  stroke(0)
  fill(255,255,255)
  quad(hoopX + radius*3/2 - radius/5, hoopY-radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY + radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY - radius*3 + radius/5, hoopX + radius*3/2 - radius/5, hoopY - radius*3 - radius/5)
  line(hoopX + radius*3/2 + radius/10, hoopY, hoopX + radius*3/2 + radius/10,y_start+radius)
  
  noFill()
  
  stroke(255)
 
  stroke(0)
  
  strokeWeight(1);
  
  stroke(200)
  strokeWeight(2.5);
  line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
  line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
  line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
  line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
  line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
  line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
  stroke(0)
  strokeWeight(1)
  
  rimX = hoopX-radius*3/2
  rimY = hoopY
  
  boardX = hoopX + radius*3/2
  boardY = hoopY - radius*3

  if (shoot == 1){
    speedY = speedY - g;
    
    x = x + direction*speedX
  
    y = y + speedY;
  
    if (y > y_start){
      y = y_start;
      speedY = -speedY*0.5;
    }
    
    if (x > 600 - radius){
      x = 600 - radius;
      speedX = -speedX*0.5;
    }
    
    if (x < 0 + radius){
      x = radius;
      speedX = -speedX*0.5;
    }
    
  }
  
  if ((rimX-x)*(rimX-x) + (rimY-y)*(rimY-y) <= radius*radius){
    speed = sqrt(speedX*speedX + speedY*speedY);
    speedX = -speed*(rimX-x)/radius;
    speedY = -speed*(rimY-y)/radius;
    rims += 1;
  }

  if (hoopY - radius*3 - radius/5 < y & y < hoopY + radius/5){
    if (x > hoopX + radius*3/2 - radius/5 - radius & x < hoopX + radius*3/2 + radius*0.75 - radius/5 & speedX > 0){
      x = hoopX + radius*3/2 - radius/5 - radius
      speedX = -speedX*0.5;
      bricks += 1;
    }
    if (x > hoopX + radius*3/2 + radius*0.75 & x < hoopX + radius*3/2 + radius*0.75  +radius - radius/5 & speedX < 0){
      x =hoopX + radius*3/2 + radius*0.75 + radius - radius/5
      speedX = -speedX*0.5;
    }
  }
  else if ((boardX-x)*(boardX-x) + (boardY-y)*(boardY-y) <= radius*radius){
    speed = sqrt(speedX*speedX + speedY*speedY);
    speedX = -speed*(boardX-x)/radius;
    speedY = -speed*(boardY-y)/radius;
    bricks += 1;
  }
 
  if ((hoopX-x)*(hoopX-x) + (hoopY-y)*(hoopY-y) <= (0.6*radius)*(0.6*radius) & speedY > 0){
    shotMade = 1;
    speedX = 0.3*speedX;
    
  }
  
  if (y < -200){
    skyBall = 1;
  }
  
  if (bricks > 0 & rims == 0 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("You can do it", 300, y_start)
    noFill()
  }
  
  if (rims == 1 & bricks == 2 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Keep fighting", 300, y_start)
    noFill()
  }
  
  if (rims > 1 & bricks > 1 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Don't give up", 300, y_start)
    noFill()
  }
  
  if (rims > 6){
    speedX = speedX +0.1;
  }
  
  if (textDisplay == 0 & bricks == 0 & rims == 0 & speedY > 4 & y < hoopY & y != y_start & shotMade == 0 & x > hoopX +3*radius/2){
    textDisplay = 1
  }
  
  if (rims > 0){
    textDisplay = 0
  }
  if (textDisplay == 1 & y > hoopY & shotMade == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Try again", 300, y_start)
    noFill()
  }
  
  fill(201,16,174)
  stroke(0)
  strokeWeight(1)
  //circle(x, y, radius*2)
  image(basketball,x,y,radius*2,radius*2);
  noFill()
  if (shotMade == 1){
    
    if (scoreCounted == 0){
      score += 1
      scoreCounted = 1
      if (rims ==0 & bricks == 0){
        endText = "Excellent!"
        sound.play();
      }
      if (bricks > 0){
        endText = "Good!"
        sound.play();
      }
      if (rims > 0 & bricks < 2){
        endText = "Perfect!"
        sound.play();
      }
      if (rims > 0 & bricks >=2){
        endText = "Nice!"
        sound.play();
      }
      
      else {
        hotStreak = 0
      }
    
    }
    
    stroke(255)
    strokeWeight(4);
    line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
    line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
    line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
    line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
    line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
    line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
    stroke(0)
    strokeWeight(1)
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 255, 0)
    textAlign(CENTER)
    text(endText, 300, y_start)
    noFill()
  }
  stroke(0);
  strokeWeight(4);
  stroke(255,140,0)
  
  arc(hoopX, hoopY, radius*3, radius/2, 2*PI, PI, OPEN); 
  stroke(0)
  strokeWeight(1)

    if (mouseIsPressed){
    rims = 0
    bricks = 0
    shoot = 0;
    textDisplay = 0;
    skyBall = 0;
    if (mouseJustPressed == 0){
      if (shotMade == 1){
        if (random(0,1) > 0.75){
          x = random(1.5*radius, hoopX - 3*radius/2 - 2*radius)
        }
        else {
          x = random(1.5*radius, hoopX - 3*radius/2 - 4*radius);
        }
        y = random(200, 400 - 2*radius);
        hoopY = random(100,150)
        hoopX = random(500-radius*2, 500)
        mouseJustPressed = 1;
        x_start = x
        y_start = y
        shotMade = 0
        tries = 0
      }
      else {
        mouseJustPressed = 1;
        x = x_start
        y = y_start
      }
    }
    
   line(x_start, y_start, mouseX, mouseY)
  }
}


function mouseReleased() {
  if (mouseJustPressed == 1){
    shoot = 1;
    speedX = -g*5*(mouseX - x_start)/30;
    speedY = -g*5*(mouseY - y_start)/30;
    mouseJustPressed = 0;
    shotMade = 0;
    shots += 1
    scoreCounted = 0
    tries += 1;
    rims = 0
    bricks = 0
  }
  
}
