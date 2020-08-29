let usingMobile = false;
let rSlider, gSlider, bSlider, flash;
let magnification = 0;
let widthRatio;
let heightRatio;


function preload() {
  greens = loadImage('../games/color/greens.png');
  blues = loadImage('../games/color/blues.png');
  reds = loadImage('../games/color/reds.png');
}


function setup() {
  // create canvas
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    usingMobile = true;
    magnification = windowWidth * 0.6 / 700;
    cvs = createCanvas(700 * magnification, 400 * magnification);

  }
  else {
    cvs = createCanvas(700, 400);
  }
  cvs.parent("game-content");
  textSize(15);
  noStroke();
  widthRatio = width / 700;
  heightRatio = height / 400;
  // create sliders
  let length = ('width','80px');
  rSlider = createSlider(0, 255, 0);
  rSlider.style('width', length);
  gSlider = createSlider(0, 255, 0);
  gSlider.style('width', length);
  bSlider = createSlider(0, 255, 0);
  bSlider.style('width', length);
  rSlider.parent("sliders");
  gSlider.parent("sliders");
  bSlider.parent("sliders");
}

function draw() {
  background(0);

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();

  let xvalues = width * 0.25;
  let yvalues = height * 0.4 * 1.75 + 45 * heightRatio;

  let c = color(r, g, b);
  let red = color(r, 0, 0);
  let green = color(0, g, 0);
  let blue = color(0, 0, b);
  let xvalue = width * 0.25;
  let yvalue = height / 2 + 125 * heightRatio;
  let yvaluem = height / 2 + 115 * heightRatio;
  let size = width * 0.2;
  let sizet = size * 1.5;
  fill(c);
  noStroke();


  rSlider.position(xvalues * 0.4, yvalues);
  gSlider.position(xvalues * 1.85, yvalues);
  bSlider.position(xvalues * 3.3, yvalues);
  ellipse(width * 0.5, height * 0.25, size); //main
  fill(red);
  ellipse(xvalue * 0.7, yvalue, size * 0.25); //red
  fill(green);
  ellipse(xvalue * 2, yvaluem, size * 0.25); //green
  fill(blue);
  ellipse(xvalue * 3.3, yvalue, size * 0.25); //blue
  fill("white");
  image(reds,xvalue * 0.2, height / 2, sizet, sizet);
  image(greens,xvalue * 1.386, height / 2 + 30 * heightRatio, sizet, sizet);
  image(blues,xvalue * 2.586, height / 2, sizet, sizet);
  text('Red',xvalue * 0.4, height - 5 * widthRatio);
  text('Green',xvalue * 1.92, height - 5 * widthRatio);
  text('Blue',xvalue * 3.5, height - 5 * widthRatio);
}
