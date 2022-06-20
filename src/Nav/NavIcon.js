import React from "react";
import { Link } from "react-router-dom";
import "./NavIcon.css"

const NavIcon = (props) => {
    return (
        <Link to={`/${props.link}`}>
            <img className="NavIcon" src={props.img} alt={props.altName} title={props.altName}/>
        </Link>
    )
}

export default NavIcon