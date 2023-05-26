import styles from "../src/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="">
        <Image src="/Netflixlogo.png" alt="this is logo"  width={240}
        height={90} />
        </Link>



      </div>

      <Nav/>
    </header>
  );
};

export default Header;
