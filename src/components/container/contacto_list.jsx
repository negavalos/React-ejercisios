import React from 'react';
import { Contactos } from '../../models/contact.person';
import ContactComponent from '../pure/contact';




const ContactListComponent = () => {

    const defaultContact = new Contactos('Example', 'Default description', false); 

    const changeState = (id) => {
        console.log('TODO:Cambiar estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>
                Your Tasks: 
                </h1>
            </div>
            {/* Todo   aplicar un for/map para renderizar una lista*/}
            
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
};





export default ContactListComponent;