import axios from "axios";
import React, { useState } from "react";
import {navigate, Link } from "@reach/router";



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        setSuccessMsg("");

        const postData = { 
            email, 
            password 
        };

        axios
        .post("http://localhost:8000/api/login", postData, {
        withCredentials: true,})
        .then((response) => {
        setSuccessMsg(response.data.message) 
        localStorage.setItem( "userId", response.data.id)
        console.log(response.data);
        navigate ("/chatrooms")
    })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErr(err.response.data.errors);
        
    });
};


    return (
        <div className="login-form justify-content-center">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {err && <h3 style={{ color: "red" }}>{err}</h3>}
                {successMsg.length > 0 && (
                <h3 style={{ color: "green" }}>{successMsg}</h3>)}
            <div>
            <br></br>
                Email:{" "}
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br></br>
            <div>
                Password:{" "}
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <br></br>
            </div>
                <button className="btn btn-secondary" type="submit">Login</button>
                <br></br>
                <br></br>
            <div style={{marginTop: "25px", fontSize: "18px"}}>
                <Link style={{padding: "5px"}} to="/register">New Users Need to Register</Link>
            </div>
            </form>
        </div>
    );
};

export default Login;
//