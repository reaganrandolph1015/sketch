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
        container.appendChild(cell).className += " gridItem";
    };
};

// deletes grid
function deleteGrid() {
    let cell = document.querySelectorAll('.gridItem');
    cell.forEach(cell => {
        container.removeChild(cell);
    });
}

// function for color change on mouseover
function reset() {
    // var for cels with red bg
    let wholeGrid = document.getElementsByClassName('gridHover');
    // takes cell with class name 'gridHover' and removes them
    while (wholeGrid.length) {
        wholeGrid[0].classList.remove('gridHover');
    }
    // prompt for next round 
    let numberSquare = prompt("How many squares for the rows/columns would you like?(≤100)")
    let num = parseInt(numberSquare);

    deleteGrid();
    // 100 max for user input
    if (num <= 100) {
        makeGrid(num, num);
    } else {
        return alert("Error!");
    }
}

// makes 16x16 grid
makeGrid(16, 16)