import { Navigate, Outlet } from "react-router-dom";
import firebaseApp from "../firebase";
import { getAuth } from "firebase/auth";

const PrivateOutlet = () => {
     const auth = getAuth(firebaseApp);
     console.log(auth.currentUser)
        return auth.currentUser ? <Navigate to="/"/> : <Outlet />
};

export default PrivateOutlet;