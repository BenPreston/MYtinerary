import React, { Component } from "react";
import "../App.css";
import Barcelona from "../images/barcelona.jpeg";
import NewYork from "../images/newYork.jpeg";
import Amsterdam from "../images/amsterdam.jpeg";
import Paris from "../images/paris.jpeg";

class CityGrid extends Component {
  render() {
    return (
      <div className="pictureGrid">
        <div className="picRow">
          <div className="picCol">
            <h3>Barcelona</h3>
            <img className="cityImage" src={Barcelona} />
          </div>
          <div className="picCol">
            <h3>New York</h3>
            <img className="cityImage" src={NewYork} />
          </div>
        </div>
        <div className="picRow">
          <div className="picCol">
            <h3>Amsterdam</h3>
            <img className="cityImage" src={Amsterdam} />
          </div>
          <div className="picCol">
            <h3>Paris</h3>
            <img className="cityImage" src={Paris} />
          </div>
        </div>
      </div>
    );
  }
}

export default CityGrid;
