import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componente actualizado');

        document.title = `${new Date()}`
        const intervalD = setInterval(() => {
            console.log('actualizaxion del componente');
        })
        
        return () => {
            console.log('Componente va a desaparecer');
            document.title = "el tiempo se ha detenido";
            clearInterval(intervalD);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
