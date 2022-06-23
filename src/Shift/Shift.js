import React from "react"
import "./Shift.css"
import ShiftDate from "./ShiftDate"
import ShiftTable from "./ShiftTable"
import ShiftForm from "./ShiftForm"
import ShiftHistory from "./ShiftHistory"

const Shift = (props) => {
    return (
        <section className="Shift">
            <article className="Shift__date">
                <ShiftDate/>
            </article>
            <article className="Shift__new">
                <div className="Shift__new__table">
                    <ShiftTable/>
                </div>
                <div className="Shift__new__formAndHistory">
                    <ShiftForm userStatus={props.userStatus}/>
                    <ShiftHistory/>
                </div>
            </article>
        </section>
    )
}

export default Shift;