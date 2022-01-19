import React from "react";
import Hero from "./pages/hero";
import Fal from "./pages/fal";
import Ashaar1 from "./pages/ashaar";
import Ashaar2 from "./pages/ashaar2";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="fal" element={<Fal />} />
        <Route path="ashaar/page1" element={<Ashaar1 />} />
        <Route path="ashaar/page2" element={<Ashaar2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
