// Destructuring is all about extracting values from an array or object

// Array Destructuring
const vehicles = ['Mustang', 'f-150', 'Expedition'];

// Old way of extraction
const vehicleA = vehicles[0];
const vehicleB = vehicles[1];
const vehicleC = vehicles[2];

// New way of exttraction (Destructuring)
// Note: During array destructuring, the order that variables are declared is important
const [car, truck, suv] = vehicles;
// If you only need some and not all the values inside the array (vehicles) you can do this;
const [first,,third] = vehicles; // in this case we are only extracting the first and the third values in the array

// Destructuring can be used on functions when it is returning an array
function dateInfo(dat){
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getYear();

    return [d, m, y];
}
const [date, month, year] = dateInfo(new Date());


// Object Destructuring
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50
}

const {firstName, lastName, Age} = person;
// Note: During object destructuring, the order that variables are declared is not important.
// And also, if you only need some and not all the values inside the object (person) you can do this;
const {ag, firstname} = person;

// Setting a new key-value pair in your object using destructuring
const {one, last, age, gender = 'Male'} = person;

// Destructuring nested object
const options = {
    A: 'Fan',
    B: 'Car',
    C: 'Ship',
    D: {
        i: 'Aeroplane',
        ii: 'Helicopter'
    }
};

const {A, B, C, D:{i}, D:{ii}} = options;
