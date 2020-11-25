import React from "react";
import './style.css'

function ItemPhotoDescription({item}) {
  return (
    <div className="column is-one-third">
        <div className="employeeCard" >
      <figure className="image">
        <img
          className="is-rounded"
          src= {item.photo}
        />
      </figure>
      <p className ="name">{item.name}</p>
  <p className ="description">{item.description}</p>
    </div>
    </div>
  );
}

export default ItemPhotoDescription;
