import React, { useState, useEffect } from "react";

const Contact = () => {

    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
            .then (res => res.json())
            .then((userArray) => {
                setUsers(userArray)
            })
        }
    )

    return (
        <article className="Contact">
            
        </article>
    )
}

export default Contact;