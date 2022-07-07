import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./ActiveShift.css"

const ActiveShift = () => {

    const [tips, setTips] = useState([{
        text: "Failed to load tip",
        user: {
            name: ""
        }
    }])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/tips?_expand=user")
                .then(res => res.json())
                .then((tipArray) => {
                    setTips(tipArray)
                })
        },
        []
    )

    const randomTip = tips[Math.floor(Math.random() * tips.length)]

    return (
        <article className="ActiveShift">
            <section className="ActiveShift__tip">
                <h1 className="ActiveShift__tip__header">Tip of the shift:</h1>
                <blockquote className="ActiveShift__tip__text">
                    <h2>"{randomTip.text}"</h2>
                </blockquote>
                <h3 className="ActiveShift__tip__author">-{randomTip.user.name}</h3>
            </section>
            <Link to="/userInterface/endShift">
                <button className="ActiveShift__btn">
                    <h1>End Shift</h1>
                </button>
            </Link>
        </article>
    )
}

export default ActiveShift