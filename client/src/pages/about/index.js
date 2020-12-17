import React from "react";
import Navbar from "../../components/navbar";
import Logo from "../../assets/foodPhotos/logo2.png";
import AbtImg from "../../assets/foodPhotos/about.png";
import BannerImg from "../../components/bannerPhoto";
import Section from "../../components/section";
import Text from "../../assets/text.json";
import TextArea from "../../components/textArea";
import SocialMedia from "../../components/socialMedia";
import FooterSpacer from "../../components/footerSpacer";
import Footer from "../../components/footer";
import Employees from "../../assets/employees.json";
import Headshot1 from "../../assets/foodPhotos/headshot1.png";
import Headshot2 from "../../assets/foodPhotos/headshot2.png";
import ListCard from "../../components/listCard";
import ItemPhotoDescription from "../../components/itemPhotoDescription";
import "./style.css";

let aboutUs = {};

Text.map((text) => {
  if (text.title === "About Us") {
    aboutUs = text;
    console.log(text);
  }
});

const employeeArr = [];

Employees.map((employee) => {
  if (employee.photo === "employee1" || "employee3" || "employee5") {
    const newEmployee = { ...employee, photo: Headshot1 };
    employeeArr.push(newEmployee);
  } else if (employee.photo === "employee2" || "employee4" || "employee6") {
    const newEmployee = { ...employee, photo: Headshot2 };
    employeeArr.push(newEmployee);
  }
});

function About() {
  return (
    <div className="">
      <Navbar logo={Logo} />
      <BannerImg img={AbtImg} />
      <Section>
        <TextArea title={aboutUs.title} body={aboutUs.bodyText} />
      </Section>

      <Section>
        <ListCard>
          <div className="titleDiv">
            <p className="title">Meet Our Team</p>
          </div>
          <div className="columns is-multiline is-mobile test">
            {employeeArr.map((employee) => (
              <ItemPhotoDescription item={employee} colSize="3"/>
            ))}
          </div>
        </ListCard>
        <SocialMedia />
      </Section>
      <FooterSpacer />
      <Footer />
    </div>
  );
}

export default About;
