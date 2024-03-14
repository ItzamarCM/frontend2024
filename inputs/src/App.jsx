import { useState } from "react"

function App() {

  const [username, setUsername] = useState("")

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (e) => {
    console.log("Username:", username)
    e.preventDefault()
  }

  return (

    <div>
      <h1>Inputs</h1>
      <hr/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          onChange={(event) => handleUsernameChange (event)} 
          id="username" 
          type="text"
          value={username}>
          </input>
        </div>
        <div>
        <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
