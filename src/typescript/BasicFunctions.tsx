/**
 * Funciones en TSX usando arrow functions:  
 * se le asigna un tipo a cada parametro y al resultado de la función.
 * @param a 
 * @param b 
 * @returns 
 */
const addTwonNumbers = (a: number, b: number): string => {
    return `${a + b}`
}
export const BasicFunctions = () => {

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar 2 y 8:  {addTwonNumbers(2, 8)}</span>

        </>
    )
}
