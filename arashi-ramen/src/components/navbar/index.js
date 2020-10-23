import React, { useState } from "react";
import "./style.css";


function Navbar({logo}) {
  const [burgerClick, setBurgerClick] = useState(false);

  function handleToggle() {
    console.log("clicked")
    burgerClick ? setBurgerClick(false) : setBurgerClick(true);


  }

  return (
    <nav id="nav" className="nav" role="navigation" aria-label="main navigation">     
    <div className="">
        <img className="logo" src={logo} />
        </div>
        <div className="">
        <a
          role="button"
          className={burgerClick ? 'navbar-burger navbar-end burger is-active':"navbar-burger navbar-end burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarList"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarList" className= {burgerClick ? 'navbar-menu is-active dropdown' : "navbar-menu dropdown"}>
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href=""
            onClick={handleToggle}>Menu</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href=""
            onClick={handleToggle}>Location & Hours</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href=""
            onClick={handleToggle}>Order Online</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info"
            href=""
            onClick={handleToggle}>About</a>
          </p>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;