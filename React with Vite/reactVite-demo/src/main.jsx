import { createRoot, useState } from 'react-dom/client'

const myelement = (
    <table>
      <tr>
        <th>Names</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

  // React Map With Array Example
const fruits = ['Apple', 'Banana', 'Mango', 'Pineapple'];

function MyList(){
  return (
      <ul>
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
]

function UserList(){
  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>Name: {user.name}  Age: {user.age}</li>
      )}
    </ul>
  )
}

// Detructuring In React Components
// Props Destructuring
function Greeting({name, age}){
  return (<h1>Hello! {name}, you are {age} years old.</h1>)
}

// useState Hook Destructuring
// We use destructuring to extract the values in a useState Hook
function Counter(){
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={()=> setCount(count + 1)}>
      Count: {count}
    </button>
  )
}

createRoot(document.getElementById('root')).render(
  <>
     <myelement />
     <MyList />
     <UserList />
     <Greeting name='John' age={25} />
     <Counter />
  </>
)
