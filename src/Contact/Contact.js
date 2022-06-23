import React, { useState, useEffect } from "react"
import "./Contact.css"

const Contact = () => {

    const [users, setUsers] = useState([])

    const localUserId = parseInt(localStorage.getItem("wheelee_user"))
    const localUserObj = users.find(user => user.id === localUserId)


    const sortUsers = (userArray) => {
        const sortActiveUsersToTop = (user) => {
            if (user.isActive) {
                return -1
            }
            if (!user.isActive) {
                return 1
            }
        }
        return userArray.sort(sortActiveUsersToTop)
    }
    const sortedUsers = sortUsers(users)

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
            .then (res => res.json())
            .then((userArray) => {
                setUsers(userArray)
            })
        },
        []
    )

    return (
        <article className="Contact">
            {sortedUsers.map(user => {
                if (user.id !== localUserId) {
                    return (
                        <section key={`contact--${user.id}`} className="Contact__card">
                            <div className="Contact__card__image">
                                <img
                                    className={user.isActive ? "Contact__card__image__URL--active" : "Contact__card__image__URL"} src={user.imageURL} alt={`${user.name}'s face`} title={`${user.name}'s face`}/>
                            </div>
                            <div className="Contact__card__info">
                                <div className="Contact__card__info__name">
                                    {user.name}
                                    <div className={`Contact__card__info__name__status${user.isActive ? "--active" : ""}`}>{user.isActive ? "Riding Now" : "Not Riding"}</div>
                                </div>
                                <div className="Contact__card__info__title">
                                    {user.isMechanic ? "mechanic" : ""}
                                    {user.isManager ? " | manager" : ""}
                                </div>
                                <div className="Contact__card__info__bio">
                                    {user.bio}
                                </div>
                                <div className="Contact__card__info__methods">
                                    <div className="Contact__card__info__methods__phone">
                                        {user.phoneNumber}
                                    </div>
                                    <div className="Contact__card__info__methods__email">
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            })}
        </article>
    )
}

export default Contact;