import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext=createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {

const[user,setUser]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
    setUser(user)
    setLoading(false)
    })
},[])
console.log(user)
const userSingUP=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const userSingIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

    const userInfo={
        user,
        loading,
        userSingUP,
        userSingIn

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;