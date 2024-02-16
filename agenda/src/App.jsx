import ListItem from "./ListItem"

const personas = [
  {
    nombre:'Itzamar',
    apellido:'Crespo',
    email:'isc20350261@gmail.com',
    telefono:'287 101 4725',
  },
  {
    nombre:'Virginia',
    apellido:'Morales',
    email:'vicky0807@gmail.com',
    telefono:'287 124 2578',
  },
  {
    nombre:'Martin',
    apellido:'Ramirez',
    email:'martinaudio@gmail.com',
    telefono:'287 578 1452',
  },
]
function App() {

  return (
    <div>
      <h1> Agenda </h1>
      <hr/>
      <ul>
        {personas.map((persona)=>(
          <ListItem
          key={persona.email}
          persona={persona}

          />
        ))}
      </ul>
      </div>
  )
}

export default App
