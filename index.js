//Array of all buttons
var buttons = document.querySelectorAll("button");

//Loops through the array of buttons and calls the addEventListener() function
// so that when button is clicked an action takes place
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);

}

// Makes sound once button is clicked
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", keyPressed);

//Sends the value of the key to the makeSound function
function keyPressed(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

//Plays sound depending on letter pressed / button clicked
function makeSound(key){
  switch (key){
    case "1":
      var tom1 = new Audio("sounds/TS.mp3");
      tom1.play();
    break;

    case "2":
      var tom2 = new Audio("sounds/Fearless.mp3");
      tom2.play();
    break;

    case "3":
      var tom3 = new Audio("sounds/SpeakNow.mp3");
      tom3.play();
    break;

    case "4":
      var tom4 = new Audio("sounds/Red.mp3");
      tom4.play();
    break;

    case "5":
      var snare = new Audio("sounds/1989.mp3");
      snare.play();
    break;

    case "6":
      var crash = new Audio("sounds/Reputation.mp3");
      crash.play();
    break;

    case "7":
      var crash = new Audio("sounds/Lover.mp3");
      crash.play();
    break;

    case "8":
        var crash = new Audio("sounds/Folklore.mp3");
        crash.play();
    break;

    case "9":
      var crash = new Audio("sounds/Evermore.mp3");
      crash.play();
    break;

    default:
      console.log(key);
  }
}

// Key or button that was pressed will show an animation
function buttonAnimation(currentKey){

  //this gives us the class of the button that we are going to change
  var activeButton = document.querySelector("._" + currentKey );

  activeButton.classList.add("pressed");

  setTimeout(removeAnimation, 100);

  // function that removes transparancy and shadow effect from button
  function removeAnimation(){
    activeButton.classList.remove("pressed");
  }
}
