import React from "react";
import HomeIcons from "../../components/homeicons/HomeIcons";
import "./HomePageStyle.css";
import SocialMedia from "../../components/socialmediaicons/SocialMedia";

function HomePage() {
  return (
    <div>
      <div className="home-banner-container">
        <HomeIcons />
        <SocialMedia />
      </div>
    </div>
  );
}

export default HomePage;
