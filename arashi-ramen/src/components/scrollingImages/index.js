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



// const [iterate, setIterate] = useState(0)

// function handleClick(e){
//     switch (e.target.value) {
//         case "next":
//             setIterate(iterate + 1)
//             console.log("Test 24 "+ iterate)
//             if(iterate > 1){
//                 setIterate(0)
//                 setImg(slideImages[iterate])
//                 console.log("test" + iterate)
//             }else{
//                 setImg(slideImages[iterate])
//                 console.log("test 30" + iterate)
//             }
           
//             break;
    
//         default:
//             setIterate(iterate - 1)
//             if(iterate < 1){
//                 setIterate(2)
//                 setImg(slideImages[iterate])
//                 console.log(iterate)
//             }else{
//                 setImg(slideImages[iterate])
//                 console.log(iterate)
//             }
//             break;
//     }
// }

// const [img, setImg] = useState(slideImages[iterate])

const slideProperties = {
    indicators: true,
    scale: 0.4,
    indicators: i => (<div className="indicator">{i + 1}</div>),
    duration:"10000",
    easing:"ease"
  }

    return (
        // <div>
        //     <img src={img}/>
        //     <button value="next" onClick={handleClick}>next</button>
        //     <button value="prev" onClick={handleClick}>prev</button>
        // </div>
        <div>
            <div id="customerReviews"className="">
            <h1 className="title">Customer Favorites</h1>
            </div>
            
        <Slide {...slideProperties}>
          <div className="each-slide">
            <div >
                <img src={slideImages[0]}/>
              <span><p className="review">"Black Garlic Ramen"</p><p className="review-name">- Jane J.</p></span>
            </div>
          </div>
          <div className="each-slide">
            {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}> */}
            <div >
            <img src={slideImages[1]}/>
              <span><p className="review">"Miso Tonkotsu"</p><p className="review-name">- Sarah M.</p></span>
            </div>
          </div>
          <div className="each-slide">
            {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
            <div >
            <img src={slideImages[0]}/>
              <span><p className="review">"Spicy Miso Tonkotsu"</p><p className="review-name">- Michael S.</p></span>
            </div>
          </div>
        </Slide>
        </div>
  );
}

export default ScrollingImages;