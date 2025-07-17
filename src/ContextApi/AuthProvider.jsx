import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Utility/Firebase';
import UseAxiosPublic from '../Utility/Hooks/UseAxiosPublic';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();
    const axiosPublic = UseAxiosPublic()


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleForgetPassword = (email) => {
        if (!email) {
            alert('Please provide a valid email address');
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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwttoken', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);

                        }

                    })
            }
            else {  
                localStorage.removeItem('access-token',)
            }
            setLoading(false);
        });

        // Cleanup function to unsubscribe from the auth state listener
        return () => unsubscribe();
    }, [axiosPublic]); // Dependency array: include 'auth' if it's not a stable reference



    const value = {
        loading,
        user,
        createUser,
        signInWithEmailandPassword,
        handleForgetPassword,
        signOutUser,
        loginWithGoogle,

    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
