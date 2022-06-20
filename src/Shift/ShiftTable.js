import React, { useState, useEffect } from "react"
import "./ShiftTable.css"
import ShiftTableRow from "./ShiftTableRow"
import dateGenerator from "./ShiftDateObjectGenerator"


const ShiftTable = () => {

    const [pedicabs, setPedicabs] = useState([])
    const [shifts, setShifts] = useState([])
    const shiftDateObject = dateGenerator()
    const shiftDateArray = [shiftDateObject.dayValue, shiftDateObject.monthValue, shiftDateObject.dateValue]
    const currentShiftDate = shiftDateArray.join(" ")
    const todaysShifts = shifts.filter(shift => shift.shiftDay === currentShiftDate)

    // console.log(todaysShifts)

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
            fetch(`http://localhost:8088/driverShifts?_expand=user`)
                .then(res => res.json())
                .then((shiftArray) => {
                    setShifts(shiftArray)
                })
        },
        []
    )

    return (
        <>
            <ShiftTableRow cabNumber="#" driver="Driver" isAvailable isHeader am="AM" pm="PM"/>

            {pedicabs.map(pedicab => {
                let amShift = false
                let pmShift = false
                const foundExistingShift = todaysShifts.find(shift => shift.pedicabId === pedicab.cabNumber)
                if (foundExistingShift) {
                    if (foundExistingShift.amShift) {amShift = true}
                    if (foundExistingShift.pmShift) {pmShift = true}
                }


                return <ShiftTableRow
                    key={`pedicab--${pedicab.id}`}
                    cabNumber={`${pedicab.cabNumber}`}
                    driver={foundExistingShift ? `${foundExistingShift.user.name}` : ""}
                    isAvailable={`${pedicab.isAvailable ? "isAvailable" : ""}`}
                    
                    amShift={amShift ? "existingShiftImage" : ""}
                    pmShift={pmShift ? "existingShiftImage" : ""}
                />

            })}
        </>
    )
}

export default ShiftTable;