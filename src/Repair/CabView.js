import React from "react";
import "./CabView.css"
import RepairCardList from "./RepairCardList";

const CabView = (props) => {

    const singleNumbersStartWithZero = (number) => {
        if (number.length === 1) {
            number = "0" + number
        }
        return number
    }

    const toggleState = (cabNumber) => {
        const cabToToggle = props.cabs.find(cab => cab.id === cabNumber)
        const toggle = !cabToToggle.isAvailable
        return toggle
    }


    const toggleAvailability = (cabNumber) => {
        const cabToToggle = props.cabs.find(cab => cab.id === cabNumber)
        const toggle = cabToToggle.isAvailable ? false : true 
        return fetch(`http://localhost:8088/pedicabs/${cabNumber}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isAvailable: toggle})
        })
    }

    return (
        <div className="CabView">
            {props.cabs.map(cab => {
                return (
                    <div key={`cabcard--${cab.id}`} className="CabView__card">
                        <div className={cab.isAvailable ? "CabView__card__number" : "CabView__card__number-unavailable"}>
                            <div className="CabView__card__number__text">
                                #{singleNumbersStartWithZero(cab.cabNumber.toString())}
                            </div>
                        </div>
                        <div className="CabView__card__availabilityBtn">
                            {cab.isAvailable ? 
                            <button 
                                className="unavailableBtn" 
                                onClick={
                                    () => {
                                        toggleAvailability(cab.id)
                                        props.availableCabChange(toggleState(cab.id), cab.id)
                                    }
                                }
                            >
                                <h4>Make Unavailable</h4>
                            </button>
                            :
                            <button
                                className="availableBtn"
                                onClick={
                                    () => {
                                        toggleAvailability(cab.id)
                                        props.availableCabChange(toggleState(cab.id), cab.id)
                                    }
                                }
                            >
                                <h4>Make Available</h4>
                            </button>
                            }
                        </div>
                        <div className="CabView__card__repairList">
                            <RepairCardList cabNumber={cab.id} repairs={props.repairs} repairListChange={props.repairListChange}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CabView