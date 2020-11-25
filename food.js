import { onSnake, growSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
const GROW_RATE = 5; 

export function update() {
    if( onSnake( food )){
        growSnake(GROW_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(board) {
   
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while( newFoodPosition == null || onSnake(newFoodPosition) ) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}