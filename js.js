const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;



function game() {
    function getComputerChoice() {
        //Random number up to 2
        let choice = Math.floor(Math.random() * 3);
    
        //Takes random number and assigns to rock, paper or scissors
        switch (choice) {
            case 0: return 'rock';
            case 1: return 'paper';
            case 2: return 'scissors';
        }
    }
    
    function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        let result = "";
        //Takes user input and makes it all lowercase
        playerSelection = playerSelection.toLowerCase();
    
    
        //Checks who the winner is based on selections
        if ((playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper')){
            
            playerScore += 1;
            result = `You win! ${playerSelection} beats ${computerSelection}. Player ${playerScore}, Computer ${computerScore}`;
            if(playerScore === 5) {
                result += " Well Done! You won! Reload to try again!";
            }
    
        } else if (playerSelection === computerSelection) {
            result = `It is a tie! You both selected ${playerSelection}. Player ${playerScore}, Computer ${computerScore} `
        } else {
            computerScore += 1;
            result = `You Lost! ${computerSelection} beats ${playerSelection}. Player ${playerScore}, Computer ${computerScore}`

            if(computerScore === 5) {
                result += " Ahh too bad I won! Reload to see if you can beat me next time!"
            }
        }
    
        const resultsElement = document.getElementById('results');
        resultsElement.textContent = result;
        return;
    }

    const buttonArray = Array.from(buttons);

    buttonArray.forEach(button => {
        button.addEventListener('click', function(){
            playRound(button.getAttribute('data-choice'));
        });
    });
}

game();