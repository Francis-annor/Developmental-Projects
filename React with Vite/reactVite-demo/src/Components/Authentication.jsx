// React Conditional Rendering

// If Statement Condition
function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal>{props.children}</MadeGoal>
    }
    return(
        <MissedGoal>{props.children}</MissedGoal>
    )
}

function MadeGoal(){
    return (
        <h3>Goal!!!</h3>
    )
}

function MissedGoal(){
    return (
        <h3>Missed</h3>
    )
}

// Logical && Operator Condition Statement Example
function Loading(props){
    return (
        <>
        {props.loaded && <h4>{props.loaded}, The page has finish loading</h4>}
        </>
    )
}

// Ternary ? Operator Condition Statement Example
function Auth({isLogin}){
    const yes = 'Welcome';
    const no = "Please Sign-in";
    return (
        <>
        {isLogin ? yes : no }
        </>
    )
}

export  { Goal, Loading, Auth }