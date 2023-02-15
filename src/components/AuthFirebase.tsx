import React, {useEffect, useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import {useNavigate} from "react-router-dom";

import "../styles/AuthFirebase.css";
import PropTypes from 'prop-types';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebase';

initializeApp(firebaseConfig);

export interface IAuthFirebase {};

const AuthFirebase:React.FunctionComponent<IAuthFirebase> = (props) => {
    const auth = getAuth();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user);
            setAuthing(false);
        })
        .catch(err => {
            console.log(err);
            setAuthing(false);
        })
    }
    
    return (
    <>
    <button className='w-96 bg-transparent border-solid border-2 border-[#4285f4] text-[#4285f4] text-lg font-bold h-11 rounded flex justify-center items-center'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className ="h-5 w-5 mr-3"><g><path className ="c-third_party_auth__icon__google--red" fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path className ="c-third_party_auth__icon__google--blue" fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path className ="c-third_party_auth__icon__google--yellow" fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path className ="c-third_party_auth__icon__google--green" fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
        <button className='text-lg font-bold' onClick={() => signInWithGoogle()} disabled={authing}>Sign In With Google</button>
    </button>
    </>
  )
}



export default AuthFirebase;
