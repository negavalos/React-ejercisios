/*
 *Ejemplo de uso del hook useState 
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a través de un hook y, además. poder modificarlo
 */


 import React, { useState } from 'react';
 
 const Ejemplo = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre: 'Nelson',
        email: 'avalosnelson9919@gmail.com'
    }
    /* 
    *Queremos que el VALORINICIAL y PERSONINICIAL sean
    *parte del estado del componente para asi poder gestionar su cambio
    * y que este se vea reflejado en la vista del componente.
    * 
    * const {nombreVariable, funcion para cambio} = useState{valorInicial}
    */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    /* 
    *Funcion para actualizar el estado privado que contiene el contador
    */
    function IncrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }
    /**
     * funciòn para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'

            }
        )
    }
    

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
                <h2>
                    CONTADOR: {  contador  }
                </h2>
                <h2>
                    DATOS DE LA PERSONA: 
                    <h3>NOMBRE: { persona.nombre } </h3>
                    <h3>EMAIL: { persona.email }</h3>
                </h2>
                {/* Bloque de botones para actualizar el estado del componente */}
                <button onClick={ IncrementarContador }>IncrementarContador</button>
                <button onClick={ actualizarPersona }>Actualizar Persona</button>

            
        </div>
    );
 }
 
 export default Ejemplo;
 