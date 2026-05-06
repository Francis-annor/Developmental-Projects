import { Link, Outlet } from 'react-router-dom'

/**
 * Home component
 * This component renders the home page with navigation links to Main and Dashboard,
 * and includes an Outlet for nested routes.
 */
export default function Home(){
    return (
        <>
        <h1>Home Page</h1>
        <nav>
            <Link to="/home/Main">Main</Link> |{" "}
            <Link to="/home/Dashboard">Dashboard</Link>
        </nav>
        <Outlet />
        </>
    )
}