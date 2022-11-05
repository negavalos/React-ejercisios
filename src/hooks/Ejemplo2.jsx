/*
*  EJEMPLO DE USO DE:
* --  useState()
* -- useRef()
* -- useEffect()
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    // VAMOS A CREAR DOS CONTADORES DISTINTOS 
    // CADA UNO ES UN ESTADO DIFERENTE
    const [contador1, setContador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // VAMOS A CREAR UNA REFERENCIA CON useRef() PARA ASOCIAR UNA VARIABLE
    // CON UN ELEMENTO DE DOM  DEL COMPONENTE (VISTA HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setcontador2(contador2 + 1);
    }

/** 
 * TRABAJAMOS CON useEffect()
*/
/**
 * ? caso 1: Ejecutar SIEMPRE UN snippet de codigo
 * cada vez que haya un cambio en el estado del componente 
 * se ejecuta aquello que este dentro de useEffect()
 */
    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //    console.log('Mostrando Referencia a elemento del DOM:');
    //    console.log(miRef);
    //    
    //})
    /**
     * ? CASO 2: Ejecutar solo cuando cambie contador1
     * cada vez que haya un cambio en el contador 1, se ejecuta el useState()
     * en caso que cambie contador 2, no abra ejecucion
     */
//    useEffect(() => {
//        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
//        console.log('Mostrando Referencia a elemento del DOM:');
//        console.log(miRef);
//    }, [contador1]);
    /**
     * ? CASO 2: Ejecutar solo cuando cambie contador1 o contador2
     * cada vez que haya un cambio en el contador 1, se ejecuta el useState()
     * cada vez que haya un cambio en el contador 2, se ejecuta el useState()
     */
     useEffect(() => {
              console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
              console.log('Mostrando Referencia a elemento del DOM:');
              console.log(miRef);
           }, [contador1, contador2]);
    
 
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR1: {contador1}</h2>    
            <h2>CONTADOR2: {contador2}</h2>  

            {/**Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>
                    Incrementar contador 1
                </button>
                <button onClick={incrementar2}>
                    Incrementar contador 2
                </button>
            </div>
        </div>
    );
}

export default Ejemplo2;
