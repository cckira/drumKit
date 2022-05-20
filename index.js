var nb= document.querySelectorAll(".drum").length;

for (var i=0; i<nb; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      animationSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  animationSound(event.key);
});


function makeSound(key){
  switch (key) {
    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "w":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    default:

  }
}

function animationSound(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
