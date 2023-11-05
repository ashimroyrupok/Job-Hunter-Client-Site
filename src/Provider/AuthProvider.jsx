import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)


    // crate User
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleSignin = ()=> {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }

    // user information

    const userData = (name,photUrl) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,photoURL:photUrl
        })
    }

    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // logout user
    const logout = () => {
        return signOut(auth)
    }

    const userInfo = {
        user,
        loading,
        signup,
        googleSignin,
        userData,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;