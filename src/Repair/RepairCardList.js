import React from "react"
import "./RepairCardList.css"
import defaultImg from "../images/profile-07.svg"
import completeImg from "../images/complete-19.svg"
import removeImg from "../images/remove-20.svg"

const RepairCardList = (props) => {

    const noRepairItems = "No repair requests to show, nice!"

    const filterRepairs = (repairs) => {
        const cabRepairFilter = (repair) => {
            return ((repair.pedicabId === props.cabNumber) && repair.repairType.id > 1 && !repair.isComplete) 
        }
        const thisCabCardsRepairs = repairs.filter(cabRepairFilter)
        const repairOrder = (a, b) => {
            return a.dateSubmitted - b.dateSubmitted
        }
        return thisCabCardsRepairs.sort(repairOrder)    
    }
    const filteredRepairs = filterRepairs(props.repairs)

    const completeRepair = (repairId) => {

        props.repairListChange(repairId)

        const markAsComplete = {isComplete: true}
        const completeFetchOptions = { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(markAsComplete)
        }
        
        return fetch(`http://localhost:8088/repairRequests/${repairId}`, completeFetchOptions)
    }

    const removeRepair = (repairId) => {
        props.deleteRepair(repairId)
        return fetch(`http://localhost:8088/repairRequests/${repairId}`, { method: "DELETE"})
    }

    return (
        <div className="RepairCardList">
            <div className="RepairCardList__noItems">{ filteredRepairs.length === 0 ? <h1>{noRepairItems}</h1> : "" }</div>
            {filteredRepairs.map(repair => {
                return (
                    <div key={`repairRow--${repair.id}`} className="RepairCardList__row">
                        <div className="RepairCardList__row__one">
                            <div className="RepairCardList__row__one__description repairRow__element">
                                {repair.description}
                            </div>
                        </div>
                        <div className="RepairCardList__row__two">
                            <div className="RepairCardList__row__two__image repairRow__element">
                                {repair.user.imageURL === "defaultImg" ?
                                    <img className="repairProfileImg" src={defaultImg} alt="User's Profile" title={repair.user.name}/>
                                :
                                    <img className="repairProfileImg" src={repair.user.imageURL} alt="User's Profile" title={repair.user.name}/>
                                }
                            </div>
                            <div className="RepairCardList__row__two__info repairRow__element">
                                Submitted by {repair.user.name} {repair.user.phoneNumber}
                            </div>
                            <div className="RepairCardList__row__two__type repairRow__element">
                                {repair.repairType.type}
                            </div>
                            <div className="buttonContainer">
                                <div
                                    id={`r${repair.id}`}
                                    className="RepairCardList__row__two__complete repairRow__element"
                                    onClick={
                                        () => {
                                            completeRepair(repair.id)
                                            
                                        }
                                    }
                                >
                                    <img className="repairRow__btn repairBtn__complete" src={completeImg} alt="Complete this Repair" title="Complete this Repair"/>
                                </div>
                                <div
                                    className="RepairCardList__row__two__remove repairRow__element"
                                    onClick={
                                        () => {
                                            removeRepair(repair.id)
                                        }
                                    }
                                >
                                    <img className="repairRow__btn repairBtn__remove" src={removeImg} alt="Delete this Repair" title="Delete this Repair"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RepairCardList