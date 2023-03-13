import React from "react";
import Add from "../img/addAvatar.png";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Khoa Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>
          Do you have an account ? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
