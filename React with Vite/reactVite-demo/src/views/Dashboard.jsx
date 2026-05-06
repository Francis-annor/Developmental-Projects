import { useParams } from 'react-router-dom'

/**
 * Info component that displays the firstname parameter from the URL.
 */
export default function Info(){
    const { firstname } = useParams();
    return (
        <>
        <h3>{firstname}</h3>
        </>
    )
}