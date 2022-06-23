import React, { useState } from "react"
import { Link } from "react-router-dom"
import RepairRequestRow from "./RepairRequestRow"
import "./EndShift.css"
import addFieldImg from "../images/addField-14.svg"
import removeFieldImg from "../images/delete-15.svg"

const EndShift = (props) => {

    const [requestFieldNum, setRequestFieldNum] = useState(1)
    const [repairData, setRepairData] = useState([])


    const sendDataUpstream = (fieldData, fieldNumber) => {
        const fieldDataArray = [...repairData]
        fieldDataArray[fieldNumber] = fieldData
        setRepairData(fieldDataArray)
        
    }

    const submitRequests = () => {
        const currentUser = parseInt(localStorage.getItem("wheelee_user"))
        let repairRequestObj = {}
        let repairFetches = null
        for (const repairRequest of repairData) {

            repairRequestObj = {
                userId: currentUser,
                pedicabId: parseInt(localStorage.getItem("activeCabNum")),
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
                body: JSON.stringify(repairRequestObj)
            }
            repairFetches += fetch("http://localhost:8088/repairRequests", repairFetchOptions)
        }

        const inactiveFetchOptions = { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isActive : false})
        }

        props.userStatus(false)
        localStorage.removeItem("activeCabNum")

        const markInactiveFetch = fetch(`http://localhost:8088/users/${currentUser}`, inactiveFetchOptions)

        return repairFetches && markInactiveFetch

    }

    const fieldMultiplier = () => {
        let fields = []

        for (let i = 0; i < requestFieldNum; i++) {
            fields.push(<RepairRequestRow key={`requestField--${i}`} id={`request--${i}`} number={`${i}`} sendDataToParent={sendDataUpstream}/>)
        }
        return fields
    }

    const singleNumbersStartWithZero = (number) => {
        if (number.length === 1) {
            number = "0" + number
        }
        return number
    }

    return (
        <article className="EndShift">
            <section className="EndShift__header EndShift__element">
                <h1>How was the ride on cab #
                    {singleNumbersStartWithZero(localStorage.getItem("activeCabNum"))}
                ?</h1>
            </section>
            <section className="EndShift__instructions EndShift__element">
                <h4>
                    Please let us know if there were any issues with the pedicab.  You may add multiple repair requests.  If the cab was smooth sailin' just opt
                    out by entering something like "Pedicab Perfection" for the description and selecting "No Issues" for the repair type.
                </h4>
            </section>
            {fieldMultiplier()}
            <section className="EndShift__stateBtns EndShift__element">
                <div className="stateButtons">
                    <div
                        className="EndShift__stateBtns__addRow"
                        onClick={
                            () => {
                                const addField = requestFieldNum + 1
                                return setRequestFieldNum(addField)
                            }
                        }>
                        <div className="EndShift__stateBtns__addRow__text">
                            <h3>Add Field</h3>
                        </div>
                        <img className="EndShift__stateBtns__addRow__image" src={addFieldImg} alt="Add Another Repair Request Field" />
                    </div>
                    {requestFieldNum > 1 ?
                        <div
                            className="EndShift__stateBtns__removeRow"
                            onClick={
                                () => {
                                    const removeField = requestFieldNum -1
                                    const dataArray = [...repairData]
                                    dataArray.pop()
                                    setRepairData(dataArray)
                                    return setRequestFieldNum(removeField)
                                }
                            }>
                            <div className="EndShift__stateBtns__removeRow__text">
                                <h3>Remove Field</h3>
                            </div>
                            <img className="EndShift__stateBtns__removeRow__image" src={removeFieldImg} alt="Remove Last Repair Request Field" />
                        </div>
                    :""}
                </div>
            </section>
            <Link to="/">
                <button className="EndShift__btn" onClick={submitRequests}>
                    <h1>Submit Request&#40;s&#41;</h1>
                </button>
            </Link>
        </article>
    )
}

export default EndShift