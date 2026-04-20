// import modules
import { name, age, message } from '../personal.js'

// Function Expression (Anonymous)
const Message = () => {
    return (
        <h2>{message}</h2>
    )
}

export default Message