import React, { useState } from "react";

const Todolist = () => {

    const [tareas, setTareas] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const agregarTarea = () => {
        if (inputValue.trim() !== '') {
            setTareas([...tareas, inputValue]);
            setInputValue("")
        }
    };
    
    const eliminarTarea = (index) => {
        setTareas(prevTareas => prevTareas.filter((_, i) => i !== index));
    };

    return (
        <>
        <p className="h1 text-center">Tareas pendientes:</p>
            <div className="container">
                <input 
                                        type="text" 
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key == "Enter") {agregarTarea()}
                                        }}
                                        placeholder={"¿Que haras a hoy?"}
                                    />
                    <div className="list-group">
                        {tareas.length > 0 ? tareas.map((item, index) => (
                            <li 
                                key={index} 
                                className="list-group-item" 
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                            >
                
                                    <div className="relative-container">
                                        {item}
                                        {hoveredIndex === index && 
                                            <span 
                                                className="absolute-close"
                                                onClick={() => eliminarTarea(index)}
                                            >
                                                X
                                            </span>
                                        }
                                    </div>
                                
                            </li>
                        )):
                        <li 
                        className="list-group-item">No hay tareas</li>
                        }
                    </div>
                    <p className="cotainer paper">Total de tareas: {tareas.length}</p>
            </div>
        </>
    );
};

export default Todolist;