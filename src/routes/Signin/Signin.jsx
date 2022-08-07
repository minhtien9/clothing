import React from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();

        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <>
            <div>Sign In Page</div>;
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </>
    );
};

export default Signin;
