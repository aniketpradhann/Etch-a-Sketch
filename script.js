const boxContainer = document.querySelector("#grid-box");
const squaresPerSide = 16;
const gridSize = 600;
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector('#slider-value');
const sliderValue2 = document.querySelector('#slider-value-2');


boxContainer.style.height = boxContainer.style.width = `${gridSize}px`


function backgroundColor() {
    this.style.backgroundColor = "black";
}

function createCells(squaresPerSide) {
    const cellSize = `${(gridSize / squaresPerSide) -2}`;
    const totalSquares = squaresPerSide * squaresPerSide;
    
    for(let i = 0; i < totalSquares; i++) {
        const gridCells = document.createElement('div');
        gridCells.classList.add('cell');
        gridCells.style.width = `${cellSize}px`;
        gridCells.style.height = `${cellSize}px`;
        gridCells.addEventListener("mouseover", backgroundColor);
        boxContainer.appendChild(gridCells);
    }
}

function deleteCells() {
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild);
    }
}

slider.oninput = function() {
    const newSize = parseInt(this.value);
    sliderValue.textContent = newSize;
    sliderValue2.textContent = newSize;
    deleteCells();
    createCells(newSize);
}

createCells(squaresPerSide);