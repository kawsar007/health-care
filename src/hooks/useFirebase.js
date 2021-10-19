import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

    initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);

    
    const auth = getAuth();
    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {

            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
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
        logOut
    }
}

export default useFirebase;