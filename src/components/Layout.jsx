import Nav from "./nav";
import styles from '../styles/Layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
     return (
          <div>
               <Nav />
               <main className={styles.main}>
                    <div className={styles.container}>
                         {children}
                    </div>
               </main>
               
          </div>
     );
};

export default Layout;