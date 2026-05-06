// CSS Styled Components
import styled from 'styled-components';

// Using CSS-in-JS
const AlphaNumericKeys = styled.h4`
    background-color: red;
    color: white;
    padding: 10px 20px;
`;

// Props in styled components
const H2 = styled.h2`
    background: ${props => props.sameColor === 'orange' ? 'black' : 'orange'};
    color: white;
    padding: 10px 20px;
`;

// Another way of letting multiple elements have the same styles is to extend existing styled components.
const TwoH2 = styled.h3`
    padding: 10px 20px;
    color: white;
`;

const FirstH2 = styled(TwoH2)`
    background: dodgerblue;
`;

const SecondH2 = styled(TwoH2)`
    background: gray;
`;

function Keys(props){
    return (
        <>
        <h1>Keyboard</h1>
        <AlphaNumericKeys>A - Z</AlphaNumericKeys>
        <FunctionalKeys>{props.children}</FunctionalKeys>
        <NumericKeys>{props.children}</NumericKeys>
        <ArrowKeys>{props.children}</ArrowKeys>
        <EditKeys>{props.children}t</EditKeys>
        </>
    )
}

// function AlphaNumericKeys(){
//     return (
//         <h4>A - Z</h4>
//     )
// }

function FunctionalKeys(){
    return (
        <H2 sameColor='orange'>F1 - F12</H2>
    )
}

function NumericKeys(){
    return (
        <H2>0 - 9</H2>
    )
}

function ArrowKeys(){
    return (
        <FirstH2>Top, Down, Left, Right</FirstH2>
    )
}

function EditKeys(){
    return (
        <SecondH2>Insert, Delete, Page up, Page Down, End, Scroll, Home, Print screen, Pause, Break, System request</SecondH2>
    )
}

export default Keys