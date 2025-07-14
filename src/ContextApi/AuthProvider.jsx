import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Utility/Firebase';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        fetch('/Data/Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        fetch('/Data/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    //  Search services by title
    const searchServices = (term) => {
        if (!term || term.trim() === '') return [];
        return services.filter(service =>
            service.title.toLowerCase().includes(term.toLowerCase())
        );
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleForgetPassword = (email) => {
        if (!email) {
            alert('Please Provide a valid email address');
        } else {
            return sendPasswordResetEmail(auth, email);
        }
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        loading,
        user,
        createUser,
        signInWithEmailandPassword,
        handleForgetPassword,
        signOutUser,
        loginWithGoogle,
        products,
        services,
        searchServices
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
