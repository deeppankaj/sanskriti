import React from "react";
import HomeCarasouel from "./HomeCarasouel";
import intro from "../../assets/intro.gif";
import Service from "./Service";
import Associate from "./Associate";

const Home = () => {
  return (
    <div className="container mt-6">
      <div className="mb-10">
        <img src={intro} alt="" />
      </div>
      <div className="md:p-10" style={{background:"url()"}}>
        <h2 className="h4 md:h1 text-center px-4 md:mx-4" style={{ fontWeight: 600, fontSize:"2.4rem" }}>
          City Maps, Builder Maps, Sector or Area Maps and location
        </h2>
        <div className="flex justify-center w-full">
          {" "}
          <p className="text-center text-sm md:text-lg md:w-[60%] px-8 mb-4">
            for people involved in colonisation, society development, city
            development, property sale and purchase.
          </p>
        </div>

        <div className="flex justify-center w-full mb-4">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
      <div>
      <Service/>
      <Associate/>
      </div>
      <HomeCarasouel />
    </div>
  );
};

export default Home;
