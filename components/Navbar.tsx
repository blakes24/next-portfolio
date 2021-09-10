import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 576px)" });

  useEffect(() => {
    setMobileNav(isMobile);
  }, [isMobile]);

  const links = (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="#about">
        <a>About</a>
      </Link>
      <Link href="#projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <a href="/BlakelyBurns-Resume.pdf" target="_blank">
        Resume
      </a>
    </>
  );

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={styles.main}>
      {mobileNav ? (
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
};

export default Navbar;
