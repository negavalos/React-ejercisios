import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
    const [name, setName] = useState('Nelson');

    function showMessage(text) {
        alert(`Message received: ${text}`)
    }
    function updateName(newName) {
        setName(newName)
    }
    

    return (
        <div style={{background: 'green', padding: '15px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
