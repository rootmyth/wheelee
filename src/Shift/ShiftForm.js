import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./ShiftForm.css"
import dateGenerator from "./ShiftDateObjectGenerator"

const ShiftForm = (props) => {

    const [pedicabs, setPedicabs] = useState([])
    const [newShift, setNewShift] = useState ({
        pedicabId: null,
        amShift: false,
        pmShift: false,
    })
    const shiftDateObject = dateGenerator()
    const shiftDateArray = [shiftDateObject.dayValue, shiftDateObject.monthValue, shiftDateObject.dateValue]
    const shiftDate = shiftDateArray.join(" ")

    const singleNumbersStartWithZero = (number) => {
        if (number.length === 1) {
            number = "0" + number
        }
        return number
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

    const startShift = () => {
        
        const newShiftToPost = {
            userId: parseInt(localStorage.getItem("wheelee_user")),
            pedicabId: newShift.pedicabId,
            amShift: newShift.amShift,
            pmShift: newShift.pmShift,
            shiftDay: shiftDate
        }
        const markAsActive = {isActive: true}

        const shiftFetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShiftToPost)
        }
        const activeFetchOptions = { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(markAsActive)
        }

        localStorage.setItem("activeCabNum", newShift.pedicabId)
        props.userStatus(true)
        const startShiftFetch = fetch("http://localhost:8088/driverShifts", shiftFetchOptions)
        const markActiveFetch = fetch(`http://localhost:8088/users/${parseInt(localStorage.getItem("wheelee_user"))}`, activeFetchOptions)

        return startShiftFetch && markActiveFetch
    }

    return (
        <form className="ShiftForm">
            <div className="ShiftForm__name">
                <h3>Ready to ride?</h3>
            </div>
            <fieldset className="ShiftForm__cabNumber ShiftForm__element">
                <label htmlFor="cabs"><h4>Just choose your cab: </h4></label>
                <select name="cabs" onChange={
                    (e) => {
                        const copy = {...newShift}
                        copy.pedicabId = parseInt(e.target.value)
                        setNewShift(copy)
                    }
                }>
                    <option key="0" value="0">#</option>
                    {pedicabs.map(pedicab => {
                        if (pedicab.isAvailable) {
                            return <option
                                className="ShiftForm__cabNumber__option"
                                key={`pedicab--${pedicab.id}`}
                                value={`${pedicab.cabNumber}`}
                                >
                                    {`${singleNumbersStartWithZero(pedicab.cabNumber.toString())}`}
                            </option>
                        }

                    })}
                </select>
            </fieldset>
            <fieldset className="ShiftForm__shiftSelector ShiftForm__element">
                <label htmlFor="shifts"><h4>And which shift&#40;s&#41; you'd like:</h4></label>
                <div className="checkbox">
                    <input
                        className="ShiftForm__shiftSelector__am checkbox__square"
                        name="shifts"
                        type="checkbox"
                        onChange={
                            (e) => {
                                const copy = {...newShift}
                                copy.amShift = e.target.checked
                                setNewShift(copy)
                            }
                        }
                    />
                    <h4>AM</h4>
                </div>
                <div className="checkbox">
                    <input
                        className="ShiftForm__shiftSelector__pm checkbox__square"
                        name="shifts"
                        type="checkbox"
                        onChange={
                            (e) => {
                                const copy = {...newShift}
                                copy.pmShift = e.target.checked
                                setNewShift(copy)
                            }
                        }
                    />
                    <h4>PM</h4>
                </div>
            </fieldset>
            {newShift.pedicabId === null || newShift.pedicabId === 0 || (!newShift.amShift && !newShift.pmShift) ?
                <button className="ShiftForm__startShiftBtn" disabled>
                    <h1>Let's Roll!</h1>
                </button>
            :
                <Link to="/userInterface/activeShift">
                    <button className="ShiftForm__startShiftBtn" onClick={startShift}>
                        <h1>Let's Roll!</h1>
                    </button>
                </Link>
            }           
        </form>
    )
}

export default ShiftForm