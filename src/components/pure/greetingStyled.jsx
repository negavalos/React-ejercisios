import React, { useState } from 'react';

// definiendo estilos en constantes

//? estilos para usuario logueados
const loggedStyle = {
    color: 'white'
};
//? estilos para los no logueados

const unloggeedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    // generamos un estaod para el componente 
    //si esta o no logeado

    const [logged, setlogged] = useState(false);
    
    const greetingUser = ()=> (<p>Hola, {props.name}</p>);
    const pleaseLogin = ()=>(<p>Please login</p>);

    return (
        <div style={logged ? loggedStyle : unloggeedStyle} >
            {logged ? 
            greetingUser()
            : 
            pleaseLogin()
            }
           
           <button onClick={()=>{
                console.log('Boton pulsado');
                setlogged(!logged)
           }}>
            { logged ? 'Logout' : 'Login'}
           </button>
        </div>
    );
}

export default GreetingStyled;
