let dogs = [];

let randomIndex;
let counter = 0;
let animating = false;
let balls = [];
let imageCounter = 0;
let startRandomizerbutton;
let addMoreButton
let cnv;
let nameInputs = [];
let firstTime = true;

function preload() {
  for (let i = 0; i <= 7; i++) {
    balls[i] = loadImage(`assets/ball${i}.jpg`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(random(255), random(255), random(255), );
  textSize(35);
  imageMode(CENTER);
  // frameRate(8);

  // button = createButton("click to randomize");

  startRandomizerbutton = select('#randButton');
  startRandomizerbutton.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton');
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }

  // setTimeout(changeBackground,1000);


}

function draw() {

  if (animating == true) {
    // clear();
    // image(balls[imageCounter], width / 2, height / 2);
    // if (imageCounter < balls.length - 1) {
    //   imageCounter++;
    //   console.log(imageCounter);
    // } else {
    //   imageCounter = 0;
    // }
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
    // background(random(255), random(255), random(255));
    clear();
    randomIndex = int(random(dogs.length));
    // fill('white');
    // image(random(balls), width / 2, height / 2);
    background(random(255), random(255), random(255));

    text(dogs[randomIndex], 270, 300);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    fill('white');
    text("nothing is left!", 170, 300);
  }
}

function addAnotherInput() {

  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}

function buttonPressed() {

  if (firstTime == true) {
    for (let i = 0; i < nameInputs.length; i++) {
      dogs.push(nameInputs[i].value());
    }
    firstTime = false;
  }
  animating = true;
  setTimeout(randomizer, 3000);
}

function mouseMoved() {
  stroke(random(255), random(255), random(255), random(255));
  strokeWeight(random(20));
  point(mouseX, mouseY);
  // strokeWeight(0);
}
