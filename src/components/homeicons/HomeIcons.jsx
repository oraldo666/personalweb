import React, { useState, useEffect } from "react";
import "./HomeIconsStyle.css";
import { DiReact } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";

function HomeIcons() {
  const [displayA, setDisplayA] = useState(false);
  const [displayL, setDisplayL] = useState(false);
  const [displayD, setDisplayD] = useState(false);
  const [displayO, setDisplayO] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayA(true);
    }, 2000);
    setTimeout(() => {
      setDisplayL(true);
    }, 2250);
    setTimeout(() => {
      setDisplayD(true);
    }, 2500);
    setTimeout(() => {
      setDisplayO(true);
    }, 2750);
  }, []);

  return (
    <div>
      <div className="home-icons-container">
        <DiReact className="home-icon-react" />
        <SiDjango className="home-icon-django" />
        <FaAws className="home-icon-aws" />
        <FiGithub className="home-icon-github" />
        <TbBrandPython className="home-icon-python" />
        <TbBrandJavascript className="home-icon-js" />
        <DiPhotoshop className="home-icon-photoshop" />
        <GrHeroku className="home-icon-heroku" />
      </div>
      <h1 className="home-name-text" >
        {" "}
        <span
          className={
            displayA
              ? "home-name-first-letter-show animate-font-size"
              : "home-name-first-letter"
          }
        >
          A
        </span>
        <span
          className={
            displayL
              ? "home-name-first-letter-show animate-font-size"
              : "home-name-first-letter"
          }
        >
          L
        </span>
        <span
          className={
            displayD
              ? "home-name-first-letter-show animate-font-size"
              : "home-name-first-letter"
          }
        >
          D
        </span>
        <span
          className={
            displayO
              ? "home-name-first-letter-show animate-font-size"
              : "home-name-first-letter"
          }
        >
          O
        </span>
      </h1>
    </div>
  );
}

export default HomeIcons;
