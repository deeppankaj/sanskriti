import React, { useEffect, useState } from "react";
import { GetUser } from "../utility/Data";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const user = GetUser();
  const defau =
    "flex sm:hidden fixed w-4/5 z-30 h-full border-2 bg-white shadow-md -left-full";
  const Toggled =
    "flex sm:hidden fixed  w-4/5 z-30 h-full border-2 bg-white top-[60px] -left-full shadow-md  animate-slide-fwd";
  const notToggleld =
    "flex sm:hidden  fixed top-[60px] w-4/5 z-30 h-full border-2 bg-white shadow-md  animate-slide-in ";

  const [togglemenu, setTogglemenu] = useState(defau);
  const [toggle, setToggle] = useState(true);
  const [cursorhere, setcursorhere] = useState(false);
  const [usehover, setUsehover] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    if (usehover) {
      if (!cursorhere) {
        setTimeout(() => {
          setUsehover(false);
        }, 1000);
      }
    }
  }, [usehover]);

  const isNotActiveStyle = "text-md pb-2 rounded-md";
  const isActiveStyle = "text-blue-600 pb-2 border-b-2 border-blue-600 ";

  const handletogglemenu = () => {
    if (togglemenu === defau || togglemenu === Toggled) {
      setTogglemenu(notToggleld);
      setToggle(false);
    } else {
      setTogglemenu(Toggled);
      setToggle(true);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.setItem("token", "none");
        navigate("/login");
        toast.info("Logut Sucessfully");
        window.location.reload()
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="container-b bg-white fixed z-[999] shadow-sm">
        <div className="flex container items-center h-[80px] gap-2 justify-between bg-white">
          <div className="sm:hidden right">
            <div className="flex " onClick={handletogglemenu}>
              {toggle && <FiMenu fontSize={25} />}
              {!toggle && <RxCross1 />}
            </div>
          </div>
          <Link to="/" className="center flex items-center">
            {/* <img className="w-10 hidden sm:flex h-10" src={logo} alt="logo" /> */}
            <p>Sanskriti Maps </p>
            {/* <img className="w-10 h-10 sm:hidden" src={logo} alt="logo" /> */}
          </Link>
          <div className="left z-10 max-sm:hidden font-thin">
            <ul className="flex gap-4 items-center">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  to="/mapbook/haryana"
                >
                  MapBook
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                {user ? (
                  <div className="flex items-center z-10 gap-2 ml-2 mr-4">
                    <div className="flex gap-2 items-center ">
                      <div className="w-10 h-10  justify-center items-center flex rounded-full">
                        {!user?.userImage ? (
                          <div className="">
                            <FaUserAlt
                            onMouseEnter={() => setUsehover(true)}

                              fontSize={25}
                              className="text-maincolor"
                            />
                          </div>
                        ) : (
                          <img
                            referrerPolicy="no-referrer"
                            onMouseEnter={() => setUsehover(true)}
                            className=" border-overlay cursor-pointer  rounded-full border-2 w-10 h-10 "
                            src={user?.userImage}
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="pl-10">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "btn btn-primary" : "btn btn-outline-primary"
                        }
                        to="/login"
                      >
                         Login
                      </NavLink>
                    </div>
                  </>
                )}
                {usehover && (
                  <>
                    <div
                      className="absolute flex flex-col transition delay-500 ease-in-out items-center p-4 pb-10 w-60 z-30 rounded-md border-2 mt-2 right-8 justify-center bg-white shadow-2xl"
                      onMouseEnter={() => setcursorhere(true)}
                      onMouseLeave={() => {
                        setUsehover(false);
                        setcursorhere(false);
                      }}
                    >
                      <img
                        referrerPolicy="no-referrer"
                        className="r p-1 border-overlay cursor-pointer  rounded-full border-2 w-16 h-16 "
                        src={user?.userImage}
                        alt=""
                      />
                      <p>{user?.userName}</p>
                      <p className="u_name w-48 text-center text-gray-400 ">
                        {user?.Email}
                      </p>
                      <div className="pt-4">
                        <NavLink
                          to="/uploadpapers"
                          className="btn btn-outline-info"
                        >
                          My Account
                        </NavLink>
                      </div>
                      <AiOutlineLogout
                        color="red"
                        onClick={handleLogout}
                        size={30}
                        className="absolute top-4 right-4 cursor-pointer"
                      />
                    </div>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-b bg-white h-[80px]"></div>

      <div className={togglemenu}>
        <div className=" p-5 pb-20 bg-white flex flex-col justify-between rounded-lg z-40  w-full text-lg">
          <ul
            className="flex flex-col w-full h-fit gap-6"
            onClick={handletogglemenu}
          >
            <li>
              <Link className="submenubtn" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="submenubtn" to="/mapbook">
                Mapbook
              </Link>
            </li>

            <li>
              <Link className="submenubtn" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="submenubtn" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="submenubtn" to="/">
                others
              </Link>
            </li>
          </ul>
          <div>
            {!user ? (
              <>
                <div className="flex shadow-lg z-20 bg-overlay items-center justify-between gap-2 px-4 py-2 ">
                  <p className="text-sm w-3/4 text-white">
                    Register to upload Papers
                  </p>
                  <Link onClick={handletogglemenu} to="/signup">
                    <h2 className="btn float-right text">SignUp</h2>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="flexshadow-lg bg-overlay  items-center justify-between gap-2 px-4 ">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="0  justify-center items-center flex rounded-full">
                        {user?.userImage === null ? (
                          <div className="">
                            <FaUserAlt
                              fontSize={25}
                              className="w-10 h-10 text-maincolor"
                            />
                          </div>
                        ) : (
                          <img
                            referrerPolicy="no-referrer"
                            className="r rounded-full m-2 w-[45px] h-[45px]"
                            src={user?.userImage}
                            alt=""
                          />
                        )}
                      </div>
                      <p className="text-sm">{user?.userName}</p>
                    </div>
                    <AiOutlineLogout
                      color="red"
                      onClick={handleLogout}
                      size={30}
                      className="bg-white rounded-full cursor-pointer"
                    />
                  </div>
                  {/* <BsCircleFill className='text-green-600' fontSize={10} /> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
