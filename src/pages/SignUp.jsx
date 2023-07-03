import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import GoogleLogin from '../utility/GoogleLogin';
import { FaUser } from 'react-icons/fa';
// import background from '../assests/background.mp4';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { database } from '../configuration/Firebase';
import { doc, setDoc } from '@firebase/firestore';
import { toast } from 'react-toastify';


const SignUp = () => {

  const [inputvalue, setInputvalue] = useState({
    userName: '',
    Email: '',
    Password: '',
    userImage: ''
  });

  const [errmsg, setErrmsg] = useState('');
  const [submitbtndisable, setSubmitbtndisable] = useState(false);
  const { userName, userImage, Email, Password } = inputvalue;

  const auth = getAuth();
  const navigate = useNavigate();

  const addDocument = async (user) => {
    debugger
    try {
      await setDoc(doc(database, "user", user.uid), {
        userName,
        userImage,
        Email,
        Password,
        isAdmin: false,
      });
      setSubmitbtndisable(false);
      toast.success("Registered Sucessfully")
      localStorage.setItem('token',user.uid)
      navigate('/');
      window.location.reload();
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updateuser = async (user) => {
    debugger
    try {
      await updateProfile(user, {
        displayName: inputvalue.userName,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitbtndisable(true)
    try {
      let user = await createUserWithEmailAndPassword(auth, inputvalue.Email, inputvalue.Password);
      console.log(user.user)
      updateuser(user.user);
      addDocument(user.user);
    } catch (error) {
      setSubmitbtndisable(false);
      const er = error.code.slice(5);
      // const error = `Error : ${er}`;
      setErrmsg(er);
    }
  }

  const handleimg = (e) => {
    const file = e.target.files[0]
    // console.log(e.target.files[0])
    const reader = new FileReader();
    if (file.type.includes("image") && file.size < 2000000) {
      reader.onload = (e) => {
        // console.log(e.target.result)
        setInputvalue({ ...inputvalue, userImage: e.target.result })
        // console.log(userImage)
      }
      reader.readAsDataURL(file)
    }
  }


  return (
    <>
            
          <div className=' w-full flex justify-center items-center'>
            <div className='flex flex-col p-4 md:p-8 rounded-lg md:w-[600px] form_container w-[90vw] '>

              <form className='w-full my-5 border-2 p-4 sm:p-10 py-10 shadow-lg rounded-md border-purple-700'
                onSubmit={(e) => handleSubmit(e)}
              >
                <h2 className='font-bold text-center text-xl'>! Register with us to continue the journey of Sanskriti Maps</h2>
                <div className='w-full my-1 mt-5   '>
                  <div className='flex flex-col w-full overflow-hidden'>
                    <div className='text-md  items-center flex justify-center  md:40 w-full '>
                      {userImage === '' && (<div className='flex flex-col items-center justify-between'>
                        <FaUser className='border-2  border-black rounded-full p-1' fontSize={30} />
                        <p>Upload your Avatar</p>
                        {/* <div>{message && (<p className='hidden md:flex text-green-600 float-left'>{message}</p>)}</div> */}

                      </div>)}
                    </div>
                    {userImage !== '' && (<div className='w-full flex justify-center mb-2 items-center'>
                      <img className='w-16 h-16 rounded-full border-2' src={userImage} alt='' />

                    </div>)}
                    <input type='file' className='absolute z-10 w-[70%] md:[41px] opacity-0 border-2' onChange={(e) => handleimg(e)} />
                  </div>
                </div>
                <div className='flex flex-col my-1'>
                  <label className='text-md p-1'>Name:</label>
                  <input type='text' className='input_group ' required onChange={(e) => setInputvalue({ ...inputvalue, userName: e.target.value })} />
                </div>

                <div className='flex flex-col my-1'>
                  <label className='text-md pb-1'>E-mail:</label>
                  <input type='email' className='input_group ' required onChange={(e) => setInputvalue({ ...inputvalue, Email: e.target.value })} />
                </div>
                <div className='flex flex-col my-1'>
                  <label className='text-md pb-1'>Password :</label>
                  <input type='password' className='input_group ' required onChange={(e) => setInputvalue({ ...inputvalue, Password: e.target.value })} />
                </div>


                <p className='text-xl text-red-600'>{errmsg}</p>
                {/* <div>{message && (<p className=' md:hidden m-1 text-green-600 float-left'>{message}</p>)}</div> */}
                <button disabled={submitbtndisable} type="submit"
                  className='w-full my-4 p-2 rounded-md bg-blue-700 text-white  disabled:bg-red-600 '  >
                  Signup
                </button>
                <GoogleLogin />

                <div className='flex items-center justify-between'>
                  <h3 className='text-md font-semibold'>Already have an account?</h3>
                  <Link to='/login' className='mx-3 text-lg text-maincolor text-bold'>Login</Link>
                </div>
              </form>
            </div>

          </div>
       </>
  )
}

export default SignUp;