//stackoverflow.com/questions/19266197/reactjs-convert-html-string-to-jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "./fal.css";

function Faal() {
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data)
      setAudio(
        data &&
          data.recitations &&
          data.recitations[0] &&
          data.recitations[0].mp3Url
      );
  }, [data]);

  const htmlText = data.htmlText;

  function createMarkup() {
    return { __html: htmlText };
  }

  return (
    <div className="fal--container">
      <div className="main__box__container">
        <div className="center__box poem__box">
          <h1>{data.title}</h1>
          <div className="poem__box" dangerouslySetInnerHTML={createMarkup()} />
          <audio
            className="audio__show"
            type="audio/ogg"
            controls
            autoPlay
            src={audio}
          ></audio>
        </div>
        {/* <div className="poem__box">h</div> */}

        <button className="back__home__btn" onClick={() => navigate("/")}>
          بازگشت به صفحه
        </button>
      </div>

      {/* {htmlText} */}
    </div>
  );
}

export default Faal;
