import React, { useEffect, useState } from "react";
import Logo from "../../assets/L.jpg";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import "./header.css";
import AnimatedLetters from "../AnimatedLetters";

import "aos/dist/aos.css";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "A",
    "d",
    "e",
    "y",
    "i",
    "n",
    "k",
    "a",
    " ",
    "A",
    "d",
    "e",
    "l",
    "u",
    "a",
    " ",
  ];
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    "-",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

    <div className="logo">
          <img
            className="logo-image"
            data-aos="slide-up"
            data-aos-anchor=".logo"
            data-aos-duration="1400"
            src={Logo}
            alt="me"
  
          />
        </div>

  return (
    <header>
      
      <article className="container header__container">
        <h5
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="1200"
        >
          Hello I'm
        </h5>
        <h1
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="1000"
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={nameArray.length}
          />
        </h1>
        <h5
          data-aos="fade-up"
          data-aos-anchor=".header__container"
          data-aos-duration="900"
          className="text-light"
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={jobArray.length}
          />
        </h5>
        <CTA />

        <HeaderSocial />

        {/* Code for the Logo */}

        <div className="logo">
          <img
            className="logo-image"
            data-aos="slide-up"
            data-aos-anchor=".logo"
            data-aos-duration="1400"
            src={Logo}
            alt="me"
  
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down {">>"}
        </a>
      </article>
    </header>
  );
};

export default Header;
