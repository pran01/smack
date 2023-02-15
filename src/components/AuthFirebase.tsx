import React, { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
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
