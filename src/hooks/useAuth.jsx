import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState, useEffect } from "react";
import firebaseApp from './../firebase';


const useAuth = () => {
     const [currentUser, setCurrentUser] = useState();

     useEffect(() => {
          const auth = getAuth(firebaseApp);
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)})
          return unsubscribe;
     });
          //sign up
          async function signup(email, password, username) {
               const auth = getAuth(firebaseApp);
               await createUserWithEmailAndPassword(auth, email, password);
           
               // update profile
               await updateProfile(auth.currentUser, {
                 displayName: username,
               });
           
               const user = auth.currentUser;
               setCurrentUser({
                 ...user,
               });
             }

      // login function
     function login(email, password) {
          const auth = getAuth(firebaseApp);
          return signInWithEmailAndPassword(auth, email, password);
          }
          
       // logout function
     function logout() {
         const auth = getAuth(firebaseApp);
         return signOut(auth);
         }

     return ({
          currentUser,
          signup,
          login,
          logout,
     });
};

export default useAuth;