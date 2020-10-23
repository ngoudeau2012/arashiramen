import React from "react"
import "./style.css"

function BannerImg({img}){
    return (
        <div>
            <img class="banner" src={img} />
        </div>
    )
}

export default BannerImg