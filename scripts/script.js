function getComputerChoice(){
    choice = Math.random();
    if(choice < 0.34){
        return `rock`;
    }else if(choice < 0.67){
        return `paper`;
    }else{
        return `scissors`;
    }
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    const computerChoice = getComputerChoice();
    const playerChoice = prompt(`Choose your weapon: rock, paper or scissors?`).toLowerCase();
    playerSelection = playerChoice;
    computerSelection = computerChoice;
    if(playerSelection === computerSelection){
        return(`It's a tie!`);
    }else if(playerSelection === `rock` && computerSelection === `scissors`){
        playerScore += 1;
        return(`Rock beats scissors! Player score +1`);
    }else if(playerSelection === `paper` && computerSelection === `rock`){
        playerScore += 1;
        return(`Paper beats rock! Player score +1`);
    }else if(playerSelection === `scissors` && computerSelection === `paper`){
        playerScore += 1;
        return(`Scissors beats paper! Player score +1`);
    }else{
        computerScore += 1;
        return(`${computerSelection} beats ${playerSelection}! Computer score +1`);
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound());
    }
    console.log(`Player score is ${playerScore}, computer score is ${computerScore}`);
    if(playerScore === computerScore){
        console.log(`No winner!`);
    }else if(playerScore > computerScore){
        console.log(`Player wins!`);
    }else{
        console.log(`Computer wins!`);
    }
}

console.log(game());