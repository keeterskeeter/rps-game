const userScore = 0;
const compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorDiv = document.getElementById('scissor')



function main() {
    rockDiv.addEventListener('click', () => console.log(Game('rock')));

    paperDiv.addEventListener('click', () => console.log(Game('paper')));

    scissorDiv.addEventListener('click', () => console.log(Game("scissor")));
}


function Game(x) {
    let options = ['rock', 'paper', 'scissor'];
    let userOption = x;
    let compOption = options[Math.floor(Math.random() * 3)];
    let result = '';
    if (userOption == 'rock' && compOption == 'rock') {
        result = 'draw';
    }
    else if (userOption == 'paper' && compOption == 'paper') {
        result = 'draw';
    }
    else if (userOption == 'scissor' && compOption == 'scissor') {
        result = 'draw';
    }
    else if (userOption == 'rock' && compOption == 'paper') {
        result = 'loose';
    }
    else if (userOption == 'paper' && compOption == 'scissor') {
        result = 'loose';
    }
    else if (userOption == 'scissor' && compOption == 'rock') {
        result = 'loose';
    }
    else if (userOption == 'rock' && compOption == 'scissor') {
        result = 'win';
    }
    else if (userOption == 'scissor' && compOption == 'paper') {
        result = 'win';
    }
    else if (userOption == 'paper' && compOption == 'rock') {
        result = 'win';
    }
    else {
        console.log("else");
    }
    return result;
}

main();