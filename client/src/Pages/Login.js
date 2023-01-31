import React from "react";
import "./stylesheet/Login.css";

function Login() {
    return (
        <div>
            <div className="loginContainer">
                <h3>Log-In</h3>
                <form className="loginForm">
                    <lable className="lable">Username</lable> <input type="username" />
                    <lable className="lable">Password</lable> <input type="password" />
                    <button className="loginClick" type="button">login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;