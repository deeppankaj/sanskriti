import React from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import {
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiMapPin,
  FiChevronRight,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 bg-slate-900 text-white px-4">
      <div className="container mb-2">
        <div className="row">
          <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-4 pb-md-2">
            <h5 className="h6" style={{ fontWeight: "600" }}>
              Company Details
            </h5>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <address
                  to="/"
                  className=" items-start text-sm mb-2 flex gap-2 text-white"
                >
                  <FiMapPin fontSize={18} color={"red"} /> Address: 74, Sant
                  Nagar, Near East Of Kailash, New Delhi – 110065
                </address>
              </li>
              <li>
                <address
                  to="/"
                  className=" items-center text-sm mb-2 flex gap-2 text-white"
                >
                  <FiMapPin fontSize={18} color={"red"} /> 427, Sector 15,
                  Panchkula, Haryana – 134113
                </address>
              </li>
              <li>
                <address
                  to="/"
                  className=" items-center text-sm mb-2 flex gap-2 text-white"
                >
                  <FiMapPin fontSize={18} color={"red"} /> V.S Enterprises
                  <br />
                  Authorised Distributor ( Delhi NCR)
                  <br />
                  C-22, Ground Floor, Dayal Bagh, Near Charmwood, Faridabad
                  121009
                </address>
              </li>
              <li>
                <div className=" items-center text-sm mb-2 flex gap-2 text-white">
                  <BsFillTelephoneFill />
                  <a href="tel:+91 8130100046" className="text-sm text-white ">
                    +91-8130100046, +91-9910582177
                  </a>
                </div>
              </li>
              <li>
                <div className=" items-center  flex gap-2 text-white">
                  <BsEnvelope fontSize={18} />
                  <a
                    href="mailto:sanskriti.eazimaps@gmail.com"
                    className="text-white text-sm"
                  >
                    sanskriti.eazimaps@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-7 col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 pb-4">
                <h5 className="h6" style={{ fontWeight: "600" }}>
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 pb-4">
                <h5 className="h6" style={{ fontWeight: "600" }}>
                  Our Products
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> EaziMaps
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="flex gap-2 text-white text-sm mb-2">
                      <FiChevronRight /> Master Plans
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 pb-4">
                <h5 className="h6" style={{ fontWeight: "600" }}>
                  Help & Support
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li className="d-flex align-items-center">
                    <Link to={"/"} className="text-white link text-sm mb-2">
                      My Account
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link to={"/"} className="text-white link text-sm mb-2">
                      Last Password
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link to={"/"} className="text-white link text-sm mb-2">
                      Term & Confdition
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link
                      to={"/mapbook"}
                      className="text-white link text-sm mb-2"
                    >
                      Privacy policy
                    </Link>
                  </li>
                </ul>
                <ul className="flex gap-2 mb-0 mt-4">
                  <li className="p-2 border rounded-full w-10">
                    <FiFacebook fontSize={20} color="gray" />
                  </li>
                  <li className="p-2 border rounded-full w-10">
                    <FiInstagram fontSize={20} color="gray" />
                  </li>
                  <li className="p-2 border rounded-full w-10">
                    <FiTwitter fontSize={20} color="gray" />
                  </li>
                  <li className="p-2 border rounded-full w-10">
                    <FiLinkedin fontSize={20} color="gray" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-2">
        <div className="col-12">
          <div className="text-sm-start text-center">
            <div className="mb-0 flex items-center justify-center gap-2">
             
              {new Date().getFullYear()} © Sanskriti Maps Design with{" "}
              <FiHeart fill="red" color="red" /> by{" "}
              DeepNapSoftTech Project
              .
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
