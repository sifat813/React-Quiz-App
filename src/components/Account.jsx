import styles from '../styles/Account.module.css';
import { NavLink } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

const Account = () => {

  const { logout, currentUser } = useAuth();

     return (
       <div className={styles.account}>
        {currentUser ?
          (<>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
           <span className="material-icons-outlined" title="Logout" onClick={logout}> logout </span>
           </>):(
            <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            </>)}
        </div>
     );
};

export default Account;
//37 react 22:47