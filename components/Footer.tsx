import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <h3>Contact Me</h3>
      <a href="mailto: burnsblakely@gmail.com">burnsblakely@gmail.com</a>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/blakelyburns/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/blakes24/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="mailto:burnsblakely@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
        <a href="/Resume-BlakelyBurns.pdf" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className={styles.icon} />
        </a>
      </div>
      Blakely Burns &copy; 2021
    </footer>
  );
};

export default Footer;
