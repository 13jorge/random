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
  background(200);
  text("click to randomize", 50, 50);
  // setTimeout(changeBackground,1000);


}

function draw() {
  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}
// function changeBackground(){
//   if (counter <= 5){
//   counter++;
// background(randome(2550),random(255),randome(255));
// setTimeout(changeBackground,1000);
// } else {
//
//   }
// }

function randomizer() {
  animating = false;
  if (dogs[0]) {
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
    text(dogs[randomIndex].name + "'s favorite color is " +dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing is left!",50,50);
    }
  }

  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);

  }
