import React from 'react';
import Navbar from '../../components/navbar';
import Logo from "../../assets/foodPhotos/logo2.png"
import Map from "../../assets/foodPhotos/arashiRamenMap.png"
import BannerImg from '../../components/bannerPhoto';
import Section from '../../components/section';
import Text from '../../assets/text.json'
import TextArea from '../../components/textArea';
import ScrollingImages from '../../components/scrollingImages'
import SocialMedia from '../../components/socialMedia';
import FooterSpacer from '../../components/footerSpacer';
import Footer from '../../components/footer';
import LocationText from '../../components/locationsText';

let ourStory = {}

Text.map(text => {
  if(text.title === "Our Story"){
    ourStory = text
    console.log(text)
  }
})

function Location() {
  return (
    <div className="">
      <Navbar logo={Logo}/>
      <BannerImg img={Map}/>
      <Section>
        <LocationText />
      </Section>
      
      <Section>
        <SocialMedia />
      </Section>
      <FooterSpacer />
      <Footer />
    </div>
  );
}

export default Location;