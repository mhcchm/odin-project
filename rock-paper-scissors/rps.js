function getComputerChoice(){
  let escolha = (Math.floor(Math.random() * 10) + 1) % 3;
  switch (escolha){
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      console.error("Algum absurdo aconteceu");
  }
}


// This function returns 0 if the player
// won the round, 1 if the player lost,
// or 2 if it ended with a draw.
function playRound(PlayerS, ComputerSelection){
  let PlayerSelection;
  if (PlayerS.toLowerCase() == "rock"){
    PlayerSelection = "Rock";
  }else if (PlayerS.toLowerCase() == "paper"){
    PlayerSelection = "Paper";
  }else if (PlayerS.toLowerCase() == "scissors"){
    PlayerSelection = "Scissors";
  }else{
    console.log("Player didn't choose an available option");
  }

  if(PlayerSelection == "Rock" && ComputerSelection == "Rock"){
    return 2;
  
  }else if(PlayerSelection == "Rock" && ComputerSelection == "Paper"){
    return 1;
  
  }else if(PlayerSelection == "Rock" && ComputerSelection == "Scissors"){
    return 0;
  
  }else if(PlayerSelection == "Paper" && ComputerSelection == "Rock"){
    return 0;  
  
  }else if(PlayerSelection == "Paper" && ComputerSelection == "Paper"){
    return 2;
  
  }else if(PlayerSelection == "Paper" && ComputerSelection == "Scissors"){
    return 1;
  
  }else if(PlayerSelection == "Scissors" && ComputerSelection == "Rock"){
    return 1;
  
  }else if(PlayerSelection == "Scissors" && ComputerSelection == "Paper"){
    return 0;
  
  }else if(PlayerSelection == "Scissors" && ComputerSelection == "Scissors"){
    return 2;
  
  }else{
    console.error("Algo absurdo aconteceu");
  }
}

function playGame(){
  let resP = 0, resC = 0;
  for(let i=0;i<5;i++){
    let player = prompt("Please choose Rock, Paper, or Scissors: ");
    let computer = getComputerChoice();

    round = playRound(player, computer);
    if(round == 0){
      console.log(`You won! ${player} beats ${computer}`);
      resP++;

    }else if(round == 1){
      console.log(`You lost! ${computer} beats ${player}`);
      resC++;

    }else if(round == 2){
      console.log("The round ended with a draw.");

    }else{
      console.error("Algo absurdo aconteceu");
    }

    console.log(`At round of number ${i+1}, the player's score is ${resP} and the computer's is ${resC}`);
  }

  if(resP > resC){
    console.log(`You won with a score of ${resP} against a score of ${resC}!`);
  }else if(resP < resC){
    console.log(`You lost with a score of ${resP} against a score of ${resC}!`);
  }else{
    console.log(`Your game against the computer ended with a draw with ${resP} points each.`);
  }
}


function round(playerChoice, computerChoice, scorePlayer, scoreComputer){
  let res = playRound(playerChoice, computerChoice);
  if(res == 0){
    scorePlayer += 1;
  }else if(res == 1){
    scoreComputer += 1;
  }
  return [scorePlayer, scoreComputer];
}

const botoes = document.querySelector(".botoes");
const resultados = document.querySelector(".results");
const fim = document.querySelector(".fim");
let scorePlayer=0, scoreComputer=0;

function jogar(e){
  let computerChoice = getComputerChoice();
  if(scorePlayer < 5 && scoreComputer < 5){
    switch (e.target.attributes.class.value){
      case "rock":
        [scorePlayer, scoreComputer] = round("rock", computerChoice, scorePlayer, scoreComputer);
        break;
      case "paper":
        [scorePlayer, scoreComputer] = round("paper", computerChoice, scorePlayer, scoreComputer);
        break;
      case "scissors":
        [scorePlayer, scoreComputer] = round("scissors", computerChoice, scorePlayer, scoreComputer);
    }

  }else{
    if(scorePlayer >= 5){
      fim.textContent = "Congratulations! You won!";
    }else{
      fim.textContent = "The Computer won. Better luck next time.";
    }
  }
  resultados.textContent = `Player Score: ${scorePlayer}\nComputer Score: ${scoreComputer}`;
}

console.log(fim);

botoes.addEventListener("click", jogar);
