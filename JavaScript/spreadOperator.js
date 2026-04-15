// Spread Operator
// It copies all or part of an existing array or object into another array or object

const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];

const numberCombine = [...numberOne, ...numberTwo];

// Using spread operator with destructuring
const numbers = [1, 2, 3, 4, 5, 6];
// Assigning the first two values in the array to two separate variables, and the rest to the spread operator
const [one, two, ...rest] = numbers;


// Using Spread Operator with objects
const car = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const car_more = {
    type: 'Car',
    year: '2021',
    color: 'yellow'
}

const vehicle = {...car, ...car_more};