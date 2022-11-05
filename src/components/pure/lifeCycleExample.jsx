/**
 * Ejemplo de componente de tipo calse que dispone de los metodos 
 * de ciclo de vida
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('Construtor: cuando se intancia el componente');

    }
    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }
    componentDidMount(){
        console.log('DIDMOUNT: Cuando ya esta listo el componente, antes de pintarlo');
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: si va recibir nuevas props');
    }
    shouldComponentUpdate(nextProps, nextState){
      /**
       * controla si el componente debe o no actualizarse
       */
        //  return true or false
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: justo antes de actualizarse');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: justo despues de actualizarse');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount: justo antes de desaperecer');
    }
    return() {
        return (
            <div>
                
            </div>
        )
    }




}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
