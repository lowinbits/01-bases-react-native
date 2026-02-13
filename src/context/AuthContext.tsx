import { createContext, useContext, type PropsWithChildren } from "react";
import type { AuthState } from "../interfaces/BasesInterfaces";

export const AuthContext = createContext({} as AuthState); //se coloca asi en vez de <AuthState> porque no esta inicializado
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider  = ({children}: PropsWithChildren) => {

    return (
        <AuthContext.Provider value={{
            hola: 'Mundo!!'
        }}>
            {children}
        </AuthContext.Provider>
    )

}