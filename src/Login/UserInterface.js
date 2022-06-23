import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import AppViews from "../AppViews";

const UserInterface = () => {

    const localUser = parseInt(localStorage.getItem("wheelee_user"))
    const [currentUser, setCurrentUser] = useState({})

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then((userArray) => {
                const user = userArray.find(user => user.id === localUser)
                setCurrentUser(user)
            })
        },
        [localUser]
    )

    const sendUserStatusUpstream = (userStatus) => {
        const setStatus = {...currentUser}
        setStatus.isActive = userStatus
        setCurrentUser(setStatus)
    }

    return (
        <>
            <Nav user={currentUser}/>
            <AppViews user={currentUser} userStatusData={sendUserStatusUpstream}/>
        </>
    )
}

export default UserInterface