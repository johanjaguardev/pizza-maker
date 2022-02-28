Problema:
Prueba desarrollador front .
En esta prueba deseo evaluar varios aspectos en cuanto al desarrollo web con REACTjs , dada
solo una idea deseo evaluar , la creatividad y la forma de solucionar problemas, puedes usar
cualquier herramienta o librerías. Es importante que en el README del proyecto expliques que
librerías usaste y como hiciste para solucionar el el problema. Y la forma de ejecutarlo.
----
Soy el dueño de una pizzería, y necesito saber el tracking de las pizzas que estoy vendiendo
diariamente.
Cada pizza está compuesta por la masa con un costo base de 10.000 pesos y un precio
adicional por los ingredientes que se usen, debe haber mínimo 15 ingredientes para
seleccionar con un costo de 3.000 cada uno , excepto el pollo que tiene un costo de 5.000 y el
peperoni que tiene un costo 4.500.
Debe haber una sección en donde se cree la pizza, se puedan añadir y quitar ingredientes y me
calcule el precio de cada pizza. Adicional cada pizza debe tener un nombre.
Cuando tenga la pizza lista deseo, agregar información de a quien se le vendió la pizza, la
información que necesito que sea guardad es ( Nombre , teléfono, nombre de la pizza, el precio
y fecha ).
Como deseo ver el tracking de las pizzas debo tener un dashboard en donde pueda consultar
las pizzas que he vendido a lo largo del tiempo, y donde pueda ver el detalle de cada una de
las pizzas.

Solucion:
La primer tarea fue entender el problema como un gran problema que se puede dividir en pequeños fragmentos independientes pero relacionados, este analisis me dejo ver que la aplicacion requeria 3 componentes principales que determine llamar mixer (donde se realiza la seleccion de ingredientes y el nombrado de la pizza), formulario(donde se relaciona la pizza con algun cliente), y dashboard, donde veremos el resumen de pedidos hechos anteriormente.

Esto tambien me sugiere 2 tablas en la base de datos (simplificada lo mas posible para el ejercicio), llamadas pizzas, ingredientes.

En la informacion de cada pizza personalizada quedan relacionados tambien los datos de cada cliente, es una posible opotunidad de mejora futura

Para no lidiar con un sistema de backend robusto ni base de datos, decidi usar json server como aplicacion para controlar ambos aspectos.

Para la aplicacion en react use create-react-app.

El primer paso fue crear los 3 componentes con una funcionalidad basica, solo para realizar la division de archivos.

Luego de eso cree un objeto de prueba con una lista de ingredientes y procedi a realizar un servicio el cual leeria esta base de datos y el cual usarian los componentes que lo necesitaran desde react.

En este punto tambien cree otro servicio para leer los pedidos existentes e imprimirlos en el componente dashboard.

Con cada uno de los items genere un boton en el componente mixer, y le agregue la sintaxis para modificar un state agregando los componentes a un objeto pizza, que guardara tanto los ingredientes como los datos de la pizza y clientes de cara de cliente.

Despues de crear el objeto completo, modifique la logica para sumar y restar el precio segun las acciones de los botones de ingredientes.

Luego de esto, tenia que compartir este objeto por estado entre los componentes de form para poder enviarlo junto a los datos del cliente, para esto movi el state general (pizza) usando el hook de useContext.

Una vez que el state era general termine de adicionar los datos necesarios y posterior a esto, crear la logica en el servicio para crear cada pedido de pizza en la base de datos.

se hicieron posteriores modificaciones de css, y es el estado actual del aplicativo.

Changelog
1. install react by create-react-app
2. install json server
3. create components mixer, form and dashboard
4. create first data in db.json (ingredients and a sample of pizza)
5. read the db in react with a service
6. modify db to add index to each ingredient.
7. create buttons with listeners
8. create state and modify pizza price
9. read pizzas
10. convert state of pizza mixer to a global with react context to read in the form component
11. create service function to create a pizza in db
12. formating the app


NEXT STEPS

0. Publish first version
1. function to update or create the app
2. delete function in dashboard components
3. improve responsive behavior
4. give some visual helps
5. unit test
6. checking accesibility
7. give an icon to each ingredient and show it in the menu
8. create a pizza with layers with each ingredient

