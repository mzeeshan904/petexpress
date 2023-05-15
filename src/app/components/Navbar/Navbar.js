import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo_container}>
        <Image
          className={styles.logo}
          src="/assets/img/petexpress-logo.png"
          width={45}
          height={45}
          alt="Logo"
        />
        <span className={styles.title}>Pet Express</span>
      </div>
      <div className={styles.nav_links_container}>
        <Link href="/" className={styles.nav_link}>
          HOME
        </Link>
        <Link href="/essentials" className={styles.nav_link}>
          PET ESSENTIALS
        </Link>
        <Link href="/about" className={styles.nav_link}>
          ABOUT
        </Link>
        <Link href="/contact" className={styles.nav_link}>
          CONTACT US
        </Link>
      </div>
      <div>
        <span className={styles.nav_icons}>
          <AiOutlineSearch />
        </span>
        <span className={styles.nav_icons}>
          <FaUser />
        </span>
        <span className={styles.nav_icons}>
          <BsCart3 />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
