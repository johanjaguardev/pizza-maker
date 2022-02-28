import React, { useEffect, useState } from 'react'
import './style.scss'
import { getPizzas } from '../services/pizzas'

function PizzaDashboard() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    let mounted = true;
    getPizzas()
      .then(pizzas => {
        if(mounted) {
          setPizzas(pizzas)
        }
      })
    return () => mounted = false;
  }, [])
  return(<div className="dashboard">
    <h2>Pizza Dashboard</h2>
    <ol className="dashboard__list">
      {pizzas.map(pizza => 
      <li key={pizza.id} className="pizza__list-item">
          Nombre de Pizza: {pizza.nombre}<br/>
          Ingredientes: {pizza.ingredientes.map(i=> `${i}, `)}<br/>
          Precio: ${pizza.precio}<br/>
          Cliente: {pizza.cliente}<br/>
          Teléfono: {pizza.telefono}<br/>
          Fecha: {pizza.fecha}<br/>
      </li>)}
    </ol>  
  </div>)
}

export { PizzaDashboard }