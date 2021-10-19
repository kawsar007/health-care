import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);


    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    const userCreateWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user, "User");
            })
            .catch((error) => {
            });
    }

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user, "SignInUser");
            })

    }

    // Ovserve weather User auth state change or not.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut,
        userCreateWithEmail,
        signInWithEmail
    }
}

export default useFirebase;