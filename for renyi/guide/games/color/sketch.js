let usingMobile = false;
let rSlider, gSlider, bSlider, flash;


function preload() {
  greens = loadImage('greens.png');
  blues = loadImage('blues.png');
  reds = loadImage('reds.png')
}


function setup() {
  // create canvas
    canWidth = windowWidth * 0.7;
    canHeight = windowHeight * 0.7;
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    usingMobile = true;
    cvs = createCanvas(canWidth, canHeight);

  }
  else {
    cvs = createCanvas(canWidth, canHeight);
  }
  cvs.parent("game-content");
  textSize(15);
  noStroke();
  let xvalues = canWidth * 0.25;
  let yvalues = canHeight * 0.4 * 1.75;
  // create sliders
  let length = ('width','80px');
  rSlider = createSlider(0, 255, 0);
  rSlider.position(xvalues * 0.4, yvalues);
  rSlider.style('width', length);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(xvalues * 1.9, yvalues);
  gSlider.style('width', length);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(xvalues * 3.3, yvalues);
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

  let c = color(r, g, b);
  let red = color(r, 0, 0);
  let green = color(0, g, 0);
  let blue = color(0, 0, b);
  let xvalue = canWidth * 0.25;
  let yvalue = canHeight * 0.68;
  let yvaluetg = yvalue + (-canHeight * 0.15);
  let yvaluet = yvalue + (-canHeight * 0.23);
  let size = canWidth * 0.2;
  let sizet = size * 1.5;
  fill(c);
  noStroke();

  ellipse(canWidth * 0.5, canHeight * 0.25, size);
  fill(red);
  ellipse(xvalue * 0.7, yvalue, size * 0.25);
  fill(green)
  ellipse(xvalue * 2, yvalue, size * 0.25);
  fill(blue)
  ellipse(xvalue * 3.3, yvalue, size * 0.25);
  fill("white");
  image(reds, xvalue * 0.2, yvaluet, sizet, sizet);
  image(greens,xvalue * 1.386, yvaluetg, sizet, sizet);
  image(blues,xvalue * 2.586, yvaluet, sizet, sizet);
  text('Red',xvalue * 0.4, 480);
  text('Green',xvalue * 1.92, 480);
  text('Blue',xvalue * 3.5, 480);
}
