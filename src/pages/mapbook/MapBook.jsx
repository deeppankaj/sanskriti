import React, {  } from "react";
import map from "../../assets/map.png";
import { Link, useLocation } from "react-router-dom";
import { GetCollection } from "../../configuration/Firebasecontrol";
import MapCard from "../../Components/MapCard";

const MapBook = () => {
  const pathname = useLocation().pathname.split("/")[2];
  const states = ["Delhi", "haryana", "rajasthan", "Punjab", "Uttar Pardesh"];
  const maps = GetCollection("Maps")

  return (
    <>
      <div className="col-12 bg-blue-800 ">
      <div className="stateView container py-20 mb-20">
        <h1
          className="h1 text-white pl-12 uppercase"
          style={{ fontWeight: "800" }}
        >
          {pathname}
        </h1>
        <div className="w-16 h-[2px] ml-12"></div>
      </div>
      </div>
      <div className="stateContainer col-12 my-5" >
        <div className="flex flex-wrap gap-2 justify-start container">
          {states.map((state, i) => {
            return (
              <Link
                to={`/mapbook/${state}`}
                key={i}
                className="border flex gap-3 items-center hover:border-2 cursor-pointer border-blue-600  hover:shadow-md py-3 m-4 px-6 hover:shadow-blue-600"
              >
                <img src={map} alt="map" className="w-10 rounded-full" />
                {state}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="productcontainer container col-12">
        <div className="row px-4 justify-center">
          {maps?.map((map,i)=>{
            return (
            <MapCard key={i} data={map}/>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default MapBook;
