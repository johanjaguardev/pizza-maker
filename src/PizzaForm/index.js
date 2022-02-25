import React from "react"
import { PizzaContext } from './../PizzaContext'
import './style.scss'

function PizzaForm() {
  const {  
    pizza,
    setPizza
  } = React.useContext(PizzaContext)
  return (
    <div className="fFormorm">
      <h2>Pizza </h2>
      <input name="nombre" placeholder="Nombre:" className="form__nombre"/>
      <input name="precio" placeholder="Precio:" className="form__precio" />
      <input name="telefono" placeholder="Telefono:" className="form__telefono"/>
      <input name="pizza" placeholder="Nombre de la Pizza: " disabled className="form__pizza" value={pizza.nombre}/>
      <input name="fecha" placeholder="Fecha: " className="form__fecha" />
      <button name="enviar">Enviar</button>
    </div>
  )
}

export { PizzaForm }