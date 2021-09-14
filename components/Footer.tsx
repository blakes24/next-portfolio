import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      Blakely Burns &copy; 2021
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
      </div>
    </footer>
  );
};

export default Footer;
