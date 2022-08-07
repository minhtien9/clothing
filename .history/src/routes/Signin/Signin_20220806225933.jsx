import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const Signin = () => {
    const logGoogleUser=async()=>{const response=await signInWithGooglePopup()}}
    return <div>Signin</div>;
};

export default Signin;
