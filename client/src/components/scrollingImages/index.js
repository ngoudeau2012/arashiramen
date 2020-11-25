import React, { useState } from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./style.css";
import Black from "../../assets/foodPhotos/black_garlic_ramen.jpg";
import Miso from "../../assets/foodPhotos/miso_tonkotsu.jpg";
import Spicy from "../../assets/foodPhotos/spicy_miso_tonkotsu.jpg";

function ScrollingImages() {
      const slideImages = [
  Black,
  Miso,
  Spicy
];

const slideProperties = {
    indicators: true,
    scale: 0.4,
    duration:"10000",
    easing:"ease"
  }

    return (
        <div >
            <div id=""className="section ">
            <h1 className="title is-4 imgTitle">Customer Favorites</h1>
            </div>
            
        <Slide {...slideProperties}>
          <div className="each-slide">
            <div >
                <img className="slideImg"src={slideImages[0]}/>
                <p className="caption">Black Garlic Ramen</p>
            </div>
          </div>
          <div className="each-slide">
            <div >
            <img className="slideImg" src={slideImages[1]}/>
              <span><p className="caption">Miso Tonkotsu</p></span>
            </div>
          </div>
          <div className="each-slide">
            <div >
            <img className="slideImg"src={slideImages[0]}/>
              <span><p className="caption">Spicy Miso Tonkotsu</p></span>
            </div>
          </div>
        </Slide>
        </div>
  );
}

export default ScrollingImages;