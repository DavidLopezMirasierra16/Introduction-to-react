import { useState } from "react";

export function Ejercicio4(){

    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    /**
     * Funcion que nos guarda en tarea lo que
     * escribimos en el input
     * @param {*} e 
     */
    const guardarTarea = (e) =>{
        setTarea(e.target.value);
    }

    /**
     * Funcion que guarda en el array las tareas
     */
    const guardarTareas = () =>{
        if(tarea!=""){
            setTareas([...tareas, tarea]);
            setTarea("");
        }
    }

    return (

        <>
            <h2>Ejercicio 4</h2>
            <input type="text" value={tarea} onChange={guardarTarea} placeholder="Ingresa la tarea"/>
            <button onClick={guardarTareas}>Ingresar tarea</button>

            <ul>
                {tareas.map((t, index)=>(
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </>

    )

}