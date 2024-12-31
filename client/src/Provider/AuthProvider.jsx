import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';

import {toast} from "react-toastify"
import axios from 'axios';


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
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate = (name,image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })

    }

    const getToken = async(email) =>{
        const { data } = await axios.post(
          "http://localhost:5000/jwt",
          { email },
          {withCredentials:true}
        );
        return data
    }

    const removeToken = async()=>{
        const { data } = await axios.get("http://localhost:5000/logOut", {withCredentials:true})
        return data
    }

    const  userRole = async(currentUser) =>{
        const currentUserInfo = {
          email: currentUser?.email,
          role: "guest",
          status: "verified",
        };
        const { data } = await axios.put(
          "http://localhost:5000/users",
          currentUserInfo
        );
        
        return data

    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            if(currentUser){
                console.log(currentUser)
                getToken(currentUser.email)
                userRole(currentUser)
            }
            else{
                removeToken()
            }
            setLoading(false);
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
      logOut,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;