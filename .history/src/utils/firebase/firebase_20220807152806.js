import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithCredential,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJ4rpMuyCJIygWMu8Agubhpm78f_xfOrU",
    authDomain: "clothing-db-c1af1.firebaseapp.com",
    projectId: "clothing-db-c1af1",
    storageBucket: "clothing-db-c1af1.appspot.com",
    messagingSenderId: "632326881664",
    appId: "1:632326881664:web:14c6d88b8a8d17d8558165",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
};
