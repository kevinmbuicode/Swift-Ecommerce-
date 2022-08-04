import React from "react";
import background from "../assets/bground.jpg";
import Products from './Products'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={background}
          className="card-img"
          alt="background_image"
          height="550px"
        />
        <div className="card-img-overlay">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
