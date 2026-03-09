import React from 'react'
import { UserRow } from './UserRow'
import { useUsers } from '../hooks/useUsers';

export const UserPage = () => {


    const { users, nextPage, prevPage } = useUsers();

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
                    {users.map(user => (
                        <UserRow user={user} />
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between w-[500px] mt-2">
                <button
                    onClick={prevPage}
                    className="bg-blue-500 p-2 text-white rounded-[5px]">Anteriores</button>
                <button
                    onClick={nextPage}
                    className="bg-blue-500 p-2 text-white rounded-[5px]">Siguientes</button>
            </div>
        </>
    )
}
