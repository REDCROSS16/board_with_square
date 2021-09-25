const board = document.querySelector('#board');
const SQUARES_NUMBER = 1000;
const colors = ['red','blue', 'green','yellow', 'purple'];
const VMColors = ['#e74c3c', '#8e44ad','#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function getRandomColor () {
    // const color = ['gold', 'silver'];
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    // const index = Math.floor(Math.random() * color.length);
    // return color[index];
    return color;
}