import React from 'react'

export default function Login(props) {

    const { users, setIsAuthenticated } = props

    function handleInput(e) {
        e.preventDefault()
        var email = e.target.email.value
        var password = e.target.password.value

        const found = users.find(e => e.email === email && e.password == password)

        if (found) {
            setIsAuthenticated(true)
        } else {
            alert('Incorrect credentials')
        }

    }


    return (
        <form onSubmit={handleInput}>
            <label>Email</label>
            <input name='email' type="text" />

            <label>Password</label>
            <input name='password' type="password" />

            <button type='submit'>login</button>
        </form>
    )
}
