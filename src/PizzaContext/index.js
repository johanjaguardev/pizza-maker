import React, {useState, useEffect} from "react"
import { getIngredientes } from './../services/ingredients'
const PizzaContext = React.createContext()

const PizzaProvider = (props) => {
  const [listaIngredientes, setListaIngredientes] = useState([])
  const [pizza, setPizza] = useState({
    nombre: '',
    ingredientes: [],
    precio: 10000
  })




  return(
    <PizzaContext.Provider value={{
      listaIngredientes,
      setListaIngredientes,
      pizza,
      setPizza,
      getIngredientes
    }}>
      {props.children}
    </PizzaContext.Provider>
  )
}
export { PizzaContext, PizzaProvider }