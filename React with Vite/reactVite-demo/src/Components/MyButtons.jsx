import buttonStyles from '../CSS/Button.module.css'

// React Event Handler
export default function Submit(){
    const Specify = (content, action) => {
        alert('Action: ' + action.type + ' Content: ' + content);
    }
    return(
        <div>
            <button onClick={(event) => Specify('Form', event)} className={buttonStyles.myButton}>Submit</button>
            {/* CSS Multiple classes
            To demostrate the changes, we need to have two buttons, with two classes each: */}
            <button onClick={(event) => Specify('Submit', event)} className={`${buttonStyles.myButton} ${buttonStyles.primary}`}>Send</button>
            <button onClick={(event) => Specify('Edit', event)} className={`${buttonStyles.myButton} ${buttonStyles.secondary}`}>Edit</button>
            {/* CSS Composes Classes
            CSS Modules allow you to combine classes using the composes keyword.
            This can be done by adding composes: mybutton to the primary and secondary classes in the .module.css file */}
            <button onClick={(event) => Specify('Delete', event)} className={buttonStyles.danger}>Delete</button>
            {/* CSS Global Classes 
            This is done by prefixing the class name with a hash of the file name and a unique identifier.
            However, sometimes you want your classes to be available globally, and use them in other components.*/}
            <button onClick={(event) => Specify('Save', event)} className="save">Save</button>
        </div>
        //Passing Arguments to event handlers, and Using 'event' as an argument to check for Event type.
    )
}