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

  return (
    <div className="random--container">
      <div className="poet__box">
        <div className="poet__inner__box">
          <h1>{data.title}</h1>
          <div className="poem__box" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
      <div className="description__box">
        <h1>{poetData.poet && poetData.poet && poetData.poet.name}</h1>
        <div>{poetData && poetData.poet && poetData.poet.description}</div>
      </div>
    </div>
  );
}

export default AshaarTasadofi;
