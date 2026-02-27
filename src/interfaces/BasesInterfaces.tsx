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

export interface UserListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: Support;
    _meta: Meta;
}

export interface Meta {
    powered_by: string;
    docs_url: string;
    upgrade_url: string;
    example_url: string;
    variant: string;
    message: string;
    cta: Cta;
    context: string;
}

export interface Cta {
    label: string;
    url: string;
}

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;
}
