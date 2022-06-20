import React, { useState, useEffect } from "react"

const Repair = () => {

    const [repairView, setRepairView] = useState(1)
    const [repairs, setRepairs] = useState ([])

    useEffect(
        () => {
            fetch("http://localhost:8088/repairRequests?_expand=user")
            .then(res => res.json())
            .then((requestArray) => {
                setRepairs(requestArray)
            })
        },
        []
    )

    return (
        <article className="Repair">
            <section className="Repair__viewSelector">
                <ViewSelector />
            </section>
            <section>
            {repairs.map(repair => {
                return <h1 key={repair.id}>{repair.description}</h1>
            })}    
            </section>
        </article>
    )
}

export default Repair