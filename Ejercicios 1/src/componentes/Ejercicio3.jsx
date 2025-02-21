import { useState } from "react"

export function Ejercicio3(){

    const [mensaje, setMensaje] = useState("");

    /**
     * Funcion a la que le pasamos un evento
     * y guardamos los datos que escribimos en
     * mensaje
     * @param {*} e 
     */
    const datos = (e) =>{
        setMensaje(e.target.value);
    }

    return (

        <>
            <h2>Ejercicio 3</h2>
            <input type="text" value={mensaje} onChange={datos} placeholder="Escribe lo que quieras aqui"/>
            <p>{mensaje}</p>
        </>

    )

}