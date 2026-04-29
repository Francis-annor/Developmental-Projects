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
    const [name, setName] = useState("");

    // const handleChange = (e) => {
    //     setName(e.target.name);
    // }

    return (

        <form>
            <h3>Login</h3>
            <label>Enter your name: 
                <input type='text' value={ name } onChange={ (e) => setName(e.target.value) } />
            </label>
            <p>Current value: { name }</p>
        </form>

    )
}

export default Forms