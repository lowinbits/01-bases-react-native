import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState<number>(10)

    const increaseBy = (value: number) => {
        //setCount(count + value)
        //setCount((current) => current + value)
        setCount(Math.max(count + value, 0)) // Evita que el contador sea negativo
    }

    return (
        <>
            <h3 className="text-2xl">Contador: <small className="font-bold">{count}</small></h3>

            <div>
                <button onClick={() => increaseBy(-1)} className="p-2 bg-red-300 rounded-xl w-10 mx-2 text-amber-50 hover:bg-red-600">-1</button>
                <button onClick={() => increaseBy(1)} className="p-2 bg-blue-300 rounded-xl w-10 mx-2 text-amber-50 hover:bg-blue-900">+1</button>
            </div>
        </>
    )
}
