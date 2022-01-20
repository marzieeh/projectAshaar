import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./ashaar2.css";
import TarhBg from "../images/tarh1.png";
import axios from "axios";

function AshaarTasadofi() {
  const [data, setData] = useState([]);
  const [poetData, setPoetData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    axios
      .get(`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(id);
    axios
      .get(`https://ganjgah.ir/api/ganjoor/poet/${id}?catPoems=false`)
      .then((res) => setPoetData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const htmlText = data.htmlText;
  function createMarkup() {
    return { __html: htmlText };
  }

  //   console.log(poetData.poet.name);
  //   console.log(poetData.poet.description);
  // <div className="random--container">
  {
    /* <div className="poet__box">
        <div className="">
       
        </div>
      </div>
      <div className="description__box">
        <h1>{poetData.poet && poetData.poet && poetData.poet.name}</h1>
        <div>{poetData && poetData.poet && poetData.poet.description}</div>
      </div> */
  }

  // </div>
  return (
    <div className="poet--main--box">
      <img src={TarhBg} alt="" className="hero__pattern" />

      <div className="orange--box"></div>
      <div className="gray--box ">
        <h1>{poetData.poet && poetData.poet && poetData.poet.name}</h1>
        <div>{poetData && poetData.poet && poetData.poet.description}</div>
      </div>

      <div className="cards">
        <div className="container " id="container">
          <h1>{data.title}</h1>
          <div
            className="poem__box "
            dangerouslySetInnerHTML={createMarkup()}
          />
          {/* <div className="btn__container">
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
          </div> */}
          {/* <img src={PrevBtn} alt="" />

        <img src={NextBtn} alt="" /> */}
          {/* {data.map((item, index) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default AshaarTasadofi;
