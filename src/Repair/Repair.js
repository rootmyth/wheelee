import React, { useState, useEffect } from "react"
import ViewSelector from "./ViewSelector"
import CabView from "./CabView"
import TypeView from "./TypeView"
import CompleteView from "./CompleteView"

const Repair = () => {

    const [repairView, setRepairView] = useState(1)
    const [addView, setAddView ] = useState(false)
    const [repairs, setRepairs] = useState ([])
    const [pedicabs, setPedicabs] = useState([])

    const sendViewNumberUpstream = (viewNumber) => {
        setRepairView(viewNumber)
        
    }

    const sendToggledAvailability = (toggleValue, cabNumber) => {
        const cabs = [...pedicabs]
        cabs[cabNumber - 1].isAvailable = toggleValue
        setPedicabs(cabs)
    }

    const sendUpdatedRepairIdUpstream = (repairId) => {
        const repairArray = [...repairs]
        const targetRepair = repairArray.find(repair => repair.id === repairId)
        const repairIndex = repairArray.indexOf(targetRepair)
        repairArray[repairIndex].isComplete = true
        setRepairs(repairArray)
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/pedicabs")
            .then(res => res.json())
            .then((pedicabArray) => {
                setPedicabs(pedicabArray)
            })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/repairRequests?_expand=user&_expand=repairType")
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
                <ViewSelector viewSelection={sendViewNumberUpstream}/>
                {addView ? <h1>Add Repair</h1> : null}
            </section>
            <section className="Repair__viewRender">
                    {repairView === 1 ? 
                        <CabView 
                            cabs={pedicabs} 
                            repairs={repairs} 
                            availableCabChange={sendToggledAvailability} 
                            repairListChange={sendUpdatedRepairIdUpstream}
                        />
                    : 
                        null
                    }
                    {repairView === 2 ? <TypeView repairs={repairs}/> : null}
                    {repairView === 3 ? <CompleteView repairs={repairs}/> : null}
            </section>
        </article>
    )
}

export default Repair