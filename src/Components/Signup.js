import React, {useState} from 'react'

const Signup = () => {
    const [cred, setCred] = useState({username:"",email:"",password:""})

    const handleChange = (e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <input type="text" placeholder='Enter your Username' value={cred.username} name='username' onChange={handleChange} />
            <input type="email" placeholder='Enter your Email' value={cred.email} name='email' onChange={handleChange} />
            <input type="password" placeholder='Enter Password' value={cred.password} name='password' onChange={handleChange} />
            <button type='submit'>Signup</button>
        </div>
    )
}

export default Signup