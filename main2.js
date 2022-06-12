//The user is asked if he wants to play
let playGame = confirm('Wanna play Rock, Paper, Scissors?');
//if the user selects ok
if (playGame) {
        //If the user selects 'ok', he is then asked to enter a value
        let playerChoice = prompt('Please enter rock, paper or scissors.');
            //The user can enter a value 
            if (playerChoice) {
                let playerOne = playerChoice.trim().toLowerCase(); //This turns the user answer to case insensitive
                if (playerOne === 'rock' || 
                    playerOne === 'paper' || 
                    playerOne === 'scissors'
                    ) {
                    let computerChoice = Math.floor(Math.random() * 3 + 1)
                    let computer = computerChoice === 1 ? 'rock'
                    : computerChoice === 2 ? 'paper'
                    : 'scissors';
        
                    let result = 
                    playerOne === computer
                    ? 'tie game!'
                    : playerOne === 'rock' && computer === 'paper'
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : playerOne === 'paper' && computer === 'scissors'
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : playerOne === 'scissors' && computer === 'rock'
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;
                    //We instruct the computer to alert the result
                    alert(result);
                    //We then ask the user if he wants to play another game
                    let playAgain = confirm('Play again?');
                    //If the user selects yes, we instruct the computer to run the newGame function. If not, we instruct the computer to alert a 'thank you' message.
                    playAgain ? newGame() : alert('Ok, thanks for playing!');
                } else { //If the user does not insert either of the three values
                    alert('you didn`t enter rock, paper or scissors')
                }
            
            //If he changed his mind, the user can stop the game and will get the following message.
            } else {
                alert('Changed your mind, huh?')
            } 
//if user does not want to play
} else {
    alert('ok, maybe next time.')
}

function newGame() {
    let playerChoice = prompt('Please enter rock, paper or scissors.');
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === 'rock' || 
                playerOne === 'paper' || 
                playerOne === 'scissors'
                ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1)
                let computer = computerChoice === 1 ? 'rock'
                : computerChoice === 2 ? 'paper'
                : 'scissors';
        
                let result = 
                playerOne === computer
                ? 'tie game!'
                : playerOne === 'rock' && computer === 'paper'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                : playerOne === 'paper' && computer === 'scissors'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                : playerOne === 'scissors' && computer === 'rock'
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;
                alert(result);
                let playAgain = confirm('Play again?');
                playAgain ? newGame() : alert('Ok, thanks for playing!');
            } else { //If the user does not insert either of the three values
                alert('you didn`t enter rock, paper or scissors')
            }
        } else {
            alert('Changed your mind, huh?')
        }     
}
