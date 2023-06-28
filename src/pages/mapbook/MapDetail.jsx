import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { GetDoc } from "../../configuration/Firebasecontrol";
import { Bars } from "react-loader-spinner";
import ReactToPrint from "react-to-print";
import { GetUser } from "../../utility/Data";

const MapDetail = () => {
  const mapname = useLocation().pathname.split("/")[3].split("%20").join(" ");
  const data = GetDoc("Maps", mapname);
  const user = GetUser();
  const [binding, setBinding] = useState("");
  const [price, setPrice] = useState("");
  const [printable, setPrintable] = useState(true)
  const handleClick = (bind) => {
    setBinding(bind);
    const price = bind.split("-")[1];
    setPrice(price);
  };
  const componentRef = useRef();

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
                  <ReactToPrint
                  onClick={()=>setPrintable(false)}
                    trigger={() => (
                      <button className="btn btn-primary col-6">
                        {" "}
                        Download{" "}
                      </button>
                    )}
                    content={() => componentRef.current}
                  />
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
      
      {printable&&<div className="container p-10 bg-white" ref={componentRef}>
        <h1 className="h1 text-center">Snaskriti Maps</h1>
        <div className="col-12 flex justify-center items-center my-10 ">
          <img src={data?.images[0]} alt="" />
        </div>
        <div className="col-12 row">
          <div className="flex col-12 col-md-10 gap-2 mt-2">
            <p className="h6 font-bold  p-2 ">Name :</p>
            <p className="p-2">{user?.userName}</p>
          </div>
          <div className="flex col-12 col-md-10 gap-2">
            <p className="h6 font-bold  p-2 ">Email :</p>
            <p className="p-2">{user?.Email}</p>
          </div>
        </div>
      </div>}
    </>
  );
};

export default MapDetail;
