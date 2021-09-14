import styles from "../styles/Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section className={styles.main} id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to get in touch...</p>
      <a href="mailto: burnsblakely@gmail.com">burnsblakely@gmail.com</a>
    </section>
  );
};

export default Contact;
