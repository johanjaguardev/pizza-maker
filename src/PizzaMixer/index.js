import React, { useEffect, useState } from 'react'
import { getIngredientes } from './../services/ingredients'
import { PizzaContext } from './../PizzaContext'
import './style.scss'
function PizzaMixer() {
  const {  
    pizza,
    setPizza
  } = React.useContext(PizzaContext)
  const [listaIngredientes, setListaIngredientes] = useState([])
  const onClickButton = (nombre, precio, e) => {
    console.log(`${nombre}: $${precio}`, e.target)
    console.log(pizza)

    if( pizza.ingredientes.indexOf(nombre) === -1 ) {
      setPizza({
        nombre: pizza.nombre,
        precio: pizza.precio + precio,
        ingredientes: [...pizza.ingredientes, nombre],
        cliente: pizza.cliente,
        telefono: pizza.telefono,
        fecha: pizza.fecha
      })
      e.target.classList.add('choosen')
    } else {
      setPizza({
        nombre: pizza.nombre,
        precio: pizza.precio - precio,
        ingredientes: pizza.ingredientes.filter((i)=> i!== nombre),
        cliente: pizza.cliente,
        telefono: pizza.telefono,
        fecha: pizza.fecha
      }) 
      e.target.classList.remove('choosen')
    }
  }

  useEffect(() => {
    let mounted = true;
    getIngredientes()
      .then(listaIngredientes => {
        if(mounted) {
          setListaIngredientes(listaIngredientes)
        }
      })
    return () => mounted = false;
  }, [])
  return(
    <div className="mixer">
      <input 
        className="mixer__name"
        placeholder='Nombre de la pizza:'
        name="name"
        onChange={(e)=>{
          setPizza({
            nombre: e.target.value,
            precio: pizza.precio,
            ingredientes: pizza.ingredientes,
            cliente: pizza.cliente,
            telefono: pizza.telefono,
            fecha: pizza.fecha
          })
      }}></input>
      <div className="mixer__buttons">
        {listaIngredientes.map(ingrediente => 
        <button
          key={ingrediente.id}
          className="mixer__button"
          onClick={(e) => onClickButton(ingrediente.nombre, ingrediente.precio, e)}
        >
            {ingrediente.nombre}
        </button>)}
        <p className="mixer__price">Precio: ${pizza.precio}</p>
        <p className={`mixer__count 
          ${pizza.ingredientes.length >= 15 && pizza.nombre !== "" && 'green'} 
          ${(pizza.ingredientes.length < 15 || pizza.nombre === "" ) &&'red'}`}>
            Tu pizza lleva {pizza.ingredientes.length} ingredientes</p>
      </div>
    </div>
 
  )
}

export { PizzaMixer }