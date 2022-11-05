
import React, {useState} from 'react';

//Styled Valor de elmento predeterminado por el ejercicio
const Element = {
    width: "255px",
    height: "255px",
    background: "black"
}
//styled del valor mouse over
const r = Math.floor(Math.random()* 255);
const g = Math.floor(Math.random()* 255);
const b = Math.floor(Math.random()* 255);
const onMouseElemnt = {
    background: `rgb(${r}, ${g}, ${b})`,
    width: "255px",
    height: "255px",    
}
        
const EjercisioElement = () => {

    const [clicks, setClicks] = useState(1);
    const [StyledElement, setStyledElement] = useState(false);
    //funcion dentro del element
    const onMouse = () => {
        setStyledElement(true)
        console.log('Entraste');
        
    }
    //funcion fuera del element
    const offMouse = () => {
        setStyledElement(false)
        console.log('saliste');
    }
    //doble click
    const OfClick = () => {
        setClicks(clicks + 1);
        console.log(clicks);

        if (clicks === 2) {
            offMouse()
            setClicks(clicks => 1);
        }
        
    }
    return (
        <div>
            <div onMouseOut={offMouse}>
                <div id="MyElemnt" onClick={OfClick} onMouseOverCapture={onMouse} style={StyledElement ? onMouseElemnt : Element}>
                
                </div>
            </div>
            
        </div>
    );
}

export default EjercisioElement;