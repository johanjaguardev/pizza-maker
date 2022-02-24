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
    <ul className="dashboard__list">
      {pizzas.map(pizza => 
      <li key={pizza.id} className="pizza__list-item">
          {pizza.nombre} - {pizza.ingredientes} -  {pizza.precio}
      </li>)}
    </ul>  
  </div>)
}

export { PizzaDashboard }