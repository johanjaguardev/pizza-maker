import React from 'react'
import { PizzaProvider } from './PizzaContext'
import { PizzaMixer } from './PizzaMixer'
import { PizzaDashboard } from './PizzaDashboard'
import { PizzaForm } from './PizzaForm'
import './App.scss'

function App() {
  return (
    <PizzaProvider>
      <div className='pizza'>
        <div className="pizza__left">
          <h1>Pizza Maker</h1>
          <PizzaMixer></PizzaMixer>
        </div>
        <div className='pizza_right'>
          <PizzaForm></PizzaForm>
          <PizzaDashboard></PizzaDashboard>
        </div>
      </div>
    </PizzaProvider>
  )
}

export default App;
