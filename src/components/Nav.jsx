import Account from "./Account";
import styles from '../styles/Nav.module.css';
import logo from '../assets/logo-bg.png';
import {NavLink} from 'react-router-dom';

const Nav = () => {
     return (
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to='/' className={styles.brand}>
                <img src={logo} alt="Learn with Sumit Logo" />
                <h3>React Quiz </h3>
              </NavLink>
            </li>
          </ul>
          <Account />
        </nav>
     );
};

export default Nav;