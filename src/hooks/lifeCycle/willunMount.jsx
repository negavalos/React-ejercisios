/**
 * Ejemplo de uso metodo componenteWillunMount para componente clases 
 * ejemplo de uso del hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react'

export class willunMount extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparesca');
    }
  render() {
    return (
      <div>
        <h1>
            willunMount
        </h1>
      </div>
    )
  }
}

export const WillunMountHook = () => {
    useEffect(() => {
        // aqui no ponemos nada
        
        return () => {
            console.log('comportamiento antes de que el componente desaparesca');
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}


