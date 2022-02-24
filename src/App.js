import React from 'react'
import { PizzaCreate } from './PizzaCreate'
import { PizzaDashboard } from './PizzaDashboard'
import { PizzaSend } from './PizzaSend'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <h1>My Grocery List</h1>
      <PizzaCreate></PizzaCreate>
      <PizzaDashboard></PizzaDashboard>
      <PizzaSend></PizzaSend>
    </React.Fragment>
  )
}

export default App;
