let playGame = confirm('Do you want to play Rock, Paper, Scissors?');
if (playGame) {
    let playerChoice = prompt('Please enter Rock, Paper or Scissors')
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = computerChoice === 1 ? 'rock' 
                    : computerChoice === 2 ? 'paper' 
                    : 'scissors';
                let result = 
                    playerOne === computer ? 'tie game' :
                    playerOne === 'rock' && computer === 'paper' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                    playerOne === 'paper' && computer === 'scissors' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                    playerOne === 'scissors' && computer === 'rock' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                    `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins`;
                alert(result);
                let playAgain = confirm('Play again?');
                playAgain ? newGame() : alert('Ok, thanks for playing');
            } else {
                alert('You did not enter Rock, Paper or Scissors')
            }
        } else {
            alert('Changed your mind?')
        }
} else {
    alert('Maybe next time?')
}

function newGame() {
    if (playGame) {
        let playerChoice = prompt('Please enter Rock, Paper or Scissors')
            if (playerChoice) {
                let playerOne = playerChoice.trim().toLowerCase();
                if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
                    let computerChoice = Math.floor(Math.random() * 3 + 1);
                    let computer = computerChoice === 1 ? 'rock' 
                        : computerChoice === 2 ? 'paper' 
                        : 'scissors';
                    let result = 
                        playerOne === computer ? 'tie game' :
                        playerOne === 'rock' && computer === 'paper' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                        playerOne === 'paper' && computer === 'scissors' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                        playerOne === 'scissors' && computer === 'rock' ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins` :
                        `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins`;
                    alert(result);
                    let playAgain = confirm('Play again?');
                    playAgain ? newGame() : alert('Ok, thanks for playing');
                } else {
                    alert('You did not enter Rock, Paper or Scissors')
                }
            } else {
                alert('Changed your mind?')
            }
    } else {
        alert('Maybe next time?')
    }
}