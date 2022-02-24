import React, { useEffect, useState } from 'react'
import { getIngredientes } from './../services/ingredients'
function PizzaCreate() {
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
    <div className="Pizza Create">
       {ingredientes.map(ingrediente => <button key={ingrediente.id}>{ingrediente.nombre}</button>)}
    </div>
  )
}

export { PizzaCreate }