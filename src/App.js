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
import Carousel from "./Components/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Logo className="logo" />
        <PromoText className="promo-content" />
        <Browse className="arrowImage" />
        <CityGrid />
        <Carousel />
      </div>
    );
  }
}

export default App;
