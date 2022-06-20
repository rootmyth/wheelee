import React from "react";
import "./ShiftTableRow.css"

const ShiftTableRow = (props) => {
    const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let cabNum = props.cabNumber
    if (cabNum.length === 1 && numberArray.includes(cabNum)) {
        cabNum = "0" + cabNum
    }

    return (
        <>
            <div className="ShiftTableRow">
                <div className={props.isHeader ? "ShiftTableRow__cabNumber header" : "ShiftTableRow__cabNumber"}>
                    <h3>{cabNum}</h3>
                </div>
                <div className={
                    (props.isAvailable ? "ShiftTableRow__driver" : "ShiftTableRow__driver unavailableText")
                    + (" ") +
                    (props.isHeader ? "header" : "")
                        
                }>
                    <h3>{props.isAvailable ? `${props.driver}` : "Not Available"}</h3>
                </div>
                <div className={
                    (props.isAvailable ? "ShiftTableRow__am" : "ShiftTableRow__am unavailableImage")
                    + (" ") +
                    (props.isHeader ? "header" : "")
                    + (" ") +
                    (props.amShift)
                }>
                    <h3>{props.am}</h3>
                </div>
                <div className={
                    (props.isAvailable ? "ShiftTableRow__pm" : "ShiftTableRow__pm unavailableImage")
                    + (" ") +
                    (props.isHeader ? "header" : "")
                    + (" ") +
                    (props.pmShift)
                }>
                    <h3>{props.pm}</h3>
                </div>
            </div>
        </>
    )
}

export default ShiftTableRow