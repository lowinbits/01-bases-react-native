import { type Status } from '../enums/BasesEnums';

export interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

export interface Address {
    country: string;
    city?: string;
}

export interface AuthState {
    status: Status;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;

    //Metodo
    loginWithEmailPassword: (email: string, password: string) => void;
    logout: () => void;
}

export interface User {
    name: string;
    email: string;
}