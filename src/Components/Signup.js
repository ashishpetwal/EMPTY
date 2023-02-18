import React, { useState } from 'react'

const Signup = () => {
    const [cred, setCred] = useState({ username: "", email: "", password: "" })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const signupForm = (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your Username' value={cred.username} name='username' onChange={handleChange} />
            <input type="email" placeholder='Enter your Email' value={cred.email} name='email' onChange={handleChange} />
            <input type="password" placeholder='Enter Password' value={cred.password} name='password' onChange={handleChange} />
            <button type='submit'>Signup</button>
        </form>
    );

    return (
        <div className='signup'>
            {signupForm}
        </div>
    )
}

export default Signup