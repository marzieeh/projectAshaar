import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import Tarh from "../images/tarh.png";
import BookImg from "../images/drawing-1.png";
import HeroText from "../images/heroText.png";
import MenuImg from "../images/header.png";
import LogoImg from "../images/logo.png";
// import HeroText from "";

function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero--container">
      <div className="header--menu">
        <img src={MenuImg} alt="" />
        <img src={LogoImg} alt="" />
      </div>
      <img src={Tarh} alt="" className="hero__pattern" />

      <div></div>
      <div className="introduction">
        <div className="introduction__inner__box">
          <img src={HeroText} alt="" />

          <div className="button__box">
            <button
              className="faal__btn"
              onClick={() => {
                navigate("fal");
              }}
            >
              فال حافظ
            </button>
            <button onClick={() => navigate("ashaar/page1")}>
              گنجینه اشعار
            </button>
          </div>
        </div>
        <img src={BookImg} alt="" className="text__img" />
      </div>
    </div>
  );
}

export default Hero;
