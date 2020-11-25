import React from "react";
import "./style.css";

function LocationText(props) {
  return (
    <div>
      <div class="columns is-mobile">
        <div class="column">
          <h1 className="locationTitle">Ballard</h1>
          <p className="address">5401 20th Ave NW, Seattle, WA 9810</p>
        </div>
        <div class="column rightCol">
          <h1 className="locationTitle">Southcenter</h1>
          <p className="address">17045 Southcenter Pkwy, Tulwila, WA 998188</p>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <p className="phoneNumber">(206) 492-7933</p>
        </div>
        <div className="column rightCol">
          <p className="phoneNumber">(253) 220-8722</p>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <h3 className="locationSubTitle">Hours:</h3>
          <p className="days">Closed Mondays</p>
          <p className="days">Sun-Thurs</p>
          <p className="hours">11:30am - 9:30pm</p>
          <p className="days">Fri & Sat</p>
          <p className="hours">11:30am - 10:00pm</p>
        </div>
        <div className="column rightCol">
          <h3 className="locationSubTitle">Hours:</h3>
          <p className="days">Closed Mondays</p>
          <p className="days">Tues-Sun</p>
          <p className="hours">11:30am - 9:30pm</p>
        </div>
      </div>
    </div>
  );
}

export default LocationText;
