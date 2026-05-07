/**
 * App.jsx
 * Main application entry point for the React Vite demo.
 *
 * This module sets up the browser router, global styling, lazy-loaded components,
 * and helper components used in the main application layout.
 */

// Import Modules
import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigations from './router/Navigations.jsx'
import Paths from './router/Paths.jsx'
import Results from './components/SearchResults.jsx'
// createRoot lets you create a root to display React components inside a browser DOM node.
// import { createRoot } from 'react-dom/client'
import JesLordLogo from '/logo.png'
import JesLordBadge from '/badge.png'
// Importing default export module. Note: When importing a default export module you don't need curly braces
import { name, age } from './components/personal.js'
// Suspense with lazy loading
// Lazy Method: Using lazy to import the Form Component dynamically
const FormModals = lazy(() => import('./components/Forms.jsx'));
import Message from './components/message.jsx'
import Keys from './components/Keyboard.jsx'
const Submit = lazy(() => import('./components/MyButtons.jsx'));
import {Goal, Loading, Auth } from './components/Authentication.jsx'
// CSS import module
import './App.css'
import { createGlobalStyle } from 'styled-components'

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

// Setting the width and height values for the image's width and height attributes
const imgWidth = 100;
const imgHeight = 100;

// Using createGlobalStyle of CSS-in-JS as a typical CSS internal styling to structure the App declaration function
const GlobalStyle = createGlobalStyle`
  .nav-container {
    background-color: white;
    color: gray;
    border: 4px solid orange;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
  nav h1 {
    font-size: 2.5em;
    color: orange;
  }
  nav div:firstChild(){
    display: block;
  }
  main {
    display: flex;
  }
  hr {
    heigth: 100vh;
  }
`;

/**
 * App component
 *
 * Uses BrowserRouter to wrap the main application UI, includes the navigation
 * header, routes, lazy-loaded form content, and example components.
 */
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <nav className='nav-container'>
        <div>
          <img src={ JesLordBadge } height={imgHeight} width={imgWidth} />
          <Navigations />
        </div>
        <h1>JesLord Genius</h1>
        <div>
          <Time />
          <Date />
        </div>
      </nav>
      <Results />
      <Paths />
      <main>
        <div>
          <h1>Hello World!</h1>
          <Introduction />
          <Message />
          <Submit />
          <Goal isGoal={true}/>
          <Loading loaded={'Yes'} />
          <Auth isLogin={false} />
          <h1>Forms</h1>
          {/* Suspense Compnent: The Suspense Component will display a loading message while it is loading. 
          sing Suspense with lazy will delay even if the task is very fast. */}
          <Suspense fallback={<h2>Loading...</h2>}>
            <FormModals />
          </Suspense>
        </div>
        <hr />
        <div>
          <Keys />
        </div>
      </main>
    </BrowserRouter>
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
