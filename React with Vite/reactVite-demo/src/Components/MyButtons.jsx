// React Event Handler
export default function Submit(){
    const Specify = (content, action) => {
        alert('Action: ' + action.type + ' ' + content);
    }
    return(
        //Passing Arguments to event handlers, and Using 'event' as an argument to check for Event type.
        <button onClick={(event) => Specify('Form', event)}>Submit</button>
    )
}