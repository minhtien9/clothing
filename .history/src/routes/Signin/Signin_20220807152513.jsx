import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
    };
    return (
        <>
            <div>Sign In Page</div>;
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </>
    );
};

export default Signin;
