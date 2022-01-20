import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "./ashaaar.css";
import TarhBg from "../images/tarh1.png";
import NextBtn from "../images/next-btn.png";
import PrevBtn from "../images/prev-btn.png";
import "./ashaar2.css";

import axios from "axios";
import Slider from "react-slick";

function Ashaar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const nextBtnRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://ganjgah.ir/api/ganjoor/poets")
      .then((res) => setData(res.data.splice(0, 30)))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const buttonRight = document.getElementById("slideRight");
  //   const buttonLeft = document.getElementById("slideLeft");

  //   buttonRight.onclick = function () {
  //     document.getElementById("next").scrollLeft += 20;
  //   };
  //   buttonLeft.onclick = function () {
  //     document.getElementById("previous").scrollLeft -= 20;
  //   };
  // }, []);
  // useEffect(() => {
  //   // console.log("fdfd" + nextBtnRef);
  // }, [nextBtnRef]);
  // nativeEvent.explicitOriginalTarget.scrollLeft
  console.log(data);

  const scrollTrick = (scrollOffset) => {
    if (nextBtnRef) {
      nextBtnRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="poem--main--box">
      <img src={TarhBg} alt="" className="hero__pattern" />

      <div className="orange--box"></div>
      <div className="gray--box"></div>

      <div className="cards" ref={nextBtnRef}>
        <div className="container" id="container">
          <div className="btn__container">
            <a
              href="#"
              className="previous round"
              // onClick={() => scrollTrick(-20)}
              // (e) => {
              // this.scrollLeft -= 20;
              // document.getElementById("container").scrollLeft -= 20;
              // e.nativeEvent.explicitOriginalTarget.scrollLeft += 20;
              // console.log(e.nativeEvent.explicitOriginalTarget.scrollLeft);
              // }
              onClick={() => scrollTrick(-80)}
            >
              &#8249;
            </a>
            <a href="#" className="next round" onClick={() => scrollTrick(80)}>
              &#8250;
            </a>
          </div>

          {/* <img src={PrevBtn} alt="" />

          <img src={NextBtn} alt="" /> */}

          {data.map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => {
                window.localStorage.setItem("id", item.id);
                navigate("/ashaar/page2");
              }}
            >
              <img
                src={`https://ganjgah.ir${item.imageUrl}`}
                alt=""
                className="card--img"
              />
              <p className="card--name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ashaar;
