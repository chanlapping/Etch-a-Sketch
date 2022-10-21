// get container element
// create 16 divs
// set width and height of each div
// put them in container

const container = document.querySelector('.container');
const squares = [];

for (let i = 0; i < 16*16; i++) {
    squares[i] = document.createElement('div');
    squares[i].style.border = '1px solid black';
    squares[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'black';
    });
    container.appendChild(squares[i]);
}