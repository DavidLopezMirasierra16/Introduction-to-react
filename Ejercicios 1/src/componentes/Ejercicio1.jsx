import { useState } from "react";

export function Ejercicio1(){

    const [contador, setContador] = useState(0);

    /**
     * Funcion que nos aumenta el contador en 1
     */
    function aumentar(){
        setContador(contador+1);
    }

    return (

        <>
            <h2>Ejercicio 1</h2>
            <button onClick={aumentar}>Click para aumentar el contador: {contador}</button>
        </>

    )

}