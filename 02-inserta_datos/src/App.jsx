const persona = {
  nombre: "Itzamar Crespo Morales",
  edad: 21,
  profesion: "Estudiante",
  pasatiempo: [
    "Dibujar",
    "Videojuegos", 
    "Leer", 
    "Dormir", 
    "Correr",],
    fecha_nac: "09 de Julio de 2002",
    lugar_nac: "San Juan Bautista Tuxtepec Oaxaca",
    signo_zodi: "Cancer",
}

function App() {

  return (
    <div>
      <h1>Inserta Datos</h1>
      <hr /> 
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Pasatiempo:
          <ul>
            <li>{persona.pasatiempo[0]}</li>
            <li>{persona.pasatiempo[1]}</li>
            <li>{persona.pasatiempo[2]}</li>
            <li>{persona.pasatiempo[3]}</li>
            <li>{persona.pasatiempo[4]}</li>
          </ul>
        <li>Fecha de Nacimiento: {persona.fecha_nac}</li>
        <li>Lugar de Nacimiento: {persona.lugar_nac}</li>
        <li>Signo Zodiacal: {persona.signo_zodi}</li>
          </li>
      </ul>
      </div>
  )
}

export default App
