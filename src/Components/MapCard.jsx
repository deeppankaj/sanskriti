import React from "react";
import { Link } from "react-router-dom";

const MapCard = ({ data }) => {
  const { images, mapName, priceRange } = data;
  return (
    <>
    
        <Link to={`/mapbook/haryana/${mapName}`} className="w-full sm:w-[45%] xl:w-[23%] bg-white xl:m-4 sm:m-2 p-3  border-0 rounded shadow overflow-hidden">
          <div className="border flex items-center justify-center w-full">
            <img src={images[0]} className="img-fluid" alt="" />
          </div>
          <div className="row gap-2">
                <div className="col-12">
                    <h5 className="text-center h6 py-2 text-md font-semibold">{mapName}</h5>
                </div>
                <div className="col-12">
                    <h5 className="text-center h6 font-bold text-blue-700">{priceRange}</h5>
                </div>
                <div className="col-12">
                    <Link to={`/mapbook/haryana/${mapName}`} className="btn btn-primary col-12"> Select Option</Link>
                </div>
          </div>
          
        </Link>

    </>
  );
};

export default MapCard;
