import React from "react";
import "./style.css";

function SocialMedia() {
  return (
    <div className="socialSection">
        <div className="socialsTitle">
            <p className="title has-text-centered">Share your love on socials!</p>
        </div>
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Instagram</p>
            <p class="title">
              <i class="fab fa-instagram"></i>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Yelp</p>
            <p class="title">
            <i class="fab fa-yelp"></i>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Facebook</p>
            <p class="title">
              <i class="fab fa-facebook"></i>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SocialMedia;
