import { useState } from "react";

export function Ejercicio5(){

    const [contenido, setContenido] = useState(true);

    /**
     * Funcion que nos cambia el contenido
     * a lo contrario de lo que esté almacenado
     * como booleano
     */
    function cambiar(){
        setContenido(!contenido);
    }

    return (

        <>
            <h2>Ejercicio 5</h2>
            {contenido && <p>Hola</p>}
            <button onClick={cambiar}>{contenido ? "Ocultar" : "Mostrar"}</button>
        </>

    )

}