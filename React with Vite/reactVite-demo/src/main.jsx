// Single name import module
import { createRoot } from 'react-dom/client'

// Multi Named import. Note: When importing a named export module, it must be destructured using curly braces
import { App, Counter, MyFruits, UserList } from './App';


const root = document.getElementById('root');
createRoot(root).render(
  // Rendering imported modules using render() method
  <>
    <App />
    <MyFruits />
    <UserList />
    <Counter />
  </>
)
