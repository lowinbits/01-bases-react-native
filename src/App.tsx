//import { BasicFunctions } from './typescript/BasicFunctions'
//import { ObjectLiterals } from './typescript/ObjectLiterals'

import { AuthProvider } from "./context/AuthContext"
import { UserPage } from "./typescript/components/UserPage"
//import { Counter } from "./typescript/components/Counter"
//import { LoginPage } from "./typescript/components/LoginPage"

function App() {

  return (
    <>
      <AuthProvider>
        <div className="flex flex-col justify-center items-center h-svh">
          <h1 className='text-4xl mb-5'> React + TSX
          </h1>
          {/* <Counter /> */}
          {/* <BasicFunctions /> */}
          {/* <ObjectLiterals /> */}
          {/*<BasicTypes />*/}
          {/* <LoginPage/> */}
          <UserPage />
        </div>
        <p className="read-the-docs"> Click on the Vite and React logos to learn more
        </p>
      </AuthProvider>
    </>
  )
}

export default App
