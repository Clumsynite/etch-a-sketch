let container = document.getElementById('container');
let resetBtn = document.getElementById('reset');

function clearGrid() {
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
    }
}
function makegrid(grid){    
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(let i=0;i<(grid*grid);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "gridCell";
    }
}

function request(){
    clearGrid();
    let gridSize = Number(prompt('Enter a grid size you want (Max size 64)'));
    if(gridSize>64){
        alert('Dude, I just told you the max size');
        makegrid(16);
    } else{
        makegrid(gridSize);
    }
    paintBlack();
}

request();

function paintBlack(){
    let gridCell = document.querySelectorAll('.gridCell');
    let cells = Array.from(gridCell);
    cells.forEach(elem => {
        elem.addEventListener('mouseover', () => {
            elem.classList.remove("gridCell");
            elem.classList.add ("blackCell");
        });
    });
}

resetBtn.addEventListener('click', () => {
    request();
});