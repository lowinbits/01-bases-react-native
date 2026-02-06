import React from 'react'
import type { Person } from '../interfaces/BasesInterfaces'


export const ObjectLiterals = () => {

    const person: Person = {
        age: 30,
        firstName: 'Lowin',
        lastName: 'Dev',
        address: {
            country: 'Panama',
            city: 'Panama City'
        }
    }


    return (
        <>
            <h3>Object Literals</h3>

            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
