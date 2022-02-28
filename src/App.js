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
          <PizzaMixer></PizzaMixer>
          <PizzaForm></PizzaForm>
        </div>
        <div className='pizza__right'>

          <PizzaDashboard></PizzaDashboard>
        </div>
      </div>
    </PizzaProvider>
  )
}

export default App;
