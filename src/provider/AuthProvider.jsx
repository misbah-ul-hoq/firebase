import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { node } from "react-proptypes";
import auth from "../firebase.config";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      const email = currentUser?.email || user?.email;
      const userEmail = { email: email };
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        // axios.post("http://localhost:3000/jwt", userEmail, {
        //   withCredentials: true,
        // });
      } else {
        axios.post("http://localhost:3000/logout", userEmail, {
          withCredentials: true,
        });
      }
    });
    return () => {
      unsubsribe();
    };
  }, []);

  const providerValue = {
    user,
    loading,
    signUpWithGoogle,
    signOutUser,
    signUpWithEmailAndPassword,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: node,
};
