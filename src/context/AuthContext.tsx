import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import type { AuthState, User } from "../interfaces/BasesInterfaces";
import { AuthStatus, type Status } from "../enums/BasesEnums";

export const AuthContext = createContext({} as AuthState); //se coloca asi en vez de <AuthState> porque no esta inicializado
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {


    const [status, setStatus] = useState<Status>(AuthStatus.CHECKING);

    const [user, setUser] = useState<User>()

    useEffect(() => {

        setTimeout(() => {
            setStatus(AuthStatus.UNAUTHENTICATED);
        }, 1500);

    }, [])

    const loginWithEmailPassword = (email : string, password : string) => {
        console.log(password)
        setUser({
            name: 'Lowin',
            email: email
        });
        setStatus(AuthStatus.AUTHENTICATED);
    }


    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.UNAUTHENTICATED);
    }


    return (
        <AuthContext.Provider value={{
            user: user,
            status: status,
            isChecking: status === AuthStatus.CHECKING,
            isAuthenticated: status === AuthStatus.AUTHENTICATED,
       
            loginWithEmailPassword,
            logout,
       }}>
            {children}
        </AuthContext.Provider>
    )

}