import React, { Component } from "react";
import "../App.css";
import MYtineraryLogo from "../images/MYtineraryLogo.png";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logoImage" src={MYtineraryLogo} />
      </div>
    );
  }
}

export default Logo;
