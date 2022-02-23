export function getIngredientes() {
  return fetch('http://localhost:3333/ingredientes')
    .then(data => data.json())
}