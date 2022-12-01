function play(choice) {
    //assigning all necessary variables;
    let pChoice = choice;
    let oChoice = Math.floor(Math.random() * 3 + 1);
    let wins = sessionStorage.getItem("winCount");
    let ties = sessionStorage.getItem("tieCount");
    let losses = sessionStorage.getItem("lossCount");
    
    document.getElementById('opponent_image').src = "";
    document.getElementById('player_result').innerHTML = ". . .";

    if (wins == null) {
      wins = 0;
    } else {
      wins = wins;
    }

    if (ties == null) {
      ties = 0;
    } else {
      ties = ties;
    }

    if (losses == null) {
      losses = 0;
    } else {
      losses = losses;
    }
   
    setTimeout(() => {
      if (oChoice === 1 && pChoice === "rock") {
        document.getElementById('opponent_image').src = "svg/rock.svg";
        document.getElementById('player_result').innerHTML = "Rock matches rock. You tied.";
        ties++;
      } 
      
      else if (oChoice === 1 && pChoice === "scissors")  {
        document.getElementById('opponent_image').src = "svg/rock.svg";
        document.getElementById('player_result').innerHTML = "Scissors lose to rock. You lose.";
        losses++;
      } 
      
      else if (oChoice === 1 && pChoice === "paper") {
        document.getElementById('opponent_image').src = "svg/rock.svg";
        document.getElementById('player_result').innerHTML = "Paper beats rock. You win.";
        wins++;
      } 
      
      else if (oChoice === 2 && pChoice === "rock")  {
        document.getElementById('opponent_image').src = "svg/paper.svg";
        document.getElementById('player_result').innerHTML = "Rock loses to paper. You lose.";
        losses++;
      } 
      
      else if (oChoice === 2 && pChoice === "paper")  {
        document.getElementById('opponent_image').src = "svg/paper.svg";
        document.getElementById('player_result').innerHTML = "Paper matches paper. You tied.";
        ties++;

      } else if (oChoice === 2 && pChoice === "scissors")  {
        document.getElementById('opponent_image').src = "svg/paper.svg";
        document.getElementById('player_result').innerHTML = "Scissors beat paper. You win.";
        wins++;

      } else if (oChoice === 3 && pChoice === "rock")  {
        document.getElementById('opponent_image').src = "svg/scissors.svg";
        document.getElementById('player_result').innerHTML = "Rock beats scissors. You win.";
        wins++;

      } else if (oChoice === 3 && pChoice === "paper")  {
        document.getElementById('opponent_image').src = "svg/scissors.svg";
        document.getElementById('player_result').innerHTML = "Paper loses to scissors. You lose.";
        losses++;

      } else {
        document.getElementById('opponent_image').src = "svg/scissors.svg";
        document.getElementById('player_result').innerHTML = "Scissors match scissors. You tied.";
        ties++;
      }

      sessionStorage.setItem("winCount", wins);
      sessionStorage.setItem("tieCount", ties);
      sessionStorage.setItem("lossCount", losses);

      document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
      document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
      document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    }, 200);
  }

  function reset() {
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("tieCount", 0);
    sessionStorage.setItem("lossCount", 0);

    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('player_result').innerHTML = "Result";
    document.getElementById('opponent_image').src = "svg/mystery.svg";
  }

//clears sessionStorage if the page is refreshed:
window.onbeforeunload = function reload_check() {
    sessionStorage.setItem("origin", window.location.href);
}

window.onload = function reload() {
  if (window.location.href == sessionStorage.getItem("origin")) {
      sessionStorage.clear();
  }
}