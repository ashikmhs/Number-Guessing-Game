let randomNumber = Math.floor(Math.random() * 10 + 1); 
//console.log(randomNumber);

      let guessSubmit = document.querySelector(".guessSubmit");
      let guessField = document.querySelector(".guessField");
      let guessCount = 1;
      let totalGuess = 3;
      let resetButton;

      function checkGuess() {
        let userGuess = guessField.value;
        //console.log(userGuess);
       
        if (userGuess == randomNumber) {
            alert("Congratulations! You got it right!");
          
          setGameOver();
        } else if (guessCount == 3) {
            alert("!!!GAME OVER!!!")
         
          setGameOver();
        } else {
          
          if (userGuess < randomNumber) {
              alert("Correct answer is greater!, You have  "+(totalGuess-guessCount)+"  guess");
            
          } else if (userGuess > randomNumber) {
              alert("Correct answer is smaller,!You have  "+(totalGuess-guessCount)+"  guess");
            
          }
        }

        guessCount++;
        guessField.value = "";
        guessField.focus();
      }

      guessSubmit.addEventListener("click", checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
      }

      function resetGame() {
        guessCount = 1;
        
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        randomNumber = Math.floor(Math.random() * 10 + 1); 
        //console.log(randomNumber);
      }