import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import wheeleeLogo from "../images/logo-03.svg"
import aboutLogo from "../images/bwLogo-05.svg"

const Login = () => {

    const [users, setUsers] = useState([])
    const [credentials, setCredentials] = useState ({
        email: "",
        password: ""
    })
    let authError = ""

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((userArray) => {
                    setUsers(userArray)
                })
        },
        []
    )

    const submitCredentials = (e) => {
        
        const foundUser = users.find(user => user.email === credentials.email && user.password === credentials.password)
        if (foundUser) {
            localStorage.setItem("wheelee_user", foundUser.id)
        } else {
            authError = "Sorry, but it doesn't look like this user exists."
        }
    }

    return (
        <>
            <article className="Login">
                <section className="Login__logo">
                    <img className="Login__logo__image" src={wheeleeLogo} alt="Wheelee Logo"/>
                    <div className="Login__logo__authMessage">
                        {authError}
                    </div>
                </section>
                <form className="Login__form">
                    <fieldset className="Login__form__fieldset">
                        <label htmlFor="email"></label>
                        <input
                            onChange={
                                (e) => {
                                    const copy = {...credentials}
                                    copy.email = e.target.value
                                    setCredentials(copy)
                                }
                            }
                            className="Login__form__fieldset__input"
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                    </fieldset>
                    <fieldset className="Login__form__fieldset">
                        <label htmlFor="password"></label>
                        <input
                            onChange={
                                (e) => {
                                    const copy = {...credentials}
                                    copy.password = e.target.value
                                    setCredentials(copy)
                                }
                            }
                            className="Login__form__fieldset__input"
                            name="password"
                            type="text"
                            placeholder="Password"
                        />
                    </fieldset>
                </form>
                <button className="Login__button" onClick={submitCredentials()}><h1>Log In</h1></button>
                <section className="Login__register">
                    <Link to="/register">Or create a new account</Link>
                </section>
            </article>
            <footer className="aboutBrennan">
                <div className="aboutBrennan__logo">
                    <img className="aboutBrennan__logo__image" src={aboutLogo} alt="Brennan's About Logo"/>
                </div>
                <div className="aboutBrennan__text">
                    Created by Brennan Wills
                </div>
            </footer>
        </>
    )
}

export default Login