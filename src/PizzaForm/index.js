import React from "react"
import { PizzaContext } from './../PizzaContext'
import './style.scss'

function PizzaForm() {
  const curr = new Date()
  curr.setDate(curr.getDate() + 3)
  const date = curr.toISOString().substr(0,10);
  const [pedido, setPedido] = React.useState({
    cliente: '',
    telefono: 0,
    fecha: date
  })

  const {  
    pizza
  } = React.useContext(PizzaContext)
  return (
    <form className="form">
      <fieldset>
        <label htmlFor="cliente">Cliente: </label>
        <input type="text" name="cliente" className="form__cliente"
        value={pedido.cliente} onChange={(e)=>{
          setPedido({
            cliente: e.target.value,
            fecha: pedido.fecha,
            telefono: pedido.telefono
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
        value={pedido.telefono} onChange={(e)=>{
          setPedido({
            cliente: pedido.cliente,
            fecha: pedido.fecha,
            telefono: e.target.value
          })
        }}/>
      </fieldset>
      <fieldset>
        <label htmlFor="nombre">Nombre Pizza: </label>
        <input type="text" name="nombre" disabled className="form__pizza" value={pizza.nombre}/>
      </fieldset>
      <fieldset>
        <label htmlFor="fecha">Fecha: </label>
        <input type="date" name="fecha" className="form__fecha" value={pedido.fecha}
          onChange={(e)=>{
          setPedido({
            cliente: pedido.cliente,
            fecha: e.target.value,
            telefono: pedido.telefono
          })
        }}/>
      </fieldset>
      <fieldset>
        <button 
          name="enviar" 
          disabled = {
            pizza.ingredientes.length < 15 ||
            pizza.nombre === "" ||
            pedido.cliente === "" ||
            pedido.telefono === 0
          }
          title="Please choose 15 ingredientes, an name for the pizza and fill out all the fields."
          >
          Guardar Pizza
        </button>
      </fieldset>
    </form>
  )
}

export { PizzaForm }