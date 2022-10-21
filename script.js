const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
let squares = [];

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        squares[i] = document.createElement('div');
        squares[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'black';
        });
        container.appendChild(squares[i]);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function removeGrid() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
}

createGrid(16);

gridBtn.addEventListener('click', () => {
    let size = +prompt('enter number of squares per side: ');
    if (size <= 0 || size > 100 || isNaN(size)) {
        alert('invalid value');
        return;
    }
    removeGrid();
    squares = [];
    createGrid(size);
});