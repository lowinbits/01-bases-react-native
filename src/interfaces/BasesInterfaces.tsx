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