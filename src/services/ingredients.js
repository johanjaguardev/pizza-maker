export const getIngredientes = async () => {
  const response = await fetch('http://localhost:3333/ingredientes')
  const data = await response.json()
  return data
}