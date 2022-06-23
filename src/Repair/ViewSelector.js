import React, { useState } from "react";
import "./ViewSelector.css"

const ViewSelector = (props) => {

    const [viewState, setViewState] = useState(1)
    const [addState, setAddState] = useState(false)

    return (
            <div className="ViewContainer">
                <div className="ViewSelector">
                    <div
                        className={viewState === 1 ? "ViewSelector__cabs ViewSelector__element active" : "ViewSelector__cabs ViewSelector__element"}
                        onClick={
                            () => {
                                setViewState(1)
                                props.viewSelection(1)
                            }
                        }>
                        <h1>Pedicabs</h1>
                    </div>
                    <div 
                        className={viewState === 2 ? "ViewSelector__types ViewSelector__element active" : "ViewSelector__types ViewSelector__element"}
                        onClick={
                            () => {
                                setViewState(2)
                                props.viewSelection(2)
                            }
                        }>
                        <h1>Repair Types</h1>
                    </div>
                    <div 
                        className={viewState === 3 ? "ViewSelector__complete ViewSelector__element active" : "ViewSelector__complete ViewSelector__element"}
                        onClick={
                            () => {
                                setViewState(3)
                                props.viewSelection(3)
                            }
                        }
                    >
                        <h1>Complete</h1>
                    </div>
                </div>
                <div
                    className={addState ? "ViewSelector__add ViewSelector__element active__add" : "ViewSelector__add ViewSelector__element"}
                    onClick={
                        () => {
                            setAddState(!addState)
                            props.toggleAdd()
                        }
                    }
                >
                    <h1>Add</h1>
                </div>
            </div>
            
    )
}

export default ViewSelector