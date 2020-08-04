let rSlider, gSlider, bSlider, flash;

function preload() {
  greens = loadImage('../games/color/assets/greens.png');
  blues = loadImage('../games/color/assets/blues.png');
  reds = loadImage('../games/color/assets/reds.png')
}


function setup() {
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    usingMobile = true;
    cvs = createCanvas(windowWidth * .4, windowHeight * .4);
  }
  else {
    cvs = createCanvas(700, 500);
  }
  cvs.parent("game-content");
  textSize(15);
  noStroke();
  background(0);

  // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(35 * width / 700, 435 * height / 500);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(290 * width / 700, 435 * height / 500);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(555 * width / 700, 435 * height / 500);
  rSlider.parent("sliders");
  gSlider.parent("sliders");
  bSlider.parent("sliders");
}

function draw() {


  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();

  let c = color(r, g, b);
  let red = color(r, 0, 0);
  let green = color(0, g, 0);
  let blue = color(0, 0, b);
  fill(c);
  noStroke();
  ellipse(width / 2, height / 2 - 55 * height / 500, 250 * height / 500);
  fill(red);
  ellipse(125 * width / 700, 380 * height / 500, 80);
  fill(green)
  ellipse(345 * width / 700, 380 * height / 500, 80);
  fill(blue)
  ellipse(575 * width / 700, 380 * height / 500, 80);
  fill("white");
  image(reds, -50 * width / 700, 80 * height / 500, 400 * width / 700, 400 * width / 700);
  image(greens, 140 * width / 700, 180 * height / 500, 400 * width / 700, 400 * width / 700);
  image(blues, 350 * width / 700, 80 * height / 500, 400 * width / 700, 400 * width / 700);
  text('red',75, 480);
  text('green', 325, 480);
  text('blue', 600, 480);
}