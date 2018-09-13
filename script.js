// Name & Goal Input Variables
let enterUserName = document.getElementById("userNameInput");
let enterMyGoal = document.getElementById("insertGoal");


// INPUT NAME + GOAL + FADE ANIMATIONS

$("#userNameOutput").hide();
$("#insertGoal").hide();
$("#toDoListHeader").hide();


enterUserName.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 && document.getElementById("userNameInput").value.length > 0) {
      $("#userNameInput").fadeOut(1000, function (){
        $("#userNameOutput").fadeIn(1000, function(){
          $("#insertGoal").fadeIn(3000)
        });
        document.getElementById("userNameOutput").value = 'What\'s your goal ' + document.getElementById("userNameInput").value +'?';
      });
    } else if (event.keyCode === 13 && document.getElementById("userNameInput").value.length < 1) {
      document.getElementById("userNameOutput").value = 'What\'s your goal ' + document.getElementById("userNameInput").value +'?';
    } 
  });


 enterMyGoal.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 && document.getElementById("insertGoal").value.length > 0) {
      $("#toDoListHeader").fadeIn(2000)
    }
  });





// TEXT PLACEHOLDER ANIMATION 
/*
const typed = new Typed('#insertGoal', {
    strings: ["Travel the world...", "Finish a bachelor?", "Learn the piano!", "Find ALL the pokemons", "Buy a house"],
    typeSpeed: 120,
    startDelay: 10000,
    backSpeed: 50,
    backDelay: 30,
    showCursor: true,
    cursorChar: '|',
    onLastStringBackspaced: "Your dream. Here."
  });*/


// TO DO LIST 










/*
enterMyGoal.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 && document.getElementById("insertGoal").value.length > 0) {
      document.getElementById("insertGoal").value;
    }
  })*/
