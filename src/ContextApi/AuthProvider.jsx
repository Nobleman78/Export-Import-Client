import React, { Children, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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
        return signOut(user)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    // Deal with current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
        })
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