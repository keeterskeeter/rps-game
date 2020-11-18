let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultH1 = document.querySelector('.result h1');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorDiv = document.getElementById('scissors')



function main() {
    rockDiv.addEventListener('click', () => Game('rock'));

    paperDiv.addEventListener('click', () => Game('paper'));

    scissorDiv.addEventListener('click', () => Game('scissors'));
}


function win(userChoice, computerChoice) {
    userScore ++;
    userScoreSpan.innerHTML = userScore;
    const userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 600);
    console.log('win')
    switch(userChoice + computerChoice){
        case('rockscissors'):
            resultH1.innerHTML = `${userChoice} beats ${computerChoice} You win!!`;
            break;
        case('scissorspaper'):
            resultH1.innerHTML = `${userChoice} cuts ${computerChoice}. You win!!`;
            break;
        case('paperrock'):
            resultH1.innerHTML = `${userChoice} covers ${computerChoice}. You win!!`;
            break;
    }
}

function lose(userChoice, computerChoice) {
    compScore ++;
    compScoreSpan.innerHTML = compScore
    const userChoiceDiv = document.getElementById(userChoice)
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 600);
    console.log('lose')
    switch(userChoice + computerChoice){
        case('scissorsrocks'):
            resultH1.innerHTML = `${computerChoice} beats ${userChoice}. You loose!!`;
            break;
        case('paperscissors'):
            resultH1.innerHTML = `${computerChoice} cuts ${userChoice}. You loose!!`;
            break;
        case('rockpaper'):
            resultH1.innerHTML = `${computerChoice} covers ${userChoice}. You loose!!`;
            break;
    }
}

function draw(userChoice) {
    console.log('draw')
    const userChoiceDiv = document.getElementById(userChoice)
    resultH1.innerHTML = "Its a draw!"
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(() => userChoiceDiv.classList.remove('grey-glow'), 1000)
}


function Game(x) {
    let options = ['rock', 'paper', 'scissors']; 
    let userOption = x;
    let compOption = options[Math.floor(Math.random() * 3)];
    let result = '';
    switch (userOption + compOption) {
        case ('rockrock'):
        case ('paperpaper'):
        case ('scissorsscissors'):
            draw(userOption);
            break;
        case ('paperscissors'):
        case ('rockpaper'):
        case ('scissorsrock'):
            lose(userOption, compOption);
            break;
        case ('rockscissors'):
        case ('scissorspaper'):
        case ('paperrock'):
            win(userOption, compOption);
            break;
    }
    return result;
}

main();


