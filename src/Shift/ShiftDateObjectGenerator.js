const ShiftDateObjectGenerator = () => {
    let shiftDate = new Date()
    let shiftDateString = shiftDate.toString()
    let shiftDateArray = shiftDateString.split(" ")
    let shift = "AM"
    let warning = ""

    const shiftTime = shiftDateArray[4]
    const hourFirstDigit = parseInt(shiftTime[0])
    const hourSecondDigit = parseInt(shiftTime[1])

    if (hourFirstDigit === 0 && hourSecondDigit < 5) {
        const yesterdaysUnixTime = shiftDate.getTime() - 86400000
        shiftDate = new Date(yesterdaysUnixTime).toDateString()
        shiftDateString = shiftDate.toString()
        shiftDateArray = shiftDateString.split(" ")
        shift = "PM"
    }

    if ((hourFirstDigit >= 1 && hourSecondDigit >= 8) || hourFirstDigit === 2) {
        shift = "PM"
    }

    if (hourFirstDigit === 1 && hourSecondDigit >= 6 && hourSecondDigit <= 7) {
        shift = "AM/PM"
        if (shiftDateArray[0] !== "Sat" || shiftDateArray[0] !== "Sun") {
            warning = "Be advised: Pedicabs are not to be operated downtown from 4-6 during the week per city regulations."
        }
    }

    const dayOfTheWeek = shiftDateArray[0]
    const month = shiftDateArray[1]
    const date = shiftDateArray[2]

    const dateObject = {
        dayValue: dayOfTheWeek,
        monthValue: month,
        dateValue: date,
        shiftValue: shift,
        warningValue: warning
    }

    return dateObject
}

export default ShiftDateObjectGenerator