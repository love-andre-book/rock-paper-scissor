const buttons = document.querySelectorAll("button");
const msg = document.querySelector(".message");
let playerScore = 0;
let computerScore = 0;

const winMessages = {
    'Sword': 'is faster than',
    'Shield': 'blocks',
    'Morningstar': 'crushes'
}



buttons.forEach(btn => {

    // retrieve the string representation of the attribute
    const choice = btn.id;

    btn.addEventListener('click', e => {
        msg.textContent =  playRound(choice , getComputerChoice())
    });
});

function isWinner(pScore, cScore) {

    if (pScore === 5)
        return ' Player wins!'
    else if (cScore ===5)
        return ' Computer wins'
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

        return "It's a tie!";

    }
    else if (player === "Morningstar" && computerSelection === "Shield" || 
    player === "Shield" && computerSelection === "Sword" || 
    player === "Sword" && computerSelection === "Morningstar") {

        return `You Win! ${player} ${winMessages[player]} ${computerSelection}!`;

    }
    else {

        return `You Lose! ${computerSelection} ${winMessages[computerSelection]} ${player}`;

    }
};

function isGameOver() {



}

function game() {

    let computerWins = 0;
    let playerWins = 0;

    while (computerWins < 5 && playerWins < 5) {

        let playerChoice = prompt("Sword, Shield, or Morningstar?");
        let computerChoice = getComputerChoice();

        console.log(`You chose ${playerChoice}.`);
        console.log(`The computer chose ${computerChoice}.`);
        console.log(playRound(playerChoice, computerChoice));

        // Update the score
        if (playRound(playerChoice, computerChoice) === "You win the round!") {
            playerWins++;
        } else if (playRound(playerChoice, computerChoice) === "You lose the round!") {
            computerWins++;
        }

    }
};



