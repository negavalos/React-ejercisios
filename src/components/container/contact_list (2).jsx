import React from 'react';
import { StatusContact } from '../../models/contact.class';
import ContactoComponent from '../pure/Contacto';


const ContactList = () => {
    const defaultContact = new StatusContact('Nelson', 'Avalos', 'avalosnelson9919@gmail.com', false);

    return (
        <div>
            <div>
               <h1>
                Contacto:
               </h1>
            </div>
        <ContactoComponent statusContact={defaultContact}></ContactoComponent>
        </div>
    );
};




export default ContactList;
