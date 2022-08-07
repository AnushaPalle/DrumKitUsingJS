// document.querySelector("button").addEventListener("click",handleClick);
// document.querySelector(".a").addEventListener("click",handleClick);
// document.querySelector(".s").addEventListener("click",handleClick);
// document.querySelector(".d").addEventListener("click",handleClick);
// document.querySelector(".j").addEventListener("click",handleClick);
// document.querySelector(".k").addEventListener("click",handleClick);
// document.querySelector(".l").addEventListener("click",handleClick);
function handleClick(){
  // alert("I got Clicked");
  var audioObj = new Audio("sounds/tom-1.mp3");
  audioObj.play();
}

function playMusic(key){
  switch (key) {
    case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
      break;
    case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
      break;
    case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
      break;
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
    default:
  }
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function (){
    activeKey.classList.remove("pressed");
  },100);
}

//detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
  // document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    playMusic(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//detecting keyboard press

document.addEventListener("keydown",function (event){
   playMusic(event.key);
   buttonAnimation(event.key);
});
