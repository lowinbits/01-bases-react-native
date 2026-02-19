import React, { useState } from 'react'

export const useCounter = () => {

    const [count, setCount] = useState<number>(10)

    const increaseBy = (value: number) => {
        //setCount(count + value)
        //setCount((current) => current + value)
        setCount(Math.max(count + value, 0)) // Evita que el contador sea negativo
    }


    return {
        //Properties
        count,

        //Actions
        increaseBy
    }
}
