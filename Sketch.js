function setup() {
    createCanvas(600, 400);
    background(0);
  }
  
  function draw() {
    stroke("yellow");
    fill("purple");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);
    }
  }
  