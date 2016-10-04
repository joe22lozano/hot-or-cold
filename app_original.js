$(document).ready(function() {

  function launchGame() {
    var randomNumber = Math.floor(Math.random() * 51);
    console.log(randomNumber);
    var guess;
    var difference = Math.abs(guess - randomNumber)
    function askForGuess() {
      guess = prompt ("Please guess a number between 0-50!");
      console.log('typeof', typeof guess);
      console.log('guess', guess, 'randomNumber', randomNumber);

      if(guess == randomNumber) {
        alert("You guessed it!!");
        if (confirm("play agian?")) {
          launchGame();
        }
        else {
          alert("Thanks for playing!");
        }
      }

      else if (guess >= (randomNumber - 10) && guess <= (randomNumber + 10)) {
        alert("You're getting hot");
        askForGuess();
      }
    
      else if(guess < (randomNumber - 10) || guess > (randomNumber + 10)) {
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