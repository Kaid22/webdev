
let inc = 0.01;
var speedy=0.01;
var speedx=0.01;
var startx = 0;
var starty = 0;



document.addEventListener("DOMContentLoaded", function() {
    // Get references to the slider and display elements
    const sliderx = document.getElementById("sliderx");
    const sliderxValue = document.getElementById("sliderxValue");

    // Initialize a variable to store the slider value
    let currentxValue = 0;

    // Function to update the variable and display its value
    function updatexValue() {
        currentxValue = sliderx.value;
        sliderxValue.textContent = `X Speed: ${currentxValue}`;
        speedx=parseFloat(currentxValue);
    }

    // Attach an event listener to the slider's input event
    sliderx.addEventListener("input", updatexValue);

    // Initialize the value and display
    updatexValue();

    // Get references to the slider and display elements
    const slidery = document.getElementById("slidery");
    const slideryValue = document.getElementById("slideryValue");

    // Initialize a variable to store the slider value
    let currentyValue = 0;

    // Function to update the variable and display its value
    function updateyValue() {
        currentyValue = slidery.value;
        slideryValue.textContent = `Y Speed: ${currentyValue}`;
        speedy=parseFloat(currentyValue);
    }

    // Attach an event listener to the slider's input event
    slidery.addEventListener("input", updateyValue);

    // Initialize the value and display
    updateyValue();
});


function setup() {
    // Reference the existing canvas element by its 'id'
    let canvas = createCanvas(400, 400);
    // Specify the parent element for the canvas
    canvas.parent('myCanvas'); // 'myCanvas' is the 'id' of the canvas element
  }
function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // let r = random(255);
      let r = noise(startx+xoff, starty+yoff)*255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  startx+=speedx;
  starty+=speedy;

  updatePixels();
  //noLoop();
}