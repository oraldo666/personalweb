import React from "react";
import "./AboutPageStyle.css";

import AboutIntro from "../../components/aboutpagecomponents/AboutIntro";
import AboutPresantation from "../../components/aboutpagecomponents/AboutPresantation";

function AboutPage() {
  return (
    <div className="about-page-container">
      <AboutIntro />
      <AboutPresantation />
    </div>
  );
}

export default AboutPage;
