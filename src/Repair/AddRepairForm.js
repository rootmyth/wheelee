import React, { useState, useEffect } from "react";
import "./AddRepairForm.css"

const AddRepairForm = (props) => {

    const localUser = parseInt(localStorage.getItem("wheelee_user"))

    const [repairTypes, setRepairTypes] = useState([])
    const [currentUserObj, setCurrentUserObj] = useState({})
    const [repairRequest, setRepairRequest] = useState({
        pedicab: null,
        text: "",
        repairTypeId: null
    })

    const singleNumbersStartWithZero = (number) => {
        if (number.length === 1) {
            number = "0" + number
        }
        return number
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${localUser}`)
            .then(res => res.json())
            .then((user) => {
                setCurrentUserObj(user)
            })
        },
        []
    )

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

    const submitRepairRequest = () => {
        const repairTypeObj = repairTypes.find(repairType => repairType.id === repairRequest.repairTypeId)
        const repairRequestObj = {
            user: currentUserObj,
            pedicabId: repairRequest.pedicab,
            mechanicId: null,
            description: repairRequest.text,
            repairType: repairTypeObj,
            isComplete: false,
            dateSubmitted: new Date().getTime()
        }
        const newRepairRequest = {
            userId: localUser,
            pedicabId: repairRequest.pedicab,
            mechanicId: null,
            description: repairRequest.text,
            repairTypeId: repairRequest.repairTypeId,
            isComplete: false,
            dateSubmitted: new Date().getTime()
        }
        const repairFetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRepairRequest)
        }
        props.addNewRepair(repairRequestObj)
        return fetch("http://localhost:8088/repairRequests", repairFetchOptions)
    }

    return (
        <div className="AddRepairForm">
            <fieldset className="AddRepairForm__field">
                <select 
                    name="cabs"
                    onChange={
                    (e) => {
                        const copy = {...repairRequest}
                        copy.pedicab = parseInt(e.target.value)
                        setRepairRequest(copy)
                    }
                }>
                    <option key="0" value="0">Cab #</option>
                    {props.cabs.map(cab => {
                        return <option
                            key={`cab--${cab.id}`}
                            value={`${cab.id}`}
                        >
                            #{singleNumbersStartWithZero(cab.cabNumber.toString())}
                        </option>
                    })}
                </select>
            </fieldset>
            <fieldset className="AddRepairForm__field">
                <input
                className="AddRepairForm__field__text"
                type="text"
                placeholder="Please describe the repair needed"
                onChange={
                    (e) => {
                        const copy = {...repairRequest}
                        copy.text = e.target.value
                        setRepairRequest(copy)
                    }
                }/>
            </fieldset>
            <fieldset className="AddRepairForm__field">
                <select 
                    name="types"
                    onChange={
                    (e) => {
                        const copy = {...repairRequest}
                        copy.repairTypeId = parseInt(e.target.value)
                        setRepairRequest(copy)
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
            <div className="AddRepairForm__submit AddRepairForm__field">
                    <div
                        className="AddRepairForm__submit__btn"
                        onClick={submitRepairRequest}
                    >
                        <div className="AddRepairForm__submit__btn__text">Submit</div>
                    </div>
            </div>
        </div>
    )
}

export default AddRepairForm