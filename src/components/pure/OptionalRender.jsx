import React, {useState} from 'react';

let Red = 0;
let green = 200;
let blue = 100;

//? estilos para usuario logueados
const loggedStyle = {
    backgroundColor: `rgb(${Red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
};
//? estilos para los no logueados

const unloggeedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

/// login /logout buttons
const LoginButton = ({loginAction,propStyle}) => {
    return (
        <button style={propStyle}   onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle}  onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion true) && expesion => se renderizar la expresion
// ? (Expresòn false) && expresion => no se renderiza la expresion



const OptionalRender = () => {
    const [Access, setAccess] = useState(false);

    const [nMessages, setNMessage] = useState(0);



    //const updateAccess = () =>{
    //    setAccess(!Access);
    //} 

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }
    
    let OptionalButton;
    /*if (Access) {
        OptionalButton = <button onClick={updateAccess}>Logout</button>
    }else{
        OptionalButton = <button onClick={updateAccess}>Login</button>*/
   
    if (Access) {
        OptionalButton = <LogoutButton propStyle={ unloggeedStyle } logoutAction={logoutAction}></LogoutButton>
    }else{
        OptionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    // unread messages
    let addMessages = () => {
        setNMessage(nMessages + 1)
    }

    return (
        <div>
            {/**Optional Button */}
            { OptionalButton }
            {/**N messages unread*/}
            {/* {nMessages === 1   && <p>You have {nMessages} New Message...</p>}
            {nMessages > 1 && <p>You have {nMessages} New Messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/**ternay Operator */}
            {Access ? (
                <div>
                {nMessages > 0 ? 
            <p>You have {nMessages} New Message{nMessages>1 ? 's' : null}...</p>
            :
            <p>There are no new messages</p>}
            
            <button onClick={addMessages}>{nMessages===0 ?'Add you first message': 'Add new Messages'}</button>
                </div>): null}
            
        </div>
    );
}

export default OptionalRender;
