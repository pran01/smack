import React, { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, } from 'firebase/firestore';

import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

import { onAuthStateChanged} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";

import { db } from "../firebase/firebase";

initializeApp(firebaseConfig);

export interface IAuthFirebase {}

const AuthFirebase: React.FunctionComponent<IAuthFirebase> = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (response) => {
        // console.log(response.user);

        const userData = {
          name: response.user.displayName,
          photoUrl: response.user.photoURL,
          email: response.user.email,
          status: true,
          uid: response.user.uid
        }

        localStorage.setItem("current_user",JSON.stringify(userData));

        const dbRef = collection(db, "users");
        await addDoc(dbRef, userData)
        .then(docRef => {
            console.log("Document has been added successfully");
            navigate("/client");
        })
        .catch(error => {
            console.log(error);
        })

        setAuthing(false);
      })
      .catch((err) => {
        console.log(err);
        setAuthing(false);
      });
  };

  console.log(auth);

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    // Fetch the list of Google-authenticated users
    onAuthStateChanged(getAuth(), (user) => {
      if (user && user.providerData) {
        const googleUsers = user.providerData.filter((userInfo) => {
          return userInfo.providerId === "google.com";
        });

        setUsers(googleUsers);
      }
    });
  }, []);

  console.log(users);

  return (
    <React.Fragment>
      <div className="w-96 bg-transparent border-solid border-2 border-[#4285f4] text-[#4285f4] text-lg font-bold h-11 rounded flex items-center">
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
