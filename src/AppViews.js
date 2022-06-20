import { Routes, Route } from "react-router-dom";
import "./AppViews.css"
import Information from "./Information/Information";
import Repair from "./Repair/Repair";
import ShiftViews from "./Shift/ShiftViews"
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import Login from "./Login/Authenticate";

const AppViews = () => {

    return (
        <main className="AppViews">
            <Routes>
                <Route path="/information" element={<Information/>}/>
                <Route path="/repair" element={<Repair/>}/>
                <Route exact path="*" element={<ShiftViews/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </main>
    )
}

export default AppViews;