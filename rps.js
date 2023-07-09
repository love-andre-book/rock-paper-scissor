const buttons = document.querySelectorAll("button");
const msgResult = document.querySelector(".message");
const winMessage = document.querySelector(".win-message");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const msgPlayer = player.textContent
const msgComputer = computer.textContent
let playerScore = 0;
let computerScore = 0;
const result = ['tie', 'player', 'computer']


//initializing score
player.textContent = msgPlayer + ` ${playerScore}`;
computer.textContent = msgComputer + ` ${computerScore}`;

const winMessages = {
    'Sword': 'is faster than',
    'Shield': 'blocks',
    'Morningstar': 'crushes'
}


buttons.forEach(btn => {

    // retrieve the string representation of the attribute
    const choice = btn.id;
    let winner;
    let msg;
    
    btn.addEventListener('click', e => {
        const [newWinner, resultMessage] =  playRound(choice , getComputerChoice());
        msgResult.textContent = resultMessage
        winner = newWinner

        // Update the score
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        updateScores()
        console.log(winner)

        //checking to se if anyone won
        msg = isWinner(playerScore, computerScore)
        if (msg.length > 0) {
            playerScore = 0;
            computerScore = 0;
            updateScores()
            }

        winMessage.textContent = msg

    });
});

function updateScores() {

    player.textContent = msgPlayer + ` ${playerScore}`;
    computer.textContent = msgComputer + ` ${computerScore}`;

}

function isWinner(pScore, cScore) {

    if (pScore === 5)
        return `\nPlayer wins the game with a score of ${playerScore} against ${computerScore}`
    else if (cScore === 5)
        return `\nComputer wins the game with a score of ${playerScore} against ${computerScore}`
    else
        return ''

}

function getComputerChoice() {
    
    let choices = ["Sword", "Shield", "Morningstar"];
    let choice = Math.floor(Math.random() * choices.length);

    return choices[choice];

};

function playRound(playerSelection, computerSelection) {

    // change player choice to the right format (No need to change computer choice)
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (player === computerSelection) {

        return ['tie', "It's a tie!"];

    }
    else if (player === "Morningstar" && computerSelection === "Shield" || 
    player === "Shield" && computerSelection === "Sword" || 
    player === "Sword" && computerSelection === "Morningstar") {

        return ['player', `You Win! ${player} ${winMessages[player]} ${computerSelection}!`];

    }
    else {

        return ['computer', `You Lose! ${computerSelection} ${winMessages[computerSelection]} ${player}`];

    }
};

function game() {

    let computerWins = 0;
    let playerWins = 0;

    while (computerWins < 5 && playerWins < 5) {

        //let playerChoice = prompt("Sword, Shield, or Morningstar?");
        let computerChoice = getComputerChoice();

        //console.log(`You chose ${playerChoice}.`);
        //console.log(`The computer chose ${computerChoice}.`);
        //console.log(playRound(playerChoice, computerChoice));

        msgResult.textContent = playRound(playerChoice, computerChoice)

        // Update the score
        if (msgResult.textContent === "You win the round!") {
            playerWins++;
        } else if (msgResult.textContent === "You lose the round!") {
            computerWins++;
        }

    }
};



