import React from "react"
import './style.scss'

function PizzaForm() {
  return (
    <div className="form">
      <h2>Pizza Form</h2>
      <input name="nombre" placeholder="Nombre:" className="form__nombre"/>
      <input name="precio" placeholder="Precio:" className="form__precio" />
      <input name="telefono" placeholder="Telefono:" className="form__telefono"/>
      <input name="pizza" placeholder="Nombre de la Pizza: " disabled className="form__pizza"/>
      <input name="fecha" placeholder="Fecha: " className="form__fecha" />
    </div>
  )
}

export { PizzaForm }