// ============================================
// JAVASCRIPT FUNCTIONS LEARNING GUIDE
// ============================================

// 1. FUNCTION DECLARATION
// - Hoisted (can be called before declaration)
// - Has access to 'this' keyword
// - Best for reusable functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // "Hello, Alice!"


// 2. FUNCTION EXPRESSION (Named)
// - NOT hoisted
// - Named reference is only available inside the function
// - Can be assigned to a variable
const add = function addNumbers(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8
// addNumbers(5, 3); // ERROR - not accessible outside


// 3. ANONYMOUS FUNCTION EXPRESSION
// - Function without a name
// - Commonly used for callbacks
// - NOT hoisted
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 7)); // 28


// 4. ARROW FUNCTION (ES6+)
// - Concise syntax
// - No 'this' binding (inherits from parent scope)
// - Single expression returns value implicitly
const subtract = (a, b) => a - b;
console.log(subtract(10, 3)); // 7

// Multi-line arrow function (needs return statement)
const divide = (a, b) => {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
};
console.log(divide(20, 4)); // 5
console.log(divide(20, 0)); // "Cannot divide by zero"


// 5. PARAMETERS & ARGUMENTS
// Default parameters
function welcome(name = 'Guest') {
    return `Welcome, ${name}!`;
}
console.log(welcome()); // "Welcome, Guest!"
console.log(welcome('Bob')); // "Welcome, Bob!"

// Rest parameters (collect multiple arguments into array)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring parameters
function printCoordinates({ x, y }) {
    return `Point: (${x}, ${y})`;
}
console.log(printCoordinates({ x: 10, y: 20 })); // "Point: (10, 20)"


// 6. RETURN STATEMENT
// Functions can return any data type
function getInfo() {
    return {
        name: 'JavaScript',
        type: 'Language',
        year: 1995
    };
}
console.log(getInfo());

// Functions without return implicitly return 'undefined'
function logMessage(msg) {
    console.log(msg);
    // Implicitly returns undefined
}


// 7. SCOPE
// Global Scope
const globalVar = 'I am global';

{
    // Block Scope (let, const)
    const blockVar = 'I am block scoped';
    let blockLet = 'Also block scoped';
    console.log(globalVar); // Can access global
}
// console.log(blockVar); // ERROR - out of scope

function testScope() {
    // Function Scope
    const functionVar = 'I am function scoped';
    console.log(globalVar); // Can access global
}


// 8. CALLBACKS
// Functions that are passed to other functions
function processUserInput(name, callback) {
    const fullName = `User: ${name}`;
    callback(fullName);
}

processUserInput('Charlie', function(result) {
    console.log(result); // "User: Charlie"
});

// Callback with arrow function
processUserInput('Diana', (result) => {
    console.log(result); // "User: Diana"
});


// 9. HIGHER-ORDER FUNCTIONS
// Functions that return other functions
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = makeAdder(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15


// 10. CLOSURES
// Inner functions can access outer function variables
function createCounter() {
    let count = 0; // Enclosed variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1


// 11. ARRAY METHODS WITH CALLBACKS
const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - keep elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce() - combine elements into single value
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// forEach() - execute function for each element
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});


// 12. FUNCTION METHODS
// call() - invoke with specific 'this' context
function introduce() {
    return `Hi, I'm ${this.name}`;
}
const person = { name: 'Eve' };
console.log(introduce.call(person)); // "Hi, I'm Eve"

// apply() - like call but with array of arguments
function greetPerson(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
console.log(greetPerson.apply(person, ['Hello', '!'])); // "Hello, Eve!"

// bind() - create new function with bound 'this'
const boundGreet = greetPerson.bind(person);
console.log(boundGreet('Hi', '?')); // "Hi, Eve?"


// 13. PRACTICAL EXAMPLES

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let lastRun = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastRun >= limit) {
            func(...args);
            lastRun = now;
        }
    };
}

// Compose functions
function compose(...functions) {
    return (value) => functions.reduceRight((acc, fn) => fn(acc), value);
}

const double = x => x * 2;
const addTen = x => x + 10;
const composed = compose(addTen, double);
console.log(composed(5)); // (5 * 2) + 10 = 20 