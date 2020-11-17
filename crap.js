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
    rockDiv.addEventListener('click', () => console.log("you clicked rock"));

    paperDiv.addEventListener('click', () => console.log("you clicked paper"));

    scissorDiv.addEventListener('click', () => console.log("you clicked scissors"));
}


function Game(x) {
    let options = ['rock', 'paper', 'scissor']; 
    let userOption = x;
    let compOption = options[Math.floor(Math.random() * 3)];
    let result = '';
    switch (userOption + compOption) {
        case ('rockrock'):
            result = 'draw';
            break;
        case ('paperpaper'):
            result = 'draw';
            break;
        case ('scissorscissor'):
            result = 'draw';
            break;
        case ('paperscissor'):
            result = 'loose';
            break;
        case ('rockpaper'):
            result = 'loose';
            break;
        case ('scissorrock'):
            result = 'loose';
            break;
        case ('rockscissor'):
            result = 'win';
            break;
        case ('scissorpaper'):
            result = 'win';
            break;
        case ('paperrock'):
            result = 'win';
            break;
    }
    return result;
}


main();


