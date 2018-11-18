import React, { Component } from "react";
import "../App.css";
import Burger from "./Burger";
import LoginIcon from "./LoginIcon";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Burger />
        <LoginIcon />
      </div>
    );
  }
}

export default Header;
