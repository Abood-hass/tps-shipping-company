import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Calculator from "./components/Calculator";
import React from "react";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {


  return (
      <>
      <Routes>
          <Route path="/" element={ <><HomePage /> </>} />
          <Route path="/Calculator" element={ <><Calculator /> </>} />

      </Routes>
      </>

  );
};

export default App;
