import React from 'react';
import { signInWithPopup } from "firebase/auth";
// import {  GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../configuration/Firebase';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        e.preventDefault()
        await signInWithPopup(auth, provider).then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            navigate('/');
        }).catch((err) => {
            const errorCode = err.code;
            const error = errorCode.splice(5)
        });
    }

    return (
        <>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-center'>or continue with</p>
                <button className='flex w-fit gap-2 p-1 rounded-full border-2 bg-white items-center justify-center' onClick={(e)=>handleSignUp(e)}>
                    <FcGoogle  fontSize={35} />
                </button>
            </div>
            

        </>
    )
}

export default GoogleLogin