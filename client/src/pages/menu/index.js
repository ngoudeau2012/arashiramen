import React from "react";
import Navbar from "../../components/navbar";
import Logo from "../../assets/foodPhotos/logo2.png";
import Map from "../../assets/foodPhotos/arashiRamenMap.png";
import BannerImg from "../../components/bannerPhoto";
import Section from "../../components/section";
import ItemDescription from "../../components/itemDescription"
import FooterSpacer from "../../components/footerSpacer";
import Footer from "../../components/footer";
import ListCard from "../../components/listCard";
import ItemPhotoDescription from "../../components/itemPhotoDescription";
import MenuJson from "../../assets/menu.json";
import menuPhotos from "../../assets/foodPhotos/index";
import MenuNav from "../../components/menuNav";
import MenuTitle from "../../components/menuTitle";

let ramenArr = [];
let appetizerArr = [];
let nonPhotoAppArr = [];
let riceBowlArr = [];
let nonPhotoRiceArr = [];
let comboArr = [];
let nonPhotoComboArr = [];

MenuJson.map((item) => {
  if (item.photo === "shio_tonkotsu") {
    let newItem = { ...item, photo: menuPhotos.Shio };
    ramenArr.push(newItem);
  } else if (item.photo === "shoyu_tonkotsu") {
    let newItem = { ...item, photo: menuPhotos.Shoyu };
    ramenArr.push(newItem);
  } else if (item.photo === "miso_tonkotsu") {
    let newItem = { ...item, photo: menuPhotos.Miso };
    ramenArr.push(newItem);
  } else if (item.photo === "spicy_miso_tonkotsu") {
    let newItem = { ...item, photo: menuPhotos.SpicyMiso };
    ramenArr.push(newItem);
  } else if (item.photo === "arashi_ramen") {
    let newItem = { ...item, photo: menuPhotos.ArashiRamen };
    ramenArr.push(newItem);
  } else if (item.photo === "arashi_ramen") {
    let newItem = { ...item, photo: menuPhotos.ArashiRamen };
    ramenArr.push(newItem);
  } else if (item.photo === "black_garlic_ramen") {
    let newItem = { ...item, photo: menuPhotos.BlackGarlic };
    ramenArr.push(newItem);
  } else if (item.photo === "tantan_men") {
    let newItem = { ...item, photo: menuPhotos.TanTan };
    ramenArr.push(newItem);
  } else if (item.photo === "spicy_tantan_men") {
    let newItem = { ...item, photo: menuPhotos.SpicyTanTan };
    ramenArr.push(newItem);
  } else if (item.photo === "cold_sweet_soy_ramen") {
    let newItem = { ...item, photo: menuPhotos.SpicyTanTan };
    ramenArr.push(newItem);
  } else if (item.photo === "creamy_veggie_ramen") {
    let newItem = { ...item, photo: menuPhotos.CreamyVeggie };
    ramenArr.push(newItem);
  } else if (item.photo === "karaage") {
    let newItem = { ...item, photo: menuPhotos.Karaage };
    appetizerArr.push(newItem);
  } else if (item.photo === "honey_garlic_karaage") {
    let newItem = { ...item, photo: menuPhotos.HoneyGarlicKaraage };
    appetizerArr.push(newItem);
  } else if (item.photo === "gyoza") {
    let newItem = { ...item, photo: menuPhotos.Gyoza };
    appetizerArr.push(newItem);
  } else if (item.photo === "tokoyaki") {
    let newItem = item;
    nonPhotoAppArr.push(newItem);
  } else if (item.photo === "house_salad") {
    let newItem = item;
    nonPhotoAppArr.push(newItem);
  } else if (item.photo === "edamame") {
    let newItem = item;
    nonPhotoAppArr.push(newItem);
  } else if (item.photo === "chashu_bowl") {
    let newItem = { ...item, photo: menuPhotos.ChasuBowl };
    riceBowlArr.push(newItem);
  } else if (item.photo === "honey_garlic_karaage_bowl") {
    let newItem = { ...item, photo: menuPhotos.HoneyGarlicKaraageBowl };
    riceBowlArr.push(newItem);
  } else if (item.photo === "curry_bowl") {
    let newItem = item;
    nonPhotoRiceArr.push(newItem);
  } else if (item.photo === "soboro_bowl") {
    let newItem = item;
    nonPhotoRiceArr.push(newItem);
  } else if (item.photo === "3pcGyoza") {
    let newItem = { ...item, photo: menuPhotos.Gyoza };
    comboArr.push(newItem);
  } else if (item.photo === "karaageCombo") {
    let newItem = { ...item, photo: menuPhotos.Karaage };
    comboArr.push(newItem);
  } else if (item.photo === "honeyKaraageCombo") {
    let newItem = { ...item, photo: menuPhotos.HoneyGarlicKaraage };
    comboArr.push(newItem);
  } else if (item.photo === "tokoyakiCombo") {
    let newItem = item;
    nonPhotoComboArr.push(newItem);
  }
});

function Menu() {
  return (
    <div className="">
      <Navbar logo={Logo} />
      <Section>
        <ListCard>
          <MenuNav />
          <MenuTitle title="Ramen" />
          <div className="columns is-multiline is-mobile">
            {ramenArr.map((ramen) => (
              <ItemPhotoDescription item={ramen} colSize="2" />
            ))}
          </div>
          <MenuTitle title="Appetizers" />
          <div className="columns is-multiline is-mobile">
            {appetizerArr.map((appetizer) => (
              <ItemPhotoDescription item={appetizer} colSize="2" />
            ))}
            {nonPhotoAppArr.map((appetizer) => (
              <ItemDescription item={appetizer} colSize="1" />
            ))}
          </div>
          
          <MenuTitle title="Rice Bowls" />
          <div className="columns is-multiline is-mobile">
            {riceBowlArr.map((riceBowl) => (
              <ItemPhotoDescription item={riceBowl} colSize="2" />
            ))}
            {nonPhotoRiceArr.map((riceBowl) => (
              <ItemDescription item={riceBowl} colSize="1" />
            ))}
          </div>
          <MenuTitle title="Combos" subtitle="Any ramen + side salad + appetizer"/>
          <div className="columns is-multiline is-mobile">
            {comboArr.map((combo) => (
              <ItemPhotoDescription item={combo} colSize="2" />
            ))}
            {nonPhotoComboArr.map((combo) => (
              <ItemDescription item={combo} colSize="1" />
            ))}
          </div>
        </ListCard>
      </Section>
      <FooterSpacer />
      <Footer />
    </div>
  );
}

export default Menu;
