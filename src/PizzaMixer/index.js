import React, { useEffect, useState } from 'react'
import { PizzaContext } from './../PizzaContext'
import './style.scss'
function PizzaMixer() {

  const {  
    listaIngredientes,
    setListaIngredientes,
    pizza,
    setPizza,
    getIngredientes
  } = React.useContext(PizzaContext)
  const onClickButton = (nombre, precio, e) => {
    console.log(`${nombre}: $${precio}`, e.target)
    console.log(pizza)

    if( pizza.ingredientes.indexOf(nombre) === -1 ) {
      setPizza({
        nombre: pizza.nombre,
        precio: pizza.precio + precio,
        ingredientes: [...pizza.ingredientes, nombre]
      })
      e.target.disabled = true
    } else {
      pizza.ingredientes = pizza.ingredientes.filter((i)=> i!== nombre)
      pizza.precio = pizza.precio - precio
      e.target.disabled = false
    }
  }
  const onChangeNameInput = (e) => {
    setPizza({
      nombre: e.target.value,
      ingredientes: pizza.ingredientes,
      precio: pizza.precio
    })
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
      <h2>Mixer</h2>
      <input 
        className="mixer__name"
        placeholder='Nombre de la pizza:'
        name="name"
        onChange={(e)=> onChangeNameInput(e)}
      ></input>
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
        <button className='mixer__create-btn' disabled={pizza.ingredientes.length < 15 || pizza.nombre === ""}>Crear Pizza</button>
      </div>
    </div>
 
  )
}

export { PizzaMixer }