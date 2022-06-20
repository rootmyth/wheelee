import React, { useState, useEffect } from "react";
import "./RepairRequestRow.css"

const RepairRequestRow = (props) => {

    const [repairTypes, setRepairTypes] = useState([])
    const [repairRequest, setRepairRequest] = useState({
        field: parseInt(props.number),
        text: "",
        repairTypeId: null
    })

    useEffect(
        () => {
            fetch("http://localhost:8088/repairTypes")
            .then(res => res.json())
            .then((repairTypeArray) => {
                setRepairTypes(repairTypeArray)
            })
        },
        []
    )

    return (
        <div className="RepairRequestRow" id={props.id}>
            <fieldset className="RepairRequestRow__field">
                <input
                className="RepairRequestRow__field__text"
                type="text"
                placeholder="Please describe the repair needed"
                onChange={
                    (e) => {
                        const copy = {...repairRequest}
                        copy.text = e.target.value
                        setRepairRequest(copy)
                        props.sendDataToParent(copy, parseInt(props.number))
                    }
                }/>
            </fieldset>
            <fieldset className="RepairRequestRow__field">
                <select 
                    name="types"
                    onChange={
                    (e) => {
                        const copy = {...repairRequest}
                        copy.repairTypeId = parseInt(e.target.value)
                        setRepairRequest(copy)
                        props.sendDataToParent(copy, parseInt(props.number))
                    }
                }>
                    <option key="0" value="0">And select a repair type</option>
                    {repairTypes.map(repairType => {
                        return <option
                            key={`repair--${repairType.id}`}
                            value={`${repairType.id}`}
                        >
                            {repairType.type}
                        </option>
                    })}
                </select>
            </fieldset>
        </div>
    )
}

export default RepairRequestRow