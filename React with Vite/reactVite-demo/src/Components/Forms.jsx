import { useState } from "react"
import { createPortal } from "react-dom"

function Forms(){
    return (
        <>
        <Login />
        </>
    )
}

// React Forms
function Login(){
    // Controlling Components
    // Handling Multiple Form Inputs
    const [inputs, setInputs] = useState({
        fullname: 'Mr. ',
        favRiceBall: true,
        gender: ''
    });

    // Handling Multiple Form Inputs
    const handleChange = (e) => {
        const name = e.target.name;
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    // Handling Form Submit and preventing Default
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(name);
    // }

    // Portal Syntax: createPortal(children, domNode);
    // children: is any renderable React content, like elements, strings, or fragments
    // domNode: is a DOM element where the portal should be inserted instead.
    // Creating a Portal for the login form using createPortal
    return createPortal(
    // Handling Form Submit and preventing Default
        <form onSubmit={ (e) => {e.preventDefault(); alert(inputs.gender)} }>
            <h3>Login</h3>
            <label>Enter your name: 
                <input 
                type='text' 
                name="fullname"
                value={ inputs.fullname } 
                onChange={ handleChange } />
            </label>
            <p>Name: { inputs.fullname }</p>
            <p>Gender:</p>
            <label>
                <input 
                type="radio" 
                name="gender" 
                value="Male" 
                checked={ inputs.gender === 'Male' } 
                onChange={ handleChange } /> Male
            </label>
            <label>
                <input 
                type="radio" 
                name="gender" 
                value="Female" 
                checked={ inputs.gender === 'Female' } 
                onChange={ handleChange } /> Female
            </label>
            <br />
            <label>Marital Status: 
                <select 
                name="maritalStatus"
                value={ inputs.maritalStatus } 
                onChange={ handleChange }>
                    <option value='Single'>Single</option>
                    <option value='Married'>Married</option>
                    <option value='Widow'>Widow</option>
                    <option value='Separated'>Separated</option>
                </select>
            </label>
            <br />
            <p>Favourite Foods</p>
            <label>
                <input 
                type="checkbox"
                name="favRiceBall" 
                checked={ inputs.favRiceBall } 
                onChange={ handleChange } /> Rice Ball
            </label>
            <label>
                <input 
                type="checkbox" 
                name="favBanku" 
                checked={ inputs.favBanku } 
                onChange={ handleChange } /> Banku & Okro Stew
            </label>
            <label>
                <input 
                type="checkbox" 
                name="favJollog" 
                checked={ inputs.favJollof } 
                onChange={ handleChange } /> Jollof Rice
            </label>
            <label>
                <input 
                type="checkbox" 
                name="favFufu" 
                checked={ inputs.favFufu } 
                onChange={ handleChange } /> Fufu
            </label>
            <label>
                <input 
                type="checkbox" 
                name="favFriedRice" 
                checked={ inputs.favFriedRice } 
                onChange={ handleChange } /> Fried Rice
            </label>
            <br />
            <label>Write here: 
                <textarea 
                name="message"
                value={ inputs.message } 
                onChange={ handleChange } />
            </label>
            <pre>Message: { inputs.message }</pre>
            <input type='submit' />
        </form>,

        document.body
    );
}

export default Forms