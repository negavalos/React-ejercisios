/**
 * componente que va a contener un formulario para 
 * autenticar usuario
 */
import React, { useState } from 'react';

const LoginForm = () => {
    const initialCredential = {
        user: '',
        password: ''
    };
    const [credentials, setcredentials] = useState(initialCredential);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
