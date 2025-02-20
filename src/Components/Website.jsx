import React from "react";
import Section from "./Section";
import Developer from "./Developer";
import Luxury from "./Luxury";
import Floor from "./Floor";
import Photogallery from "./Photogallery";
import Comment from "./Comment";
import "../Styles/Website.css"
import Location from "./Location";
import Startgey from "./Startgey";
import Backvideo from "./Backvideo";
import Readyapartment from "./Readyapartment";
import Section1 from "./Section1";

const Website = () => {
  return (
    <>
      <Section />
      <Section1/>
      {/* <Developer />  ya bhut mushkil ha ya nahi bna ga */} 
      <Luxury />
      {/* <Floor /> */}
      <Photogallery />
      <Comment />
      <Location />
      <Startgey />
      <Backvideo />
      <Readyapartment />
    </>
  );
};

export default Website;
