import React, { useEffect, useState } from 'react'
import './App.css'
import { getIngredientes } from './services/ingredients'

function App() {
  const [ingredientes, setIngredientes] = useState([])

  useEffect(() => {
    let mounted = true;
    getIngredientes()
      .then(ingredientes => {
        if(mounted) {
          setIngredientes(ingredientes)
        }
      })
    return () => mounted = false;
  }, [])
 
  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {ingredientes.map(ingrediente => <li key={ingrediente.nombre}>{ingrediente.nombre}</li>)}
      </ul>
    </div>
  )
}

export default App;
