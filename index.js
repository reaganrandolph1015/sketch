// constants to select element
const container = document.querySelector('#container');
const button = document.getElementById("button");
const boxes = document.querySelectorAll('.gridItem');
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
        e.target.classList.add('gridBack')
        );
        container.appendChild(cell).className = "gridItem";
    };
};

// function for color change on mouseover
boxes.forEach(gridItem => {
    gridItem.addEventListener("mouseover", () => {
// highlights on mouseover
        gridItem.style.backgroundColor = "red";
    })
});

// function for game reset on button click
button.addEventListener("click", () => {
    boxes.forEach(gridItem => {
        gridItem.style.backgroundColor = "white";
    });
});
// makes 16x16 grid
makeGrid(16, 16)