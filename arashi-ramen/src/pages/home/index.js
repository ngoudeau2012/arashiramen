import React from 'react';
import Navbar from '../../components/navbar';
import Logo from "../../assets/foodPhotos/logo2.png"
import Banner1 from "../../assets/foodPhotos/banner1.jpg"
import BannerImg from '../../components/bannerPhoto';
import Section from '../../components/section';
import Text from '../../assets/text.json'
import TextArea from '../../components/textArea';
import ScrollingImages from '../../components/scrollingImages'

let ourStory = {}

Text.map(text => {
  if(text.title === "Our Story"){
    ourStory = text
    console.log(text)
  }
})

function Home() {
  return (
    <div className="">
      <Navbar logo={Logo}/>
      <BannerImg img={Banner1}/>
      <Section>
        <TextArea 
        title={ourStory.title}
        body={ourStory.bodyText}
        />
        
      </Section>
      <ScrollingImages />
      
    </div>
  );
}

export default Home;
