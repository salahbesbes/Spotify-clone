import React from "react";
import "../Css/Login.css";
import {loginUrl} from "../Utils/auth";
const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="not Found"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;
