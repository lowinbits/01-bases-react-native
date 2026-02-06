import React from 'react'

export const BasicTypes = () => {

    const name: string = 'Lowin';
    const age: number = 30;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'React Native', 'Angular', 'Ionic'];

    return (
        <>
            <h3>Tipos basicos</h3>
            {name} - {age} - {isActive ? 'Tamo Act' : 'NoAct'}

            <p>{powers.join(', ')}</p>
        </>
    )
}
