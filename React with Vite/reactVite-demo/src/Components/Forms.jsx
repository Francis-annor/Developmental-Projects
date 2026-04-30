import { useState } from "react"
import { createPortal } from "react-dom"
// import { createRoot } from "react-dom/client"

function FormModals(props){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button onClick={() => setIsOpen(true)}>Login</button>
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {props.children}
        </LoginModal>
        </>
    )
}

// React Forms
// Putting the login form in a modal
function LoginModal({isOpen, onClose}){
    // Controlling Components
    // Handling Multiple Form Inputs
    const [inputs, setInputs] = useState({
        fullname: 'Mr. ',
        favRiceBall: true,
        gender: ''
    });

    if(!isOpen) return null;

    // Handling Multiple Form Inputs
    const handleChange = (e) => {
        const name = e.target.name;
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const formStyle = {
        background: 'white',
        padding: '20px',
        borderRadius: '18px'
    }

    // Handling Form Submit and preventing Default
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs.gender)
    }

    // Portal Syntax: createPortal(children, domNode);
    // children: is any renderable React content, like elements, strings, or fragments
    // domNode: is a DOM element where the portal should be inserted instead.
    // Creating a Portal for the login form using createPortal
    return createPortal(
        <div style={ modalStyle }>
            <form onSubmit={ handleSubmit } style={ formStyle }>
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
            </form>
            <button onClick={ onClose }>Close</button>
        </div>,

        document.body
    );
}

export default FormModals