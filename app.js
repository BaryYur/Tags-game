'use strict';

const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    top: 0,
    left: 0
}

const cells = [];
cells.push(empty);

function move(index) {
    const cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left); //horizontal length
    const topDiff = Math.abs(empty.top - cell.top);// vertical length

    if (leftDiff + topDiff > 1) {
        return;
    };

    cell.element.style.top = `${empty.top * cellSize}px`;
    cell.element.style.left = `${empty.left * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;
};

const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5) //random numbers array

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = numbers[i - 1] + 1;

    const left = i % 4;//cells left
    const top = (i - left) / 4; //cells top

    cells.push({
        left: left,
        top: top,
        element: cell
    });
    
    cell.style.top = `${top * cellSize}px`;
    cell.style.left = `${left * cellSize}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
        move(i);
    })
};