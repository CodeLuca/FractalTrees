var angle = 0,
    slider;

function setup() {
  var canvas = createCanvas(windowWidth - 100, windowHeight - 100);
  canvas.parent('holder');
  slider = createSlider(0, TWO_PI, PI / 8, 0.005);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(height/3.5);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
