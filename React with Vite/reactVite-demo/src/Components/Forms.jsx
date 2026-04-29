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
    const [name, setName] = useState("Mr. ");
    const [message, setMessage] = useState("");
    const [selected, setOption] = useState("Divorced");

    // Controlling Components
    // const handleChange = (e) => {
    //     setName(e.target.value);
    // }

    // Handling Form Submit and preventing Default
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(name);
    // }

    return (
    // Handling Form Submit and preventing Default
        <form onSubmit={ (e) => {e.preventDefault(); alert(name +' '+ message)} }>
            <h3>Login</h3>
            <label>Enter your name: 
                <input type='text' value={ name } onChange={ (e) => setName(e.target.value) } />
            </label>
            <p>Name: { name }</p>
            <label>Marital Status: 
                <select 
                value={ selected } 
                onChange={(e) => setOption(e.target.value)}>
                    <option value='Single'>Single</option>
                    <option value='Married'>Married</option>
                    <option value='Widow'>Widow</option>
                    <option value='Separated'>Separated</option>
                </select>
            </label>
            <br />
            <label>Write here: 
                <textarea 
                value={ message } 
                onChange={ (e) => setMessage(e.target.value)} />
            </label>
            <pre>Message: { message }</pre>
            <input type='submit' />
        </form>

    )
}

export default Forms