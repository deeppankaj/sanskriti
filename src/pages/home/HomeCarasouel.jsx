import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Link } from "react-router-dom";

const HomeCarasouel = () => {
  return (
    <Carousel interval={2000} className="z-10">
      <Carousel.Item>
        <div className=" align-items-center w-100 ">
          <img
            src="https://sanskritigroup.com/wp-content/uploads/2021/03/Slide-1-min.jpg"
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" align-items-center w-100 ">
          <img
            src="https://sanskritigroup.com/wp-content/uploads/2021/03/Slide-2-min.jpg"
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" align-items-center w-100 ">
          <img
            src="https://sanskritigroup.com/wp-content/uploads/2021/03/Slide-3-min.jpg"
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className=" align-items-center w-100 ">
          <img
            src="https://sanskritigroup.com/wp-content/uploads/2021/03/Slide-4-min.jpg"
            alt=""
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarasouel;
