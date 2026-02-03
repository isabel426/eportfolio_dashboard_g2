import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
    </>
  )
}

export default App
