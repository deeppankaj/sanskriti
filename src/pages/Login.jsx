import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configuration/Firebase";
import { useParams } from "react-router-dom";
import { GoogleLogin } from "../utility";
import { toast } from "react-toastify";

const Login = () => {
  const [inputvalue, setInputvalue] = useState({
    Email: "",
    Password: "",
  });
  const [errmsg, setErrmsg] = useState("");
  const [userexists, setUserexists] = useState({
    userName: "",
    userEmail: "",
    userexist: false,
  });
  const navigate = useNavigate();
  const id = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputvalue.Email || !inputvalue.Password) {
      setErrmsg("Fill all the field");
      setTimeout(() => setErrmsg(""), 1000);
    } else {
      signInWithEmailAndPassword(auth, inputvalue.Email, inputvalue.Password)
        .then((res) => {
          const user = res.user;
          localStorage.setItem('token',user.uid)
          toast.success("Login Sucessfully")
          navigate("/");
          window.location.reload()
        })
        .catch((err) => {
          const er = err.code.slice(5);
          const error = `Error : ${er}`;
          setErrmsg(error);
        });
    }
  };

  return (
    <>
      <div className="h-full w-full bg-gray-100">
        <div className=" flex justify-center items-center ">
          <div className="flex flex-col p-2 sm:p-10  sm:mt-10 rounded-xl my-10  form_container w-4/5 sm:w-[600px] ">
            <form className="w-full my-5 border-2 p-4 sm:p-10 py-10 shadow-lg rounded-md border-purple-700">
              <h2 className="font-bold text-center text-xl">
                ! Welcome back to <br />
                SansKriti Maps
              </h2>
              <div className="flex flex-col my-2">
                <label className="text-md pb-1">E-mail:</label>
                <input
                  type="text"
                  className="input_group "
                  onChange={(e) =>
                    setInputvalue({ ...inputvalue, Email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="text-md pb-1">Password :</label>
                <input
                  type="password"
                  className="input_group "
                  onChange={(e) =>
                    setInputvalue({ ...inputvalue, Password: e.target.value })
                  }
                />
              </div>

              <p className="text-xl text-red-600">{errmsg}</p>
              <button
                className="btn btn-primary col-12 my-4 "
                onClick={handleSubmit}
              >
                Login
              </button>
              <GoogleLogin />

              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">
                  Don't have an account ?
                </h3>
                <Link
                  to="/signup"
                  className="mx-3 text-lg text-maincolor text-bold hover:text-blue-700"
                >
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
