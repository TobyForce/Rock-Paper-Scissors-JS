let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const rps = Math.floor(Math.random()*3);
    if (rps === 0){
        return 'rock';
    }
    else if (rps === 1){
        return 'paper';
    }
    else {
        return 'scissors';
    }    
} 


function playRound(playerSelection, computerSelection) {  
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        playerScore++;
        return 'Player wins. rock beats scissors';
      } else if (computerSelection === 'paper') {
        computerScore++;
        return 'Player lost, paper beats rock';
      } else {
        return 'ties, rock cant beat rock';
      } 
    }
    if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        playerScore++;
        return 'wins, paper beats rock';
      } else if (computerSelection === 'scissors') {
        computerScore++;
        return 'loses. scissors beats paper';
      } else {
        return 'ties, paper cant beat paper';
      } 
    }
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        computerScore++;
        return 'loses, rock beats scissors';
      } else if (computerSelection === 'paper') {
        playerScore++;
        return 'wins, scissors beats paper';
      } else {
        return 'ties, scissors cant beat scissors';
      } 
    }
  }    
     

    function game(){
        for (let i=0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player wins ${playerScore}, total score`);
        console.log(`Computer wins ${computerScore}, total score`);
        }
    }
    
    game();
    


