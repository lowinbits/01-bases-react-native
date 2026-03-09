import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

export const LoginPage = () => {

  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } = useAuthContext();

  if (isChecking) {
    return <h1>
      Verificando usuario...
    </h1>
  }

  return (
    <>
      {
        isAuthenticated ? (
          <>
            <h3>Bievenido</h3>
            <pre>
              {JSON.stringify(user, null, 2)}
            </pre>

            <button 
            onClick={() => logout()}
            className='bg-blue-500 p-2 text-white rounded-xl mt-2'>Logout</button>
          </>
        ) : (
          <>
            <h3>Ingresar a la aplicacion</h3>
            <button 
            onClick={() => loginWithEmailPassword('lowin@gmail.com', '12345')}
            className='bg-blue-500 p-2 text-white rounded-xl mt-2'>Login</button>
          </>
        )
      }
    </>
  )
}
