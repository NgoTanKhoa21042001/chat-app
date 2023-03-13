import React from "react";
import Add from "../img/addAvatar.png";
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
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
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
