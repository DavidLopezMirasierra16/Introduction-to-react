import { useState } from "react"
import { createRoot } from "react-dom/client";

export function Ejercicio7(){

    const [color, setColor] = useState("");

    /**
     * Funcion que cambia el fondo en funcion del parametro
     * que le pasamos
     * @param {*} colors 
     */
    function cambiar(colors){
        setColor(colors);
        document.querySelector("body").style.backgroundColor=color;
    }

    return (

        <>
            <h2>Ejercicio 7</h2>
            <button onClick={()=>cambiar("red")}>Rojo</button><br />
            <button onClick={()=>cambiar("green")}>Verde</button><br />
            <button onClick={()=>cambiar("blue")}>Azul</button><br />
        </>

    )

}