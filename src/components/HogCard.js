import React from "react"

//Can't really think of a good application for this data in this particular lab, but...
//I'll keep it in here just in case. 
const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
}

const HogCard = props => {
    return (
        <div className="ui column">
            <div
                className="ui card"
                key={props.hog.id}
                onClick={() => console.log("add code to connect event listener")}
            >
                <div className="image">
                    <img alt="oh no!" src={props.hog.image} />
                </div>
                <div className="content">
                    <div className="header">
                        {props.hog.name}
                        <i>Highest Medal Acheived: {props.hog.highest_medal_achieved}"</i>
                    </div>
                    <div className="meta text-wrap">
                        <small>Specialty: {props.hog.specialty}</small>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        Greased: {props.hog.greased}
                    </span>

                    <span>
                        Weight: {props.hog.weight} lbs
                    </span>
                    <span>
                        <div className="ui center aligned segment basic">
                            <button
                                className="ui mini red button"
                                onClick={() =>
                                    console.log("add code to connect event listener")
                                }
                            >
                                x
              </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BotCard
