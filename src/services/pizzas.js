export const getPizzas = async () => {
  const response = await fetch('http://localhost:3333/pizzas')
  const data = await response.json()
  return data
}