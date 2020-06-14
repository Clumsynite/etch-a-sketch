let container = document.getElementById('container');


function makegrid(grid){
    
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(let i=0;i<(grid*grid);i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "gridCell";
    }
    
}

function request(){
    let gridSize = Number(prompt('Enter a grid size you want (Max size 64)'));
    if(gridSize>64){
        alert('Dude, I just told you the max size');
        makegrid(16);
    } else{
        makegrid(gridSize);
    }}
request();

let gridCell = document.querySelectorAll('.gridCell');

let cells = Array.from(gridCell);
cells.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.style.backgroundColor = 'black';
        elem.style.border = '1px solid white';
    });
});
