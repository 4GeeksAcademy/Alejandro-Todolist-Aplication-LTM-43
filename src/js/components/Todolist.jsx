import React, { useState } from "react";

const Todolist = () => {

    const [tareas, setTareas] = useState([""])
    
    const nuevaTarea = () => {
        
        setTareas(beforeTareas => [...beforeTareas, `tarea ${beforeTareas.length}`]);
    }

    const quitarTarea = () => {
        
        setTareas(eliminateTareas => eliminateTareas.slice(0, -1));
    }
    

    return (
        <>
            <ul className="list-group">
                {tareas.map( (item, index) => <li key={index} className="list-group-item">{item}</li>)}
                <button onClick={nuevaTarea}>nueva tarea</button>
                <button onClick= {quitarTarea}>quitar tarea</button>
            </ul>
        </>
    );
};
export default Todolist;