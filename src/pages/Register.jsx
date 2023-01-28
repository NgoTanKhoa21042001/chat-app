import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Khoa Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" name="" id="" />
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <input type="file" name="" id="" />
          <button>Signup</button>
        </form>
        <p>
          Do you have an account ? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
