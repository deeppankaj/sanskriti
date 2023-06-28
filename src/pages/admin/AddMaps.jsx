import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { addFirebaseDoc, GetDoc } from "../../configuration/Firebasecontrol";

const AddMaps = () => {
  const dummy = {
    mapName: "",
    priceRange: "",
    paperQty: "",
    cover: "",
    print: "",
    lamination: "",
    bindings: [],
    images: [],
  };
  const [formdata, setformdata] = useState(dummy);

  const handleDyanicInputsbind = (event, i) => {
    let inputData = [...formdata.bindings];
    inputData[i] = event.target.value;
    setformdata({ ...formdata, bindings: inputData });
  };
  const handleDyanicInputsimg = (event, i) => {
    let inputData = [...formdata.images];
    inputData[i] = event.target.value;
    setformdata({ ...formdata, images: inputData });
  };
  const AddInputBar = (e, field) => {
    e.preventDefault();
    switch (field) {
      case "binding":
        const binding = [...formdata.bindings, []];
        setformdata({ ...formdata, bindings: binding });
        break;
      case "image":
        const image = [...formdata.images, []];
        setformdata({ ...formdata, images: image });
        break;
      default:
        break;
    }
  };
  const deleteBar = (e, i, field) => {
    e.preventDefault();
    let delval;
    switch (field) {
      case "binding":
        delval = [...formdata.bindings];
        delval.splice(i, 1);
        setformdata({ ...formdata, bindings: delval });
        break;
      case "image":
        delval = [...formdata.images];
        delval.splice(i, 1);
        setformdata({ ...formdata, images: delval });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    addFirebaseDoc(formdata,"Maps",formdata.mapName)
    setformdata(dummy)    
  }
  return (
    <div className="container-b  bg-white m-10">
      <form className="p-10" onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputpaperqty4">Map Name</label>
            <input
              type="mapName"
              className="form-control"
              id="inputmapName4"
              value={formdata.mapName} onChange={(e) => setformdata({ ...formdata, mapName: e.target.value })}
              placeholder="Enter Map Name : "
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputpriceRange4">Price Range</label>
            <input
              type="priceRange"
              className="form-control"
              id="inputpriceRange4"
              value={formdata.priceRange} onChange={(e) => setformdata({ ...formdata, priceRange: e.target.value })}
              placeholder="Enter Price Range"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputpaperqty4">Paper Quality</label>
            <input
              type="text"
              className="form-control"
              id="inputpaperqty4"
              placeholder="Enter Paper Quality : "value={formdata.paperQty} onChange={(e) => setformdata({ ...formdata, paperQty: e.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputcover4">Enter Cover</label>
            <input
              type="text"
              className="form-control"
              id="inputcover4"
              placeholder="Enter cover : "
              value={formdata.cover} onChange={(e) => setformdata({ ...formdata, cover: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputprint4">Print</label>
            <input
              type="text"
              className="form-control"
              id="inputprint4"
              placeholder="Enter Print Quality : "value={formdata.print} onChange={(e) => setformdata({ ...formdata, print: e.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input4lam">Lamination</label>
            <input
              type="text"
              className="form-control"
              id="inputcover4"
              placeholder="Enter Lamination : "
              value={formdata.lamination} onChange={(e) => setformdata({ ...formdata, lamination: e.target.value })}
            />
          </div>
        </div>
        <div className="input-container flex-col w-full my-2 ">
          <div className="flex justify-between w-full items-center">
            <label className="text-md">
              Add Proucts Bindings for this Product
            </label>
            <button
              onClick={(e) => AddInputBar(e, "binding")}
              className="btn btn btn-primary bg-blue-500"
            >
              Add
            </button>
          </div>
          {formdata.bindings.map((ele1, i) => {
            return (
              <div
                key={i}
                className="flex my-1 w-full items-center justify-between p-1"
              >
                <div className="inputGroup w-[90%]">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={ele1}
                      onChange={(e) => handleDyanicInputsbind(e, i, "binding")}
                      required
                      id="Bindings"
                      placeholder="Enter Binding"
                    />
                  </div>
                </div>
                <div
                  onClick={(e) => deleteBar(e, i, "binding")}
                  className="btn btn btn-danger mb-3"
                >
                  <MdDelete fontSize={20} color="white" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="input-container flex-col w-full my-2 ">
          <div className="flex justify-between w-full items-center">
            <label className="text-md">
              Add Proucts Images for this Product
            </label>
            <button
              onClick={(e) => AddInputBar(e, "image")}
              className="btn btn btn-primary bg-blue-500"
            >
              Add
            </button>
          </div>
          {formdata.images.map((ele1, i) => {
            return (
              <div
                key={i}
                className="flex my-1 w-full items-center justify-between p-1"
              >
                <div className="inputGroup w-[90%]">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={ele1}
                      onChange={(e) => handleDyanicInputsimg(e, i, "image")}
                      required
                      id="images"
                      placeholder="Enter images : "
                    />
                  </div>
                </div>
                <div
                  onClick={(e) => deleteBar(e, i, "image")}
                  className="btn btn btn-danger mb-3"
                >
                  <MdDelete fontSize={20} color="white" />
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
};

export default AddMaps;
