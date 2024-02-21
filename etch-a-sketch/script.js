const gridSize = 960;
let divNumber = 16;
let elementSize = Math.round(gridSize / divNumber);
const grid = document.querySelector(".grid");

function createGrid(quantity, size){
  for(let i=0;i<quantity;i++){
    for(let j=0;j<quantity;j++){
      const newDiv = document.createElement('div');
      newDiv.style.minHeight = size + 'px';
      newDiv.style.minWidth = size + 'px';

      newDiv.addEventListener("mouseenter", function(e){
        newDiv.style.backgroundColor = 'black';
      });

      newDiv.addEventListener("mouseleave", function(e){
        setTimeout(function(){newDiv.style.backgroundColor = 'white';}, 1000);
      });


      grid.appendChild(newDiv);
    }
  }
}

createGrid(divNumber, elementSize);

function removeGridElements(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

const botao = document.querySelector(".botao");

botao.addEventListener('click', function(e){
  let chosenValue = 0;
  while(chosenValue <= 0 || chosenValue > 100){
    chosenValue = parseInt(prompt("Choose the new number of squares"));
  }

  removeGridElements();

  divNumber = chosenValue;
  elementSize = Math.round(gridSize / divNumber);
  createGrid(divNumber, elementSize);
});
