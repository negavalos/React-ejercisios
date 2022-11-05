import React,{ useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// importar hojas de estilos
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';



const TaskListComponent = () => {
    const defaultTask = new Task('example', 'default descripcion', true, LEVELS.NORMAL);
    const defaultTask1 = new Task('example1', 'descripcion1', false, LEVELS.URGENT);
    const defaultTask2 = new Task('example2', 'descripcion2', false, LEVELS.BLOCKING);

    // Estado del componente
   
    const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2]);
    const [loading  , setloading] = useState(true);

    //control del ciclo de vida del componente

    useEffect(() => {
        console.log('Task state has been modified');
        setloading(false)
        return () => {
            console.log('TaskList component is going to ');
        };
    }, [tasks]);

    
    function compleTask(task) {
        console.log('Complete this task: ', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask[index].completed = !temTask[index].completed;
        // We update the state of the list of tasks component and it will update the 
        // iteration of the tasks in order to show the task updated
        setTasks(temTask);
    }
    function deleteTask(task) {
        console.log('Delete this task: ', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask.splice(index,1);
        setTasks(temTask)
    }
    function addTask(task) {
        console.log('Delete this task: ', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask.push(task);
        setTasks(temTask);
    }
    
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/** card header {title} */}
                    <div className='card-header p3'>
                        <h5>
                        Your Tasks: 
                        </h5>
                    </div>
                    {/**card boty {content} */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px' } }>
                        <table >
                            <thead>
                                <tr>
                                    <th scope='col'>
                                    tittle                     
                                    </th>
                                    <th scope='col'>description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) =>{
                                    return(
                                        <TaskComponent key={index} task={task} complete={compleTask} remove={deleteTask}></TaskComponent>
                                    )
                                   }
                                  )
                                }

                                {/**Todo iterar sobre una lista de tareas */}
                               
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <TaskForm add={addTask}></TaskForm>
            </div>
            {/* Todo   aplicar un for/map para renderizar una lista*/}
            {/*<TaskComponent task={defaultTask}></TaskComponent>*/}
        </div>
    );
};





export default TaskListComponent;
