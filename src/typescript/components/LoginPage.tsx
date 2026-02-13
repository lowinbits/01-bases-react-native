import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

export const LoginPage = () => {

    const {hola} = useAuthContext();

  return (
    <div>
        <h3>
            Login
        </h3>
        <span>{hola}</span>
    </div>
  )
}
