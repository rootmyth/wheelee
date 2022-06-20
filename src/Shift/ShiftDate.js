import React from "react"
import dateGenerator from "./ShiftDateObjectGenerator"

const ShiftDate = () => {

    const dateObj = dateGenerator()

    return (
        <div className="ShiftDate">
            <h1 className="ShiftDate__time">Current Shift: {dateObj.dayValue} {dateObj.monthValue} {dateObj.dateValue} - {dateObj.shiftValue}</h1>
            <p className="ShiftDate__warning">{dateObj.warningValue}</p>
        </div>
    )
}

export default ShiftDate