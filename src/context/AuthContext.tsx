import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import type { AuthState } from "../interfaces/BasesInterfaces";
import { AuthStatus, type Status } from "../enums/BasesEnums";

export const AuthContext = createContext({} as AuthState); //se coloca asi en vez de <AuthState> porque no esta inicializado
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {


    const [status, setStatus] = useState<Status>(AuthStatus.CHECKING);

    useEffect(() => {

        setTimeout(() => {
            setStatus(AuthStatus.UNAUTHENTICATED);
        }, 1500);

    }, [])


    return (
        <AuthContext.Provider value={{
            status: status,
            isChecking: status === AuthStatus.CHECKING
        }}>
            {children}
        </AuthContext.Provider>
    )

}