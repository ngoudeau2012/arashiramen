import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="stickyFooter">
      <div className="linkContainers">
        <a className="footerLinks">Order Online</a>
      </div>
      <div className="linkContainers">
        <a className="footerLinks">Call Ballard for Reservations</a>
      </div>
      <div className="linkContainers">
        <a className="footerLinks ">Call Southcenter for Reservations</a>
      </div>
    </div>
  );
}

export default Footer;
