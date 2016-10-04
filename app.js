$(document).ready(function() {

  function launchGame() {
    var randomNumber = 30; //Math.floor(Math.random() * 51);
    console.log(randomNumber);
    var guess;
    function askForGuess() {
      guess = prompt ("Please guess a number between 0-50!");
      console.log('typeof', typeof guess);
      console.log('guess', guess, 'randomNumber', randomNumber);
      var difference = Math.abs(guess - randomNumber)
      console.log
      if(guess == randomNumber) {
        alert("You guessed it!!");
        if (confirm("play again?")) {
          launchGame();
        }
        else {
          alert("Thanks for playing!");
        }
      }

      else if (difference <= 10) {
        alert("You're getting hot");
        askForGuess();
      }
    
      else {
        alert("Cold! keep trying!");
        askForGuess();
      }
    }

    askForGuess();
  }  


  launchGame();
});























//var randomNumber = 50;


//$("form").on("submit", function(event) {

  //event.preventDefault();
  //var userInput = +$(".user-input").val();
  
  //if (userInput === randomNumber){
  //     alert("this is true")
 // }

//  else {
 //   alert("Try agian!")
 // }
 // if (userInput ) {}

//});
//});