'use strict';

const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    top: 0,
    left: 0
};

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

    if (numbers[i - 1] + 1 === 1 || numbers[i - 1] + 1 === 2 || numbers[i - 1] + 1 === 3 || numbers[i - 1] + 1 === 4) {
        cell.style.background = 'linear-gradient(to bottom, dodgerblue, cornflowerblue)';
    };

    if (numbers[i - 1] + 1 === 5 || numbers[i - 1] + 1 === 6 || numbers[i - 1] + 1 === 7 || numbers[i - 1] + 1 === 8) {
        cell.style.background = 'linear-gradient(to bottom, cornflowerblue, royalblue)';
    };

    if (numbers[i - 1] + 1 === 9 || numbers[i - 1] + 1 === 10 || numbers[i - 1] + 1 === 11 || numbers[i - 1] + 1 === 12) {
        cell.style.background = 'linear-gradient(to bottom, royalblue, mediumblue)';
    };

    if (numbers[i - 1] + 1 === 13 ||numbers[i - 1] + 1 === 14 || numbers[i - 1] + 1 === 15) {
        cell.style.background = 'linear-gradient(to bottom, mediumblue, darkblue)';
    };

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