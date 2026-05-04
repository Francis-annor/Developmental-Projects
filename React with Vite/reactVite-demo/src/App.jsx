// Import Modules
import { Suspense, lazy, useState } from 'react'
// createRoot lets you create a root to display React components inside a browser DOM node.
// import { createRoot } from 'react-dom/client'
import JesLordLogo from '/logo.png'
import JesLordBadge from '/badge.png'

// Importing default export module. Note: When importing a default export module you don't need curly braces
import { name, age } from './Components/personal.js'
// Suspense with lazy loading
// Lazy Method: Using lazy to import the Form Component dynamically
const FormModals = lazy(() => import('./Components/Forms.jsx'));
import Message from './Components/message.jsx'
import Keyboard from './Components/Keyboard.jsx'
const Submit = lazy(() => import('./Components/MyButtons.jsx'));
import {Goal, Loading, Auth } from './Components/Authentication.jsx'

// CSS import module
import './App.css'

// Setting the width and height values for the image's width and height attributes
const imgWidth = 100;
const imgHeight = 100;

// const navBar = (
//   <nav>
//     <img src={ JesLordLogo } height={imgHeight} width={imgWidth} />
//   </nav>
// )

// const sideBar = (
//   <div>Side Bar</div>
// )

// const footer = (
//   <footer>#&copy; 2026</footer>
// )

// const myTable = (
//   <div>
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
//   </div>
// );

const Time = () =>{
  const time = new Date();
  const Hour = time.getHours();
  const Minute = time.getMinutes();
  const Second = time.getSeconds();
  const Millisecond = time.getMilliseconds();
  return (
  <p>{Hour}h : {Minute}m : {Second}s : {Millisecond}ms</p>
  )
}

// Function Declaration
function App() {
  return (
    <div>
      <nav>
        <Time />
        <img src={ JesLordBadge } height={imgHeight} width={imgWidth} />
      </nav>
      <h1>Hello World!</h1>
      <Introduction />
      <Message />
      <Submit />
      <Goal isGoal={false}/>
      <Loading loaded={'Yes'} />
      <Auth isLogin={true} />
      <h1>Forms</h1>
      {/* Suspense Compnent: The Suspense Component will display a loading message while it is loading. 
      sing Suspense with lazy will delay even if the task is very fast. */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <FormModals />
      </Suspense>
    </div>
  )
}

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
  const [count, setCount] = useState(1);
  
  return (
    // Setting an onclick count for the button using useState
    <button onClick={()=> setCount(count + 2)} className='counter'>
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

// Multi Name Export Modules. It can also be used for Single Export Module
export {App, Counter, MyFruits}
