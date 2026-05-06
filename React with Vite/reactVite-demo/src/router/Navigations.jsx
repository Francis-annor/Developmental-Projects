/**
 * Navigations.jsx
 * This file contains the Navigations component for the React app.
 * It provides navigation links using React Router.
 */

import { NavLink } from 'react-router-dom' // Import NavLink for creating navigation links

/**
 * navLinkStyles
 * Function to style NavLink components based on active state.
 * @param {Object} param0 - Destructured object containing isActive.
 * @param {boolean} param0.isActive - True if the link is active.
 * @returns {Object} Style object.
 */
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

/**
 * Navigations component.
 * Renders a navigation bar with links to different pages.
 * @returns {JSX.Element} The navigation element.
 */
export default function Navigations(){
    return (
        <nav>
         <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
         <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
         <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
        </nav>
    )
}
