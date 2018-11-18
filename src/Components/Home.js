import React from "react";
import "../App.css";
import HomePhoto from "../images/HomePhoto.png";

const Home = () => {
  return (
    <div className="home">
      <img className="homeLogo" src={HomePhoto} alt="Home Icon" />
    </div>
  );
};

export default Home;
