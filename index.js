// constants to select element
const container = document.querySelector('#container');
const button = document.getElementById("button");

// function for making grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.id = 'cell_id';
        // function for color change on mouseover
        cell.addEventListener("mouseover", e => 
        // highlights on mouseover
        e.target.classList.add('gridHover')
        );
        container.appendChild(cell).className = "gridItem";
    };
};

// function for color change on mouseover
//const boxes = document.getElementById('cell_id');
//boxes.classList.remove('gridHover')

// function for game reset on button click

// makes 16x16 grid
makeGrid(16, 16)