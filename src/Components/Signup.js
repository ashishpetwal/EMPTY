import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [cred, setCred] = useState({ name: "", email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/signup";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.secToken)
            navigate("/");
        }
        else {
            navigate('/signup');
        }
    }

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const signupForm = (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your Username' value={cred.name} name='name' onChange={handleChange} required />
            <input type="email" placeholder='Enter your Email' value={cred.email} name='email' onChange={handleChange} required />
            <input type="password" placeholder='Enter Password' value={cred.password} name='password' onChange={handleChange} required />
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