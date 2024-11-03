const boxContainer = document.querySelector("#grid-box")
let rows = 50
let columns = 50

const gridSize = 600




boxContainer.style.width = `${gridSize}px`
boxContainer.style.height = `${gridSize}px`

function backgroundColor() {
    console.log(this)
    this.style.backgroundColor = "black"
}


function createCells() {
    for(let i=0; i < (rows * columns); i++) {
        const gridCells = document.createElement('div')
        gridCells.classList.add('cell')
        gridCells.style.height = `${(gridSize / rows) -2}px`
        gridCells.style.width = `${(gridSize / columns) -2}px`
        gridCells.addEventListener("mouseover", backgroundColor)
        boxContainer.appendChild(gridCells)
        
    }

}





createCells()