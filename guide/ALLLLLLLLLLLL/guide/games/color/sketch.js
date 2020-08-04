let rSlider, gSlider, bSlider, flash;

function preload() {
  greens = loadImage('greens.png');
  blues = loadImage('blues.png');
  reds = loadImage('reds.png')
}


function setup() {
  // create canvas
  createCanvas(1420, 800);
  textSize(15);
  noStroke();
  background(0);

  // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(60, 750);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(585, 750);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(1100, 750);
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
  ellipse(650, 300, 500, 500);
  fill(red);
  ellipse(130, 645, 150);
  fill(green)
  ellipse(655, 650, 150);
  fill(blue)
  ellipse(1175, 650, 150);
  fill("white");
  image(reds, -210, 180, 800, 800);
  image(greens, 255, 360, 775, 775);
  image(blues, 750, 220, 750, 750);
  text('red', 100, 780);
  text('green', 610, 780);
  text('blue', 1140, 780);
}