import React from "react";

import M from "materialize-css";

const Carousel = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, { duration: 200 });
  });
  return (
    <div className="carousel">
      <a className="carousel-item" href="#one!">
        <img src="https://lorempixel.com/250/250/nature/1" />
      </a>
      <a className="carousel-item" href="#two!">
        <img src="https://lorempixel.com/250/250/nature/2" />
      </a>
      <a className="carousel-item" href="#three!">
        <img src="https://lorempixel.com/250/250/nature/3" />
      </a>
      <a className="carousel-item" href="#four!">
        <img src="https://lorempixel.com/250/250/nature/4" />
      </a>
      <a className="carousel-item" href="#five!">
        <img src="https://lorempixel.com/250/250/nature/5" />
      </a>
    </div>
  );
};

export default Carousel;
