import React, { Children, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { auth } from '../Utility/Firebase';
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider()

    // Create User Using Firebase
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with user email and password 
    const signInWithEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Handle Forget Password 
    const handleForgetPassword = (email) => {
        if (!email) {
            alert('Please Provide a valid email address')
        }
        else {
            return sendPasswordResetEmail(auth, email)
        }
    }

    // Sign Out user
    const signOutUser = () => {
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

        if (isMobile) {
            return signInWithRedirect(auth, provider)
        } else {
            return signInWithPopup(auth, provider)
        }
    }

    // Deal with current user


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })

        // Handle Google Redirect Login Result (Only triggers on mobile)
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) {
                    console.log("Redirect login success", result.user);
                    setUser(result.user)
                }
            })
            .catch((error) => {
                console.error("Google redirect login error:", error);
            });

        return () => unsubscribe()
    }, [])


    const value = {
        loading,
        user,
        createUser,
        signInWithEmailandPassword,
        handleForgetPassword,
        signOutUser,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;