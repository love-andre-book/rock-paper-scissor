function getComputerChoice() {
    
    let choices = ["Rock", "Paper", "Scissor"]
    let choice = Math.floor(Math.random() * choices.length)

    return choices[choice]

}

function playRound(playerSelection, computerSelection) {

    // change player choice to the right format (No need to change computer choice)
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

    if (player === computerSelection) {
        return "It's a tie!"
    }
    else if (player === "Rock" && computerSelection === "Paper" || 
    player === "Paper" && computerSelection === "Rock" || 
    player === "Rock" && computerSelection === "Scissor") {
        return `You Win! ${player} beats ${computerSelection}!`
    }
    else {

        return `You Lose! ${computerSelection} beats ${player}`

    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt("Rock, Paper or Scissor?")
        let computerChoice = getComputerChoice()

        console.log(`You chose ${playerChoice}.`)
        console.log(`The computer chose ${computerChoice}.`)
        console.log(playRound(playerChoice, computerChoice))

    }
}

game()
