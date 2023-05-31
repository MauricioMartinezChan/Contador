import React, { useState } from 'react'

function App() {
  const [Contador, setCount]=useState(0)
  return (
    
  <div className="container my-5"> 
  <div className="card text-center my-5c">
    <div className="card-body">
      <h1>Contador</h1>
      <div className="my-5">
        <h2 className="my-5">{Contador}</h2>
        <div className="botones">
        <button 
        className="botoncontadormenos" 
        onClick={() => setCount(Contador - 1)}
        >Decrementar
        </button>
        <button 
        className="botoncontadorcero" 
        onClick={() => setCount(0)}
        >Reiniciar
        </button>
        <button 
        className="botoncontadormas" 
        onClick={() => setCount(Contador + 1)}
        >Incrementar
        </button>
        </div>
      </div>
    </div>
  </div>  
  <h3>Mauricio Joaquin Martinez Chan</h3>
  </div> 
  )
}
  

export default App
