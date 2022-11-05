import React from 'react';
import { Clock } from '../../models/componente.funcion';
import ComponenteFuncional from '../pure/componenteFuncional';



const CocktList = () => {
    const fecha = new Date();
    const defaultCock = new Clock(fecha, 0, 'martin','San José' );

    return (
        <div>
            <ComponenteFuncional clock={defaultCock}></ComponenteFuncional>
        </div>

    );
};




export default CocktList;