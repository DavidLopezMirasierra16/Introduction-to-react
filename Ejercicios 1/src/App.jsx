import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ejercicio1 } from './componentes/Ejercicio1'
import { Ejercicio2 } from './componentes/Ejercicio2'
import { Ejercicio3 } from './componentes/Ejercicio3'
import { Ejercicio4 } from './componentes/Ejercicio4'
import { Ejercicio5 } from './componentes/Ejercicio5'
import { Ejercicio7 } from './componentes/Ejercicio7'

function App() {
  return (
    <>
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
      <Ejercicio7/>
    </>
  )
}

export default App
