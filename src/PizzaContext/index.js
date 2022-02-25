import React from "react"
const PizzaContext = React.createContext()
const PizzaProvider = (props) => {
  const [pizza, setPizza] = React.useState({
    nombre: '',
    ingredientes: [],
    precio: 10000
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