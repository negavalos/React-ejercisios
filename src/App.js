import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';

import Ejemplo from './hooks/Ejemplo';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

import Clock from './components/pure/text';
import Ejemplo5 from './hooks/ejemplo5';
import Father from './components/container/father';

import ContactList from './components/container/contact_list';
import OptionalRender from './components/pure/OptionalRender';
import EjercisioElement from './components/pure/EjerciosioElement';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        {/* Componenes propio Greeting */}
        {/*<Greeting name="Nelson"></Greeting>*/}
        {/*componente de ejemplo de funcional*/}
        {/*<GreetingF name="Nelson"></GreetingF>*/}
        {/*Componente de listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/* Tarea de contacto */}
       {/*<ContactList></ContactList>*/}
        {/* Ejemplode uso de HOOKS */}
        {/*<Ejemplo></Ejemplo>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
       {/* <MiComponenteConContexto></MiComponenteConContexto>*/}
       {/** <Ejemplo4 nombre="Nelson">
       
        *todo lo que hay aqui, es tratado como props.children
       
        <h3>
          Contenido del props.children
        </h3>
       </Ejemplo4>
       */}
       {/*<GreetingStyled name='Nelson'></GreetingStyled>*/}
       {/*<Clock></Clock>*/}
       {/*<Ejemplo5></Ejemplo5>*/}
      {/*</header>*/}
      {/** Gestion de eventos*/}
      {/*<Father></Father>*/}
      {/**Ejemplo de renderizado condicional */}
       
      {/**Proyecto final */}
      {/*<TaskListComponent></TaskListComponent>*/}
      {/* <OptionalRender></OptionalRender> */}
      <EjercisioElement></EjercisioElement>
      
      


    </div>
  );
}

export default App;
