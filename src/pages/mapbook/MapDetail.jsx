import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GetDoc } from "../../configuration/Firebasecontrol";
import { Bars } from "react-loader-spinner";
import { GetUser } from "../../utility/Data";
import DownloadMap from "../../utility/DownloadMap";
import { PDFDownloadLink } from "@react-pdf/renderer";


const MapDetail = () => {
  const mapname = useLocation().pathname.split("/")[3].split("%20").join(" ");
  const data = GetDoc("Maps", mapname);
  const user = GetUser();
  const [binding, setBinding] = useState("");
  const [price, setPrice] = useState("");

  const mapdata= {
    name: user?.userName,
    mapImg:data?.images[0],
    mapname,
    binding,
    price
  }
  
  const handleClick = (bind) => {
    setBinding(bind);
    const price = bind.split("-")[1];
    setPrice(price);
  };

  return (
    <>
      <div className="col-12 bg-blue-800 ">
        <div className="stateView container py-20 mb-20 w-[80%">
          <h1
            className="text-[2rem] text-white uppercase"
            style={{ fontWeight: "800" }}
          >
            {mapname}
          </h1>
          <div className="w-16 h-[2px]"></div>
        </div>
      </div>
      {data ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={data.images[0]} alt="" />
            </div>
            <div className="col-md-6">
              <div className="row gap-2">
                <h1
                  className="text-[1.6rem] uppercase col-12"
                  style={{ fontWeight: "800" }}
                >
                  {mapname}
                </h1>
                <h1
                  className="text-blue-600 text-[1rem] uppercase col-12"
                  style={{ fontWeight: "800" }}
                >
                  {data.priceRange}
                </h1>
                <div className="col-12">
                  <div className="flex border-[1px] border-black col-12 col-md-10 gap-2">
                    <p className="h6 font-bold  p-2 ">Binding :</p>
                    <p className="p-2">Spiral Binding/Perfect Binding</p>
                  </div>
                  <div className="flex border-[1px] border-black col-12 col-md-10 gap-2">
                    <p className="h6 font-bold  p-2 ">Paper Quality :</p>
                    <p className="p-2">{data.paperQty}</p>
                  </div>
                  <div className="flex border-[1px] border-black col-12 col-md-10 gap-2">
                    <p className="h6 font-bold  p-2 ">Cover :</p>
                    <p className="p-2">{data.cover}</p>
                  </div>
                  <div className="flex border-[1px] border-black col-12 col-md-10 gap-2">
                    <p className="h6 font-bold  p-2 ">Print :</p>
                    <p className="p-2">{data.print}</p>
                  </div>
                  <div className="flex border-[1px] border-black col-12 col-md-10 gap-2">
                    <p className="h6 font-bold  p-2 ">Lamination :</p>
                    <p className="p-2">{data.lamination}</p>
                  </div>
                </div>
                {data.bindings.map((bind, i) => (
                  <div key={i} className="col-12">
                    <button
                      onClick={() => {
                        handleClick(bind);
                      }}
                      className="btn btn-outline-primary"
                    >
                      {bind}
                    </button>
                  </div>
                ))}
                <div className="flex col-12 col-md-10 gap-2">
                  <p className="h6 font-bold  p-2 ">Paper Quality :</p>
                  <p className="p-2">{binding}</p>
                </div>
                <div className="flex col-12 col-md-10 gap-2 -mt-2">
                  <p className="h6 font-bold  p-2 ">Paper Quality :</p>
                  <p className="p-2">{price}</p>
                </div>
                <div className="col-12">
                  <PDFDownloadLink

                    document={<DownloadMap data={mapdata} user={user} img={data?.images[0]} mapn={mapname}/>}
                    fileName="map.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      <button className="btn btn-primary col-6">
                      {" "}
                      Download PDF
                    </button>
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12 row items-center justify-center p-5">
          <Bars
            height="80"
            width="80"
            color="skyblue"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <div className="none d-none">
      {/* <DownloadMap user={user} img={data?.images[0]} mapn={mapname} className="none"/> */}
      </div>
    </>
  );
};

export default MapDetail;
