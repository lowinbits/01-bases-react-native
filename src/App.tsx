//import { BasicFunctions } from './typescript/BasicFunctions'
//import { ObjectLiterals } from './typescript/ObjectLiterals'

import { Counter } from "./typescript/components/Counter"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className='text-4xl mb-5'> React + TSX
        </h1>
        <Counter />
        {/* <BasicFunctions /> */}
        {/* <ObjectLiterals /> */}
        {/*<BasicTypes />*/}
      </div>
      <p className="read-the-docs"> Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
