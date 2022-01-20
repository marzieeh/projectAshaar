import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import TarhBg from "../images/tarh1.png";
import "./ashaaar.css";
import "./ashaar2.css";

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

  // console.log(data);

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
              onClick={() => scrollTrick(-80)}
            >
              &#8249;
            </a>
            <a href="#" className="next round" onClick={() => scrollTrick(80)}>
              &#8250;
            </a>
          </div>

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
