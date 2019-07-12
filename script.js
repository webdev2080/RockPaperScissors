var options = [
    'rock',
    'paper',
    'scissors'
]

function computerPlay() {
    var randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'The game is a tie!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose!';
        } else {
            return 'You win!';
        }     
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    }
    } 

function game() {
    let player = 0;
    let computer = 0;
    
    while (player || computer <= 5) {
        var playerMove = prompt("Enter your move:", "");
        var computerMove = computerPlay();
        let currentRound = playRound(playerMove, computerMove);
        if (currentRound === 'You win!') {
            player++;
            console.log("PlayerScore: " + player);
        }
        else if (currentRound === 'You Lose!') {
            computer++;
            console.log("ComputerScore: " + computer);
        }
        else if (currentRound === 'The game is a tie!') {
            console.log("Tie!");
        }    
    }

    if (player >= 5) {
        console.log("You Won!");
    } 
    if (computer >= 5) {
        console.log("You Lost!");
    }
}

console.log("Game Over!");


