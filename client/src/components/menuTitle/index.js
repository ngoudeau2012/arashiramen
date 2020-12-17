import React from "react"
import "./style.css"

function MenuTitle(props){

let subtitle = ""
    if(props.subtitle !== null){
        subtitle = props.subtitle
    }
    return(
        <div className="titleContainer">
                <h1 className="menuTitle">{props.title}</h1>
    <p className="menuSubTitle">{subtitle}</p>
        </div>
    )
}

export default MenuTitle