// dogs is a variable that has an empty array
let dogs = [];
// a variable
let randomIndex;
//counter is a variable that equals 0
let counter = 0;
//animating is a variable that is false
let animating = false;
// balls is a variable that equals an empty array
let balls = [];
// imageCounter is a variable that equals 0
let imageCounter = 0;
// its a variable
let startRandomizerbutton;
// a variable
let addMoreButton
// a variable
let cnv;
//a variable that equals an empty array
let nameInputs = [];
// a variable that equals true
let firstTime = true;



//only loops once
function setup() {
  // variable cnv equals what the canvas will be
  cnv = createCanvas(600, 600);
  // connected to html
  cnv.parent("#canvasDiv");
  //everytime it is reloaded it will start with a randome color
  background(random(255), random(255), random(255), );
  //how big the text will be
  textSize(35);
  //image is drawn from the center of the image
  imageMode(CENTER);
  // frameRate(8);



 // connects to the html to create the random button
  startRandomizerbutton = select('#randButton');
  //connectes to mousePressed to initiate the randomizer and connect with html
  startRandomizerbutton.mousePressed(buttonPressed);
  //connects to the html
  addMoreButton = select('#addMoreButton');
  //what creates new inputs when mouse is pressed
  addMoreButton.mousePressed(addAnotherInput);
// it the function that creates more inputes
  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
  //connects to the html to create them on the screen
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }





}
//this keeps looping and never stops
function draw() {
//when the animation is true it will do the following code
  if (animating == true) {
    // the rectangle will have a different color and opacity
    fill(random(255), random(255), random(255), random(255));
    //creats the rectangle in different spot
    rect(random(width), random(height), random(20), random(200), random(70));
    // the rectangle will have a different color and opacity
    fill(random(255), random(255), random(255), random(255));
    //creats the rectangle in different spot
    rect(random(width), random(height), random(200), random(50), random(70));
  }
}




//this function is the randomizer
function randomizer() {
  //in this code animation equals false
  animating = false;
  // when the code gets to the 0 array than..
  if (dogs[0]) {
    //clear everything in the array
    clear();
    //randomIndex equals what is passed on the dogs array and chooses one of the arrays
    randomIndex = int(random(dogs.length));
    //the color is a random color
    background(random(255), random(255), random(255));
    // the text gets a dogs array and chooses one and it is placed on x= 270 and y=300 on the screens
    text(dogs[randomIndex], 270, 300);
    //takes away 1 array from dogs
    dogs.splice(randomIndex, 1);
    //when there is nothing in the randomizer function
  } else {
    //the color is random
    background(random(255), random(255), random(255));
    //the text color is white
    fill('white');
    // there is nothing else to randomize it will say this
    text("nothing is left!", 170, 300);
  }
}
//adding more inputs
function addAnotherInput() {
//adds the nameInputs array, creates more inputes and only works for this function
  nameInputs.push(createInput());
  //connects to html so that they could add names to the inputs
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}
//function when you press the buttton
function buttonPressed() {
//when clicked the button is true begins randomizer process
  if (firstTime == true) {
    //initiates when you press the buttons
    for (let i = 0; i < nameInputs.length; i++) {
      //initiates the randomizer
      dogs.push(nameInputs[i].value());
    }
    //stops the randomizer
    firstTime = false;
  }
  //animation is true
  animating = true;
  //how long it takes to randomize
  setTimeout(randomizer, 3000);
}
//funciton when the mouse is moving
function mouseMoved() {
  //stroke has a random color and transparacy
  stroke(random(255), random(255), random(255), random(255));
  //how big the stoke is and is at random from size 1 to 20
  strokeWeight(random(20));
  //creates a point that follows the mouse
  point(mouseX, mouseY);

}
