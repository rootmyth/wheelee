import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
import WheeleeHome from "./WheeleeHome"
import NavIcon from "./NavIcon"
import info from "../images/information-10.svg"
import repair from "../images/repair-09.svg"
import shift from "../images/shift-06.svg"
import contact from "../images/contact-05.svg"
import profile from "../images/profile-07.svg"
import logout from "../images/logout-08.svg"

const Nav = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${parseInt(localStorage.getItem("wheelee_user"))}`)
            .then(res => res.json())
            .then((userArray => {
                setCurrentUser(userArray)
            }))
        },
        []
    )

    const active = currentUser.isActive

    return (
        <nav className="Nav">
            <div className="Nav__home">
                <WheeleeHome />
            </div>
            <div className="Nav__icons">
                <NavIcon img={info} link="information" altName="Manager Information" />
                <NavIcon img={repair} link="repair" altName="Repair List" />
                {active ? <NavIcon img={shift} link="activeShift" altName="Shifts" /> : <NavIcon img={shift} link="shift" altName="Shifts" />}
                <NavIcon img={contact} link="contact" altName="Contacts" />
                <NavIcon img={profile} link="profile" altName="My Profile" />
                <NavIcon img={logout} link="login" altName="Log Out" /> 
            </div>
        </nav>
    )
}

export default Nav