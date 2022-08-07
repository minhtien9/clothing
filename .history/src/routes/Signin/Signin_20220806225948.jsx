import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    };
    return <div>Sign In Page</div>;
};

export default Signin;
