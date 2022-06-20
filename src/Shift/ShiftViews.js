import { Routes, Route } from "react-router-dom"
import Shift from "./Shift"
import ActiveShift from "./ActiveShift"
import EndShift from "./EndShift"


const ShiftViews = (props) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Shift/>}/>
                <Route path="/activeShift" element={<ActiveShift/>}/>
                <Route path="/endShift" element={<EndShift/>}/>
            </Routes>
        </>
    )
}

export default ShiftViews