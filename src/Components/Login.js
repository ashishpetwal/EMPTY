import React from "react";

const renderErrorMessage = (fieldName) => {
};

const renderForm = (
  <div className="form">
    <form>
      <div className="input-container">
        <label>Username</label>
       <input type="username" name="username" required />
        {renderErrorMessage("username")}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="password" name="password" required />
        {renderErrorMessage("password")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);

const Login = () => {
  return (
    <div className="login">
      {renderForm}
    </div>
  );
};

export default Login;
