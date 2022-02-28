import React from "react"
const PizzaContext = React.createContext()
const curr = new Date()
curr.setDate(curr.getDate() + 3)
const date = curr.toISOString().substr(0,10)

const PizzaProvider = (props) => {
  const [pizza, setPizza] = React.useState({
    nombre: '',
    ingredientes: [],
    precio: 10000,
    clientes: '',
    telefono: 0, 
    fecha: date
  })

  return(
    <PizzaContext.Provider value={{
      pizza,
      setPizza
    }}>
      {props.children}
    </PizzaContext.Provider>
  )
}
export { PizzaContext, PizzaProvider }