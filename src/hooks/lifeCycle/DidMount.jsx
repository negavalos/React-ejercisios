/**
 * Ejemplo de uso del metodo 
 * ciclo de viva del componente clase y hook de ciclo de vide 
 * en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('comportamiento antes de que componente sea añadido al DOM(renderice)');
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que componente sea añadido al DOM(renderice)');
        
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


