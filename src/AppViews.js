import { Routes, Route } from "react-router-dom"
import "./AppViews.css"
import Information from "./Information/Information"
import Repair from "./Repair/Repair"
import ShiftViews from "./Shift/ShiftViews"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Login from "./Login/Authenticate"

const AppViews = (props) => {

    return (
        <main className="AppViews">
            <Routes>
                { props.user.isManager ? <Route path="/information" element={<Information/>}/> : null }
                { props.user.isMechanic ? <Route path="/repair/*" element={<Repair/>}/> : null }
                <Route exact path="*" element={<ShiftViews userStatus={props.userStatusData}/>}/>
                <Route path="/contact" element={<Contact localUser={props.user}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </main>
    )
}

export default AppViews;