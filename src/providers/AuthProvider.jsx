import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
      return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () =>{
      return signInWithPopup(auth, githubProvider)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(() =>{
        const unsubscribes = onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribes()
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        resetEmail
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}