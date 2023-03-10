const hands = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let choice = hands[Math.floor(Math.random()*hands.length)]
    return choice;
}

function capitalize(text){
    let first = text.charAt(0);
    let other = (text.slice(1, text.length)).toLowerCase();
    return first.toUpperCase() + other;
}

let computerSelection;
let hand;
let playerSelection;
let playerScore;
let computerScore;

function playRound(playerSelection, computerSelection){
    hand = prompt("Hand? ");
    playerSelection = capitalize(hand);
    computerSelection = getComputerChoice();
    playerScore = 0;
    computerScore = 0;

    function win(){
        let player = playerSelection
        let computer = computerSelection
        let message = `You win! ${player} beats ${computer}`;
        // return message;
        playerScore++;
        console.log(message)
    }
    
    function lose(){
        let player = playerSelection
        let computer = computerSelection
        let message = `You lose! ${computer} beats ${player}`;
        // return message;
        computerScore++;
        console.log(message)
    }

    if (playerSelection === computerSelection){
        console.log("It's a tie!");
    } else if (
        (playerSelection === 'Paper' && computerSelection === 'Rock')||
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        return win();
    } else if (
        (computerSelection === 'Paper' && playerSelection === 'Rock')||
        (computerSelection === 'Rock' && playerSelection === 'Scissors')||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')){
        return lose();
    }
}

function game(){
    for (let round = 0; round < 5; round++){
        playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore){
        console.log("You win! You are hero!")
    } else {
        console.log("You lose! Booooo!")
    }
}