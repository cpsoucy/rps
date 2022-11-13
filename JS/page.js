function memory() {
    if (localStorage.wins == undefined) localStorage.wins = 0;
    if (localStorage.losses == undefined) localStorage.losses = 0;
    if (localStorage.ties == undefined) localStorage.ties = 0;

    document.getElementById("win_number").innerHTML = localStorage.wins;
    document.getElementById("lose_number").innerHTML = localStorage.losses;   
    document.getElementById("tie_number").innerHTML = localStorage.tiess;

    function game(x) {
        sessionStorage.playerChoice = x;
        document.getElementById("rock").style.transform = "scale(1)";
        document.getElementById("paper").style.transform = "scale(1)";
        document.getElementById("scissors").style.transform = "scale(1)";
        document.getElementById(sessionStorage.playerChoice).style.transform = "scale(1.4)";

        var y = Math.ceil(Math.random() * 3);

        if (y == 1) sessionStorage.opponentChoice = "rock";
        else if (y == 2) sessionStorage.opponentChoice = "paper";
        else sessionStorage.opponentChoice = "scissors";

        document.getElementById("opponentChoice").src = "img/" + sessionStorage.opponentChoice + ".svg";

        if ((sessionStorage.opponentChoice == "rock") || (sessionStorage.opponentChoice == "paper")) {
            document.getElementById("opponentChoice").style.height = "auto";
            document.getElementById("opponentChoice").style.width = "7em";
        }

        else if (sessionStorage.opponentChoice == "scissors") {
            document.getElementById("opponentChoice").style.height = "100%";
            document.getElementById("opponentChoice").style.width = "auto";
        }

        document.getElementById("opponentChoice").style.animation = "expand .25s ease 0s forwards";
        setTimeout(() => (document.getElementById("opponentChoice").style.animation = "none"), 250);
   
        if (sessionStorage.playerChoice == sessionStorage.opponentChoice) sessionStorage.result = "tie";

        else {
            if (sessionStorage.playerChoice == "rock" && sessionStorage.opponentChoice == "paper") {
                sessionStorage.result = "lose";
            }

            else if (sessionStorage.playerChoice == "rock" && sessionStorage.opponentChoice == "scissors") {
                sessionStorage.result = "win";
            }

            else if (sessionStorage.playerChoice == "paper" && sessionStorage.opponentChoice == "rock") {
                sessionStorage.result = "win";
            }

            else if (sessionStorage.playerChoice == "paper" && sessionStorage.opponentChoice == "scissors") {
                sessionStorage.result = "lose";
            }

            else if (sessionStorage.playerChoice == "scissors" && sessionStorage.opponentChoice == "rock") {
                sessionStorage.result = "lose";
            }

            else sessionStorage.result = "win";
        
    }

    document.getElementById("win").style.transform = "scale(1)";
    document.getElementById("lose").style.transform = "scale(1)";
    document.getElementById("tie").style.transform = "scale(1)";
    //Scales the score number that is being increased up slightly
    document.getElementById(sessionStorage.result).style.transform = "scale(1.1)";
    //Removes the text shadows on all three score numbers
    document.getElementById("winLabel").style.textShadow = "none";
    document.getElementById("winNumber").style.textShadow = "none";
    document.getElementById("loseLabel").style.textShadow = "none";
    document.getElementById("loseNumber").style.textShadow = "none";
    document.getElementById("tieLabel").style.textShadow = "none";
    document.getElementById("tieNumber").style.textShadow = "none";
    //Adds a text shadow to the score number that is being increased
    document.getElementById(sessionStorage.result + "Label").style.textShadow = "0 0 5em var(--fire3)";
    document.getElementById(sessionStorage.result + "Number").style.textShadow = "0 0 5em var(--fire3)";

    if (sessionStorage.result == "win") {
        //Displays a winning message
        document.getElementById("message").innerHTML = "Congrats, you won this round!";
        //Increases the number of wins by 1
        localStorage.wins++;
        //Sets the number of wins displayed equal to the number stored in the browser
        document.getElementById("winNumber").innerHTML = localStorage.wins;
    }

    else if (sessionStorage.result == "lose") {
        //Displays a losing message
        document.getElementById("message").innerHTML = "Aww, you lost. Want to try again?";
        //Increases the number of losses by 1
        localStorage.losses++;
        //Sets the number of losses displayed equal to the number stored in the browser
        document.getElementById("loseNumber").innerHTML = localStorage.losses;
    }

    else if (sessionStorage.result == "tie") {
        //Displays a tie message
        document.getElementById("message").innerHTML = "It's a tie! Play again to break it!";
        //Increases the number of ties by 1
        localStorage.ties++;
        //Sets the number of ties displayed equal to the number stored in the browser
        document.getElementById("tieNumber").innerHTML = localStorage.ties;
    }

    document.getElementById("win").style.transform = "scale(1)";
    document.getElementById("lose").style.transform = "scale(1)";
    document.getElementById("tie").style.transform = "scale(1)";
    //Scales the score number that is being increased up slightly
    document.getElementById(sessionStorage.result).style.transform = "scale(1.1)";
    //Removes the text shadows on all three score numbers
    document.getElementById("winLabel").style.textShadow = "none";
    document.getElementById("winNumber").style.textShadow = "none";
    document.getElementById("loseLabel").style.textShadow = "none";
    document.getElementById("loseNumber").style.textShadow = "none";
    document.getElementById("tieLabel").style.textShadow = "none";
    document.getElementById("tieNumber").style.textShadow = "none";
    //Adds a text shadow to the score number that is being increased
    document.getElementById(sessionStorage.result + "Label").style.textShadow = "0 0 5em var(--fire3)";
    document.getElementById(sessionStorage.result + "Number").style.textShadow = "0 0 5em var(--fire3)";
    if (sessionStorage.result == "win") {
      //Displays a winning message
      document.getElementById("message").innerHTML = "Congrats, you won this round!";
      //Increases the number of wins by 1
      localStorage.wins++;
      //Sets the number of wins displayed equal to the number stored in the browser
      document.getElementById("winNumber").innerHTML = localStorage.wins;
    }
    else if (sessionStorage.result == "lose") {
      //Displays a losing message
      document.getElementById("message").innerHTML = "Aww, you lost. Want to try again?";
      //Increases the number of losses by 1
      localStorage.losses++;
      //Sets the number of losses displayed equal to the number stored in the browser
      document.getElementById("loseNumber").innerHTML = localStorage.losses;
    }
    else if (sessionStorage.result == "tie") {
      //Displays a tie message
      document.getElementById("message").innerHTML = "It's a tie! Play again to break it!";
      //Increases the number of ties by 1
      localStorage.ties++;
      //Sets the number of ties displayed equal to the number stored in the browser
      document.getElementById("tieNumber").innerHTML = localStorage.ties;
    }
  
  //Resets the score to 0
  function reset() {
    //Scales all three player's choice icons down to their normal size
    document.getElementById("rock").style.transform = "scale(1)";
    document.getElementById("paper").style.transform = "scale(1)";
    document.getElementById("scissors").style.transform = "scale(1)";
    //Changes the opponent's choice image to a question mark
    document.getElementById("opponentChoice").src = "img/questionMark.svg";
    //Sets the dimensions of the opponent's choice image
    document.getElementById("opponentChoice").style.height = "100%";
    document.getElementById("opponentChoice").style.width = "auto";
    //Displays a good luck message
    document.getElementById("message").innerHTML = "Best of luck!";
    //Scales all three score numbers down to their normal size
    document.getElementById("win").style.transform = "scale(1)";
    document.getElementById("lose").style.transform = "scale(1)";
    document.getElementById("tie").style.transform = "scale(1)";
    //Removes the text shadows on all three score numbers
    document.getElementById("winLabel").style.textShadow = "none";
    document.getElementById("winNumber").style.textShadow = "none";
    document.getElementById("loseLabel").style.textShadow = "none";
    document.getElementById("loseNumber").style.textShadow = "none";
    document.getElementById("tieLabel").style.textShadow = "none";
    document.getElementById("tieNumber").style.textShadow = "none";
    //Sets the wins, losses, and ties in the browser to 0 and changes the numbers displayed to match them
    localStorage.wins = 0;
    document.getElementById("winNumber").innerHTML = localStorage.wins;
    localStorage.losses = 0;
    document.getElementById("loseNumber").innerHTML = localStorage.losses;
    localStorage.ties = 0;
    document.getElementById("tieNumber").innerHTML = localStorage.ties;
  }
}
}