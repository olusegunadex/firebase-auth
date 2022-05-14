//@ts-check

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  //these are the default values, useful for autocomplete also
  authIsReady: null,
  setAuthIsReady: null,
  user: null,
  setUser: null,
  SignIn: null,
  signUp: null,
  forgotPassword: null
});
export function UserContextProvider({ children, UserData }) {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [error, setError] = useState(null /** no error by default */);

  // Signup
  const signUp = async (
    /**@type {string} */ email,
    /**@type {any} */ password
  ) => {
    await createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setError(error.message)
    );
  };

  const signIn = async (
    /**@type {string} */ email,
    /**@type {any} */ password
  ) => {
    await signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setError(error.message)
    );
  };

  const forgotPassword = (/** @type {string} */ email) => {
    //  forgotPassword code
    sendPasswordResetEmail(auth, email);
  };
  // make auth ready
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (userCredentials) => {
      userCredentials && setUser(userCredentials);
      setAuthIsReady(true);
      // This isnt correct, if auth is ready go to dashboard, auth might be ready even if we do not have a user
      // if (authIsReady === true) {
      //   navigate("/dashboard");
      // }
    });
    return unsubscriber;
    //   // clen up func so firebase can check for auth when app mounts and unmount
  }, []);

  return (
    <UserContext.Provider
      // @ts-ignore
      value={{
        forgotPassword,
        error,
        setError,
        user,
        authIsReady,
        setUser,
        signIn,
        signUp
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
