import React from "react"
import './style.css'

function TextArea(props){
    return(
        <div class="textArea">
            <h1 className="title is-4">{props.title}</h1>
            <p className="body">
            {props.body}
          </p>
        </div>
    )
}

export default TextArea