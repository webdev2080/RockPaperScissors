var options = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() {
    var randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // return 'The game is a tie!';
        return 2;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            //return 'You Lose!';
            return 0;
        } else {
            // return 'You win!';
            return 1;
        }     
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            // return 'You Lose!';
            return 0;
        } else {
            // return 'You Win!';
            return 1;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            // return 'You Lose!';
            return 0;
        } else {
            // return 'You Win!';
            return 1;
        }
    }
    } 

function game() {
    var player = 0;
    var computer = 0;
    
    while (player < 5 && computer < 5) {
        var playerMove = prompt("Enter your move:", "");
        var computerMove = computerPlay();
        var currentRound = playRound(playerMove, computerMove);
        if (currentRound === 1) {
            player++;
            console.log("PlayerScore: " + player);
        }
        else if (currentRound === 0) {
            computer++;
            console.log("ComputerScore: " + computer);
        }
        else if (currentRound === 2) {
            console.log("Tie!");
        }    
    }

    if (player == 5) {
        console.log("You Won!");
    } 
    if (computer == 5) {
        console.log("You Lost!");
    }
}

console.log("Game Over!");


