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

function playRound(playerSelection, computerSelection) {
    //Takes user input and makes it all lowercase
    playerSelection = playerSelection.toLowerCase();

    //Checks who the winner is based on selections
    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return 'it is a tie!';
    }
}

function game() {
    
}

//Starts the game
game();