// Import React Router DOM components for route configuration.
// - Routes: wrapper for the set of route definitions.
// - Route: defines a single route and the element to render.
// - Outlet: placeholder for nested routes when rendering child elements.
import { Routes, Route, Outlet } from 'react-router-dom'

// Import view components used by the router.
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Info from '../views/Dashboard'

export default function Paths(){
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='/home/:firstname' element={<Info />}/>
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    )
}