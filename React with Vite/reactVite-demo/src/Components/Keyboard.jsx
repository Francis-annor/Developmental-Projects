function Keyboard(){
    <>
    <AlphaNumericKeys>A - Z</AlphaNumericKeys>
    <FunctionalKeys>F1 - F12</FunctionalKeys>
    <NumericKeys>0 - 9</NumericKeys>
    <ArrowKeys>Top, Down, Left, Right</ArrowKeys>
    <EditKeys>Insert, Delete, Page up, Page Down, End, Scroll, Home, Print screen, Pause, Break, System request</EditKeys>
    </>
}

function AlphaNumericKeys(props){
    return (
        <h4>{props.children}</h4>
    )
}

function FunctionalKeys(){

}

function NumericKeys(){

}

function ControlKeys(){

}

function ArrowKeys(){

}

function EditKeys(){

}

export default Keyboard