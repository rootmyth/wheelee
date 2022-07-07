import React from "react"
import "./Nav.css"
import WheeleeHome from "./WheeleeHome"
import NavIcon from "./NavIcon"
import info from "../images/information-10.svg"
import repair from "../images/repair-09.svg"
import shift from "../images/shift-06.svg"
import contact from "../images/contact-05.svg"
import profile from "../images/profile-07.svg"
import logout from "../images/logout-08.svg"
import activeShift from "../images/activeShift-17.svg"

const Nav = (props) => {

    return (
        <nav className="Nav">
            <div className="Nav__home">
                <WheeleeHome />
            </div>
            <div className="Nav__icons">
                { props.user.isManager ? <NavIcon img={info} link="information" altName="Manager Information" /> : null }
                { props.user.isMechanic ? <NavIcon img={repair} link="repair" altName="Repair List" /> : null }
                { props.user.isActive ? <NavIcon img={activeShift} link="activeShift" altName="Shifts" /> : <NavIcon img={shift} link="" altName="Shifts" /> }
                <NavIcon img={contact} link="contact" altName="Contacts" />
                <NavIcon img={profile} link="profile" altName="My Profile" />
                <NavIcon img={logout} action="logout" link="" altName="Log Out" /> 
            </div>
        </nav>
    )
}

export default Nav