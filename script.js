const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
const defaultBtn = document.querySelector('#default');
const colorBtn = document.querySelector('#color');
const grayBtn = document.querySelector('#gray');
let squares = [];
let currentColor = 'black';
createGrid(16);

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        squares[i] = document.createElement('div');
        squares[i].style.backgroundColor = 'white';
        squares[i].addEventListener('mouseenter', applyDefaultMode);
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

function applyDefaultMode() {
    this.style.backgroundColor = 'black';
    this.style.opacity = '1';
}

function applyColorMode() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    this.style.opacity = '1';
}

function applyGrayMode() {
    let bgColor = this.style.backgroundColor;
    if (bgColor !== 'black') {
        this.style.backgroundColor = 'black';
        this.style.opacity = '0.1';
    } else {
        let opacity = Number(this.style.opacity) + 0.1;
        if (opacity > 1) {
            opacity = 1;
        }
        this.style.opacity = `${opacity}`;
    }
}

defaultBtn.addEventListener('change', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('mouseenter', applyColorMode);
        squares[i].removeEventListener('mouseenter', applyGrayMode);
        squares[i].addEventListener('mouseenter', applyDefaultMode);
    }
});

colorBtn.addEventListener('change', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('mouseenter', applyDefaultMode);
        squares[i].removeEventListener('mouseenter', applyGrayMode);
        squares[i].addEventListener('mouseenter', applyColorMode);
    }
});

grayBtn.addEventListener('change', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('mouseenter', applyColorMode);
        squares[i].removeEventListener('mouseenter', applyDefaultMode);
        squares[i].addEventListener('mouseenter', applyGrayMode);
    }
});