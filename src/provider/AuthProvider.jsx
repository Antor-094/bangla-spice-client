import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProf = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
      const logOut = () => {
        signOut(auth);
      };
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        updateProf,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;