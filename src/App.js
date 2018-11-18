import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo";
import PromoText from "./Components/PromoText";
import Browse from "./Components/Browse";
import BuildYourOwn from "./Components/BuildYourOwn";
import LoginOrCreate from "./Components/LoginOrCreate";
import Home from "./Components/Home";
import Header from "./Components/Header";
import CityGrid from "./Components/CityGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Logo className="logo" />
        <PromoText className="promo-content" />
        <Browse className="arrowImage" />
        <CityGrid />
      </div>
    );
  }
}

export default App;
