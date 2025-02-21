import { useState } from "react";

export function Ejercicio2(){

    const [frase, setFrase] = useState("");
    const frase1 = "Esta es la frase 1";
    const frase2 = "Esta es la frase 2";

    /**
     * Funcion que nos comprueba si la frase coincide
     * con las ya creadas
     */
    const cambio = () =>{
        if(frase==frase1){
            setFrase(frase2);
        }else{
            setFrase(frase1);
        }
    }

    return (

        <>
            <h2>Ejercicio 2</h2>
            <button onClick={cambio}>Cambia la frase</button>
            <p>{frase}</p>
        </>

    )

}