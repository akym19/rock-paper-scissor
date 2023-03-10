const hands = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    const choice = hands[Math.floor(Math.random()*hands.length)]
    return choice;
}

let computerSelection = getComputerChoice();

function win(){
    let player = playerSelection
    let computer = computerSelection
    let message = `You win! ${player} beats ${computer}`;
    return message;
}

function lose(){
    let player = playerSelection
    let computer = computerSelection
    let message = `You lose! ${computer} beats ${player}`;
    return message;
}

function playRound(playerSelection, computerSelection){
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

let playerScore = 0;
let computerScore = 0;

function game(){
    for (let round = 0; round < 5; round++){
        let playerSelection = prompt("Hand? ");
        playRound(playerSelection, computerSelection)
        let result = playRound().slice(4,7)
        if (result === 'win'){
            playerScore++;
        } else if (result === 'los'){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You win!");
    } else {
        console.log("You lose!")
    }
}