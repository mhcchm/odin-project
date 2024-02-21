const gridSize = 960;
const divNumber = 16;
const elementSize = Math.round(gridSize / divNumber);
const grid = document.querySelector(".grid");

for(let i=0;i<divNumber;i++){
  for(let j=0;j<divNumber;j++){
    const newDiv = document.createElement('div');
    newDiv.style.minHeight = elementSize + 'px';
    newDiv.style.minWidth = elementSize + 'px';
    grid.appendChild(newDiv);
  }
}
