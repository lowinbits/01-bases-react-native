import React from 'react'
import { UserRow } from './UserRow'
import { useUsers } from '../hooks/useUsers';
//https://reqres.in/api/users?page=2
export const UserPage = () => {


    const { users } = useUsers();

    console.log(users)
    return (
        <>
            <h3>Usuarios:</h3>

            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr >
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow />
                </tbody>
            </table>

            <div className="flex justify-between w-[500px] mt-2">
                <button className="bg-blue-500 p-2 text-white rounded-[5px]">Anteriores</button>
                <button className="bg-blue-500 p-2 text-white rounded-[5px]">Siguientes</button>
            </div>
        </>
    )
}
