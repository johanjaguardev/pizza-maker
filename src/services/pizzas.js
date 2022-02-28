export const getPizzas = async () => {
  const response = await fetch('http://localhost:3333/pizzas')
  const data = await response.json()
  return data
}

export const createPizza = async (data) => {
  const response = await fetch('http://localhost:3333/pizzas', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const res = await response.json()
}