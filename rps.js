function getComputerChoice() {
    
    let choices = ["rock", "paper", "scissor"]

    let choice = Math.floor(Math.random() * choices.length)

    return choices[choice]

}