import Link from "next/link";
import styles from "../src/app/styles/navbar.module.css";


const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          {/* <li className={styles.navbarItem}>
            <Link className={styles.navbarItem} href="/">
              Home
            </Link>
          </li> */}

          {/* <li className={styles.navbarItem}>
            <Link className={styles.navbarItem} href="/about">
              About
            </Link>
          </li> */}

          <li className={styles.navbarItem}>
            <Link className={styles.navbarItem} href="/blog">
              Sign In
            </Link>
          </li>

          {/* <li className={styles.navbarItem}>
            <Link className={styles.navbarItem} href="/contact">
              Contact us
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
