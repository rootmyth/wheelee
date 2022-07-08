import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import wheeleeLogo from "../images/logo-03.svg"
import aboutLogo from "../images/bwLogo-05.svg"

const Login = () => {

    const [users, setUsers] = useState([])
    const [credentialMatch, setCredentialMatch] = useState(false)
    const [userMatch, setUserMatch] = useState({})
    const [credentials, setCredentials] = useState ({
        email: "",
        password: ""
    })
    let authError = ""

    const checkCredentials = (email, password) => {
        const foundUser = users.find(user => user.email === email && user.password === password)
        if (foundUser) {
            
            return true
        } else {
            
            return false
        }
    }

    const getUser = (email, password) => {
        const foundUser = users.find(user => user.email === email && user.password === password)
        if (foundUser) {

            return foundUser
        } else {
            return undefined
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            checkCredentials(e.target.value, credentials.password)
            getUser(e.target.value, credentials.password)
        }
        if (e.target.name === "password") {
            checkCredentials(credentials.email, e.target.value)
            getUser(credentials.email, e.target.value)
        }
    }

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

    useEffect(
        () => {
            setCredentialMatch(checkCredentials(credentials.email, credentials.password))
            setUserMatch(getUser(credentials.email, credentials.password))
        },
        [checkCredentials, setUserMatch]
    )

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
                                    handleChange(e)
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
                                    handleChange(e)
                                }
                            }
                            className="Login__form__fieldset__input"
                            name="password"
                            type="text"
                            placeholder="Password"
                        />
                    </fieldset>
                </form>
                <Link to={credentialMatch ? "/userInterface" : "/"}>
                    <button
                        className="Login__button"
                        onClick={() => credentialMatch ?  localStorage.setItem("wheelee_user", parseInt(userMatch.id)): undefined}
                    >
                        <h1>Log In</h1>
                    </button>
                </Link>
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