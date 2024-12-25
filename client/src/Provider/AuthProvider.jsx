import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext()

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password) 
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(email,password)
    }

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const profileUpdate = (name,image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe()
        }
    },[])




    const info = {
      user,
      createUser,
      login,
      loginWithGoogle,
      resetPassword,
      loading,
      profileUpdate,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;