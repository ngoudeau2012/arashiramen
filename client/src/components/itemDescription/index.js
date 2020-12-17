import React, {useState} from "react";
import './style.css'

function ItemDescription({item,colSize}) {

  console.log(colSize)
  let colState = ""

  if(colSize === "3"){
    console.log(colSize)
    colState = "column is-one-third"
  }else if(colSize ==="2"){
    colState = "column is-half"
  } else if (colSize === "1"){
      colState = "column is-three-fifths is-offset-one-fifth"
  }

  return (
    <div className={colState}>
        <div className="employeeCard" >
      <p className ="name">{item.name}</p>
      <p className ="description">{item.description}</p>
    </div>
    </div>
  );
}

export default ItemDescription;