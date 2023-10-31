import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext=createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {

const[user,setUser]=useState([])
const [loading,setLoading]=useState(true)

useEffect(() => {
    const userEmail = user?.email || user.email;
    const loggedUser = { email: userEmail };

    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        // Inside the callback, make the API request
        axios.post(' https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/jwt', loggedUser, { withCredentials: true })
          .then((res) => {
            console.log('token response', res.data);
          })
          .catch((error) => {
            console.error('Error making token request:', error);
          });
      } else {
        // Handle the case where the user is not authenticated
        axios.post(' https://car-doctor-server-jajwwg2gc-md-emons-projects.vercel.app/logout', loggedUser, { withCredentials: true })
          .then((res) => {
            console.log('logout response', res.data);
          })
          .catch((error) => {
            console.error('Error logging out:', error);
          });
      }
    });
  }, []);
console.log(user)
const userSingUP=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const userSingIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

    const userInfo={
        user,
        loading,
        userSingUP,
        userSingIn,
        logOut

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;