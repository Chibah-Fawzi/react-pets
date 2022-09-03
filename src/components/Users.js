import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {

    const [users, setUsers] = useState([]);

    function getUsers() {
        axios.get("https://swapi.dev/api/people/")
            .then(res => {
                console.log(res.data.results.slice(0, 10))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => {
                    return <li>{user.name} - {user.address.city}</li>
                })}
            </ul>

        </div>
    )
}
