import React from "react"
import { PizzaContext } from './../PizzaContext'
import { createPizza } from './../services/pizzas'
import './style.scss'

function PizzaForm() {
  const savePizza = () => {
    createPizza(pizza)    
  }
  const {  
    pizza, setPizza
  } = React.useContext(PizzaContext)
  return (
    <form className="form">
      <fieldset>
        <label htmlFor="cliente">Cliente: </label>
        <input type="text" name="cliente" className="form__cliente"
        value={pizza.cliente} onChange={(e)=>{
          setPizza({
            nombre: pizza.nombre,
            precio: pizza.precio,
            ingredientes: pizza.ingredientes,
            cliente: e.target.value,
            telefono: pizza.telefono,
            fecha: pizza.fecha
          })
        }}/>
      </fieldset>
      <fieldset>
        <label htmlFor="precio">Precio: </label>
        <input type="text" name="precio" disabled className="form__precio"
        value={`$${pizza.precio}`} />
      </fieldset>
      <fieldset>
        <label htmlFor="telefono">Teléfono: </label>
        <input type="number" name="telefono" className="form__telefono"
        value={pizza.telefono} onChange={(e)=>{
          setPizza({
            nombre: pizza.nombre,
            precio: pizza.precio,
            ingredientes: pizza.ingredientes,
            cliente: pizza.cliente,
            telefono: e.target.value,
            fecha: pizza.fecha
          })
        }}/>
      </fieldset>
      <fieldset>
        <label htmlFor="nombre">Nombre Pizza: </label>
        <input type="text" name="nombre" disabled className="form__pizza" value={pizza.nombre}/>
      </fieldset>
      <fieldset>
        <label htmlFor="fecha">Fecha: </label>
        <input type="date" name="fecha" className="form__fecha" value={pizza.fecha}
          onChange={(e)=>{
          setPizza({
            nombre: pizza.nombre,
            precio: pizza.precio,
            ingredientes: pizza.ingredientes,
            cliente: pizza.cliente,
            telefono: pizza.telefono,
            fecha: e.target.value
          })
        }}/>
      </fieldset>
      <fieldset>
        <button 
          name="enviar" 
          disabled = {
            pizza.ingredientes.length < 15 ||
            pizza.nombre === "" ||
            pizza.cliente === "" ||
            pizza.telefono === 0
          }
          onClick={savePizza}
          title="Please choose 15 ingredientes, an name for the pizza and fill out all the fields."
          >
          Guardar Pizza
        </button>
      </fieldset>
    </form>
  )
}

export { PizzaForm }