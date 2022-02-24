import React, { useEffect, useState } from 'react'
import './style.scss'
import { getIngredientes } from '../services/ingredients'
function PizzaMixer() {
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
 
  return(
    <div className="mixer">
       {ingredientes.map(ingrediente => 
        <button key={ingrediente.id} className="mixer__button">
          {ingrediente.nombre}
        </button>)}
    </div>
  )
}

export { PizzaMixer }