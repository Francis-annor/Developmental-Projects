// Import Modules
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import JesLordLogo from '../public/logo.png'
import JesLordBadge from '../public/badge.png'
import { name, age } from './personal.js'

// importing default export module. Note: When importing a default export module you don't need curly braces
import Message from './message'

// CSS import module
import './App.css'

// Setting the width and height values for the image's width and height attributes
const imgWidth = 100;
const imgHeight = 100;

// Function Declaration
function App() {
  return (
    <div>
      <nav>
        {/* Setting the src, width, and the height of an image */}
        <img src={ JesLordLogo } height={imgHeight} width={imgWidth} />
        <img src={ JesLordBadge } height={imgHeight} width={imgWidth} />
      </nav>
      <h1>Hello World!</h1>
      <Introduction />
      <Message />
    </div>
  )
}

// const myTable = (
//     <table>
//       <tr>
//         <th>Names</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );

// Detructuring In React Components
// Props Destructuring with function declaration
function Introduction(){
  return (
    <h2>My name is {name}, and I am {age} years of age</h2>
  )
}

// useState Hook Destructuring
// We use destructuring to extract the values in a useState Hook
function Counter(){
  // Destructuring useState() Hook
  const [count, setCount] = useState(5);
  
  return (
    // Setting an onclick count for the button using useState
    <button onClick={()=> setCount(count + 5)} className='counter'>
      Count: {count}
    </button>
  )
}

// React Map With Array Example
const fruits = ['Apple', 'Banana', 'Mango', 'Pineapple'];
function MyFruits(){
  return (
      <ul>
        {/* Using map() method to list the values in the fruits array */}
      {fruits.map(fruit => 
          <li key={fruit}>{fruit}</li>)}
      </ul>
  )
}

// React Map With Arrays Of Objects Examples
const users = [
  {id: 1, name: 'John', age: 30},
  {id: 2, name: 'Joe', age: 25},
  {id: 3, name: 'Bob', age: 35}
];

// Single Name Export Module
export function UserList(){
  return (
    <ul>
      {/* Using map() method to list the access the values inside the objects in the users array */}
      {users.map(user =>
        <li key={user.id}>Name: {user.name}  Age: {user.age}</li>
      )}
    </ul>
  )
}

// Multi Export Modules. It can also be used for Single Export Module
export {App, Counter, MyFruits}
