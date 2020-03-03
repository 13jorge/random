let dogs = [{
  name: "dillion",
  color: "red"
}, {
  name: "ziggy",
  color: "blue"
}, {
  name: "mercedes",
  color: "green"
}, {
  name: "jorge",
  color: "yellow"
}, {
  name: "zay",
  color: "black"
}, {
  name: "jay",
  color: "white"
}];

let randomIndex;
let counter = 0;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(random(255),random(255),random(255),);
  textSize(35);
  fill('white');
  text("CLICK TO RANDOMIZE", 100, 300);

  // setTimeout(changeBackground,1000);


}

function draw() {
  if (animating == true) {
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(20), random(200), random(70));
      fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(200), random(50), random(70));
  }
}
// function changeBackground(){
//   if (counter <= 5){
//   counter++;
// background(randome(255),random(255),randome(255));
// setTimeout(changeBackground,1000);
// } else {
//
//   }
// }

function randomizer() {
  animating = false;
  if (dogs[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(dogs.length));
    fill('white');
    text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 70, 300);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    fill('white');
    text("nothing is left!", 170, 300);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

function mouseMoved() {
  stroke(random(255), random(255), random(255), random(255));
  strokeWeight(random(20));
  point(mouseX, mouseY);
  // strokeWeight(0);
}
