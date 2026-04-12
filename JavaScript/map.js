const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.map(x => x * 2);



// Map With Array Example
const fruits = ['Apple', 'Banana', 'Mango', 'Pineapple'];
fruits.map(fruit => alert(fruit))


// React Map With Arrays Of Objects Examples
const users = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Jane', age: 25},
    {id: 3, name: 'Bob', age: 35}
];
users.map(user => alert("Id: " + user.id + " Name: " + user.name + " Age: " + user.age))

// The Map Parameters
// Syntax: array.map(currentValue, index(optional), array(optional) => { Statement })
// currentValue: Represent the current data, value, or item in the loop.
// index(optional): Represent the current index, or position of the currentValue in the array.
// array(optional): Represent the whole array itself, which returns or show a new array, and does not modify the original array.