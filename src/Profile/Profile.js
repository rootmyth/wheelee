import React, { useState } from "react";
import "./Profile.css"

const Profile = (props) => {

    const currentUser = props.localUser

    const [editView, setEditView] = useState(false)

    return (
        <article className="Profile">
            <section className="Profile__image">

            </section>
            <section className="Profile__editBtn">
                <div
                    className={`Profile__editBtn__toggle${editView ? "--active" : ""}`}
                    onClick={
                        () => {
                            setEditView(!editView)
                        }
                    }
                >
                    {editView ? "Save Changes" : "Edit Profile"}
                </div>
            </section>
            <section className="Profile__bio">
                
            </section>
            <section className="Profile__contact">
                <div className="Profile__contact__phone">

                </div>
                <div className="Profile__contact__email">
                    
                </div>
            </section>
        </article>
    )
}

export default Profile;