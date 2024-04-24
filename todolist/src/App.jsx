import List from "./List"
//arreglo donde cada entrada del objeto va a almacenar una tarea
const taskList = [
  {
    id: 1,
    task: 'Estudiar',
    limit: '13:00',
    description:"Estudiar para el proximo examen",
    location:"Casa",
    done:false
  },
  {
    id: 2,
    task: 'Practicas',
    limit: '15:00',
    description:"Prácticar mi logica en programación",
    location:"Escuela",
    done:false
  },
  {
    id: 3,
    task: 'Jugar',
    limit: '19:00',
    description:"Jugar a los videojuegos",
    location:"Arcade",
    done:false
  },
]
function App() {

  return (

      <div>
      <h1>To Do List</h1>
      <hr/>

      <List taskList = {taskList}/>

      <hr />

      <div className="text-end">
        <button className="btn btn-outline-primary">
          <i className="bi bi-plus-lg"></i>
          Add
        </button>
      </div>

      </div>

  )
}

export default App
