import { useState } from "react"

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
        fullname: 'Mr. '
    });

    // Handling Multiple Form Inputs
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    // Handling Form Submit and preventing Default
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(name);
    // }

    return (
    // Handling Form Submit and preventing Default
        <form onSubmit={ (e) => {e.preventDefault()} }>
            <h3>Login</h3>
            <label>Enter your name: 
                <input 
                type='text' 
                name="fullname"
                value={ inputs.fullname } 
                onChange={ handleChange } />
            </label>
            <p>Name: { inputs.fullname }</p>
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
            <label>Write here: 
                <textarea 
                name="message"
                value={ inputs.message } 
                onChange={ handleChange } />
            </label>
            <pre>Message: { inputs.message }</pre>
            <input type='submit' />
        </form>

    )
}

export default Forms