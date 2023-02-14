import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";

import PropTypes from 'prop-types'


export interface IAuthRouteProps {
    children: React.FunctionComponent;
};

const AuthRoute:React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();


    useEffect(() => {
        AuthCheck();
    }, [])

    const AuthCheck = onAuthStateChanged(auth, (user)=> {
        if(user){
            console.log(user);
        }else{
            console.log("unauthorized");
        }
    })

    return (
    <>
      {children}
    </>
  )
}



export default AuthRoute;
