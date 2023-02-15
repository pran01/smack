import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import "../styles/AuthFirebase.css";
import PropTypes from "prop-types";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";

initializeApp(firebaseConfig);

export interface IAuthFirebase {}

const AuthFirebase: React.FunctionComponent<IAuthFirebase> = (props) => {
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user);
        setAuthing(false);
      })
      .catch((err) => {
        console.log(err);
        setAuthing(false);
      });
  };

  return (
    <React.Fragment>
      <div className="w-80 bg-transparent border-solid border-2 border-[#4285f4] text-[#4285f4] text-lg font-bold h-11 rounded flex items-center">
        <button
          className="w-full"
          onClick={() => signInWithGoogle()}
          disabled={authing}>
          Sign In With Google
        </button>
      </div>
    </React.Fragment>
  );
};

export default AuthFirebase;
