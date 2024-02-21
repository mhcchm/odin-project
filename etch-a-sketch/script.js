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
      
      // Extra credit 2
      // control the blackness of the element
      let color=0;

      newDiv.addEventListener("mouseenter", function(e){
        newDiv.style.backgroundColor = 'black';
        
        // Extra credit 1
        // make the color random
        //let r=Math.round(Math.random() * 256), g=Math.round(Math.random() * 256), b=Math.round(Math.random() * 256);
        //newDiv.style.backgroundColor = "rgb("+ r +", " + g + ", " + b + ")";
        
        //Extra credit 2
        // make the color of the square increasingly black and it doesn't get cleared
        // for this it is necessary to comment the mouseleave event listener
        // each time the square interacts with the mouse the color is increased from one to ten
        // and the background color of the square can be calculated by 255 - (color/10)*255 for each red, blue, green
        //let newColor = (255 - (color/10)*255);
        //newDiv.style.backgroundColor = "rgb(" + newColor + ", " + newColor + ", " + newColor + ")";
        //color++;
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
