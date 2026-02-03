import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'

function App() {
  let usuario = "Victor";
  let token = "SAJFY67";
  let menú = "Inicio";

  const [user, setUser] = useState(usuario);

  return (
    <>
      <div className='container-fluid'>

        <TokenContext.Provider value={token}>

          <div className='row'>
            <div className='col-12 fondoHeader'>
              <Cabecera usuario={user} token={token} menú={menú}></Cabecera>
            </div>
          </div>

          <UserContext.Provider value={user}>

            <div className='row'>
              <div className='col-3 fondoRoles'>
                <Roles usuario={usuario} token={token} menú={menú}></Roles>
              </div>
              <div className='col-9 fondoDashboard'>
                <Dashboard usuario={usuario} token={token} menú={menú}></Dashboard>
              </div>
            </div>

          </UserContext.Provider>

        </TokenContext.Provider>

      </div>
>>>>>>> 52f0a54 (DWEC ej)
    </>
  )
}

export default App
