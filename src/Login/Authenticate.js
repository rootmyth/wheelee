import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./Login";
import Register from "./Register";

const Authenticate = () => {
    return (
        <div className="Authenticate">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default Authenticate;