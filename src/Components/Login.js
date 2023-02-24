import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const renderErrorMessage = (fieldName) => {
};

const Login = () => {
  const Handlehover = () => {
    const switchers = [...document.querySelectorAll('.switcher')]

    switchers.forEach(item => {
      item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
      })
    })
  }


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

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const renderForm = (
    <html>
      <head>
        <title>Carrier login</title>

        <link rel="stylesheet" href="src/App.css" />
      </head>


      <body>




        <section class="forms-section">
          <h1 class="section-title">Carrier Councelling </h1>
          <div class="forms">
            <div class="form-wrapper is-active">
              <button type="button" class="switcher switcher-login">
                Login
                <span class="underline"></span>
              </button>
              <form class="form form-login">
                <fieldset>
                  <legend>Please, enter your email and password for login.</legend>
                  <div class="input-block">
                    <label for="login-email">E-mail</label>
                    <input id="login-email" type="email" required />
                  </div>
                  <div class="input-block">
                    <label for="login-password">Password</label>
                    <input id="login-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" class="btn-login">Login</button>
              </form>
            </div>
            <div class="form-wrapper">
              <button type="button" class="switcher switcher-signup" onClick={Handlehover}>
                Sign Up
                <span class="underline"></span>
              </button>
              <form class="form form-signup">
                <fieldset>
                  <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                  <div class="input-block">
                    <label for="signup-username">Username</label>
                    <input id="signup-email" type="text" required />
                  </div>
                  <div class="input-block">
                    <label for="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required />
                  </div>
                  <div class="input-block">
                    <label for="signup-password">Password</label>
                    <input id="signup-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" class="btn-signup">Sign Up</button>
              </form>
            </div>
          </div>
        </section>
        <script src="js/loginpage2.js"></script>
      </body>
    </html>
  );


  return (
    <div className="login">
      {renderForm}
    </div>
  );
};
export default Login;


{/* <div className="form">
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
</div> */}