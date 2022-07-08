import React, { useState } from "react";
import "./Profile.css"

const Profile = (props) => {

    const currentUser = props.localUser

    const [editView, setEditView] = useState(false)
    const [newProfileValue, setNewProfileValue] = useState(currentUser)

    const postProfileDataAndUpdateState = () => {
        const dataToSend = {
            email: newProfileValue.email,
            name: newProfileValue.name,
            imageURL: newProfileValue.imageURL,
            phoneNumber: newProfileValue.phoneNumber,
            bio: newProfileValue.bio,
        }
        const fetchOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        }
        const updateProfileData = fetch(`http://localhost:8088/users/${parseInt(currentUser.id)}`, fetchOptions)
        const newProfileInfo = {
            id: newProfileValue.id,
            email: newProfileValue.email,
            password: newProfileValue.password,
            name: newProfileValue.name,
            imageURL: newProfileValue.imageURL,
            phoneNumber: newProfileValue.phoneNumber,
            bio: newProfileValue.bio,
            isMechanic: newProfileValue.isMechanic,
            isManager: newProfileValue.isManager,
            isActive: newProfileValue.isActive
        }
        if (editView) {
            props.setProfileInfo(newProfileInfo)
            setEditView(!editView)
            return updateProfileData
        }
        setEditView(!editView)
    }

    return (
        <article className="Profile">
            <section className="Profile__image">
                <img className="Profile__image__img" src={currentUser.imageURL} alt={`${currentUser.name}'s face`} title={`${currentUser.name}'s face`}/>
            </section>
            <section className={`Profile__imageURL ${editView ? "" : "imageURL--inactive"}`}>
                {editView ?
                    <input
                        className="Profile__imageURL__field"
                        name="profileImageURL"
                        type="text"
                        value={`${newProfileValue.imageURL}`}
                        onChange={
                            (e) => {
                                const copy = {...newProfileValue}
                                copy.imageURL = e.target.value
                                setNewProfileValue(copy)
                            }
                        }
                    />
                :
                    "Hello, I'm..."
                }
            </section>
            <section className={`Profile__name Profile__element ${editView ? "" : "name--inactive"}`}>
                {editView ?
                        <input
                            className="Profile__name__field"
                            name="profileName"
                            type="text"
                            value={`${newProfileValue.name}`}
                            onChange={
                                (e) => {
                                    const copy = {...newProfileValue}
                                    copy.name = e.target.value
                                    setNewProfileValue(copy)
                                }
                            }
                        />
                    :
                        currentUser.name
                    }
            </section>
            <section className={`Profile__bio${editView ? "--active" : ""} Profile__element`}>
            {editView ?
                    <input
                        className="Profile__bio__field"
                        name="profileBio"
                        maxLength="60"
                        value={`${newProfileValue.bio}`}
                        onChange={
                            (e) => {
                                const copy = {...newProfileValue}
                                copy.bio = e.target.value
                                setNewProfileValue(copy)
                            }
                        }
                    />
                :
                    currentUser.bio
                }
            </section>
            <section className="Profile__contact Profile__element">
                <div className={`Profile__contact__phone Profile__element ${editView ? "" : "phone--inactive"}`}>
                {editView ?
                    <input
                        className="Profile__contact__phone__field"
                        name="profilePhone"
                        maxLength="15"
                        value={`${newProfileValue.phoneNumber}`}
                        onChange={
                            (e) => {
                                const copy = {...newProfileValue}
                                copy.phoneNumber = e.target.value
                                setNewProfileValue(copy)
                            }
                        }
                    />
                :
                    currentUser.phoneNumber
                }
                </div>
                <div className={`Profile__contact__email Profile__element ${editView ? "" : "email--inactive"}`}>
                {editView ?
                    <input
                        className="Profile__contact__email__field"
                        name="profileEmail"
                        value={`${newProfileValue.email}`}
                        onChange={
                            (e) => {
                                const copy = {...newProfileValue}
                                copy.email = e.target.value
                                setNewProfileValue(copy)
                            }
                        }
                    />
                :
                    currentUser.email
                }
                </div>
            </section>
            <section className="Profile__editBtn">
                <div
                    className={`Profile__editBtn__toggle${editView ? "--active" : ""}`}
                    onClick={
                            postProfileDataAndUpdateState
                    }
                >
                    {editView ? "Save Changes" : "Edit Profile"}
                </div>
            </section>
        </article>
    )
}

export default Profile;