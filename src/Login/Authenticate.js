import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./Login";
import Register from "./Register";
import UserInterface from "./UserInterface";

const Authenticate = () => {
    return (
        <div className="Authenticate">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/userInterface/*" element={<UserInterface/>}/>
            </Routes>
        </div>
    )
}

export default Authenticate;