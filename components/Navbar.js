import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const links = (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/BlakelyBurns-Resume.pdf">
        <a target="_blank">Resume</a>
      </Link>
    </>
  );

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={styles.main}>
      {isMobile ? (
        <span className={styles.mobile}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.menu}
            onClick={toggleMenu}
          />
          {open && links}
        </span>
      ) : (
        <span className={styles.nav}>{links}</span>
      )}
    </nav>
  );
}

export default Navbar;
