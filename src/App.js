import React from 'react'
import { PizzaMixer } from './PizzaMixer'
import { PizzaDashboard } from './PizzaDashboard'
import { PizzaForm } from './PizzaForm'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <h1>My Grocery List</h1>
      <PizzaMixer></PizzaMixer>
      <PizzaDashboard></PizzaDashboard>
      <PizzaForm></PizzaForm>
    </React.Fragment>
  )
}

export default App;
