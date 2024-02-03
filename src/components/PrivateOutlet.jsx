import { Navigate, Outlet } from "react-router-dom";
import firebaseApp from "../firebase";
import { getAuth } from "firebase/auth";

const PrivateOutlet = () => {
     const auth = getAuth(firebaseApp);
     console.log(auth.currentUser)
        return auth.currentUser ? <Outlet/> : <Navigate to="/login"/> 
};

export default PrivateOutlet;