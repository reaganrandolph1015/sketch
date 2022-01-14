// constants to select element
const container = document.querySelector('#container');

// function for making grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.id = 'cell_id';
        // function for color change on mouseover
        cell.addEventListener("mouseover", e => 
        // highlights on mouseover
        e.target.classList.add('gridBack')
        );
        container.appendChild(cell).className = "gridItem";
    };
};
// makes 16x16 grid
makeRows(16, 16)