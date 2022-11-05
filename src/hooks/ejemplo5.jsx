import React, {useState, useEffect} from 'react';
const Ejemplo5 = () => {
    const date = new Date();

    const edad = 0;

    const dato = {
        nombre: '',
        apellidos: ''
    }
    
    const [Dato, setDato] = useState(edad);
    const [Fecha, setFecha] = useState(date);
    const [Persona, setPersona] = useState(dato);

    function incrementarEdad() {
        setDato(Dato + 1)
    }
    
    setTimeout(function FechaActualizada() {
        setFecha(
            Fecha => new Date()
        )
        incrementarEdad()
    }, 1000);

    function PersonaDato() {
        setPersona(
            {
                nombre: 'Martín',
                apellidos: 'San José'
            }
        )
    }    
    useEffect(() => {
        PersonaDato()
    }, []);
    
    return (
        <div >
         <h2>
         Hora Actual:
         {Fecha.toLocaleTimeString()}
         </h2>
         <h3>{Persona.nombre} {Persona.apellidos}</h3>
         <h1>Edad: {Dato}</h1>
        </div>
    );
}

export default Ejemplo5;
