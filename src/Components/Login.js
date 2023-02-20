import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const renderErrorMessage = (fieldName) => {
};

const Login = () => {


  const [cred, setCred] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: cred.email, password: cred.password })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.secToken)
      navigate("/");
    }
    // else {
    //   navigate("/login");
    // }
  }

  const handleChange = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }

  const renderForm = (

  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Email</label>
        <input type="email" name="email" value={cred.email} onChange={handleChange} required />
        {renderErrorMessage("email")}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="password" name="password" value={cred.password} onChange={handleChange} required />
        {renderErrorMessage("password")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);


  return (
    <div className="login">
      {renderForm}
    </div>
  );
};

export default Login;
