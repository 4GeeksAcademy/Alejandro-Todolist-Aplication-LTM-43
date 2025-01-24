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
        <p className="h1 text-center">todos</p>
            <div className="container">
                <input 
                                        type="text" 
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key == "Enter") {agregarTarea()}
                                        }}
                                        placeholder={"que vas a hacer?"}
                                    />
                    <ul className="list-group">
                        {tareas.length > 0 ? tareas.map((item, index) => (
                            <li 
                                key={index} 
                                className="list-group-item" 
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                            >
                
                                    <div style={{ position: 'relative' }}>
                                        {item}
                                        {hoveredIndex === index && 
                                            <span 
                                                style={{ 
                                                    position: 'absolute', 
                                                    top: '5px', 
                                                    right: '5px', 
                                                    cursor: 'pointer', 
                                                    color: 'red'
                                                }}
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
                    </ul>
                    <p className="container paper">Total de tareas: {tareas.length}</p>
            </div>
        </>
    );
};

export default Todolist;