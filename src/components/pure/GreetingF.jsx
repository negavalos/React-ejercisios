import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // Breve introduccion a useState
    // const [variable, metodo para actualizar] = useState(valorInicial)
    const [age, setage] = useState(23)

    const birthday = () => {
        //actualizamos el state
        setage(age + 1);
    }
    return (
        <div>
                <h1>
                    Hola {props.name}! componente en funcion!
                </h1>
                <h2>
                    Tu edad es de : {age}!
                </h2>
                
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
                
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
