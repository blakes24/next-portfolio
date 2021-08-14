import styles from "../styles/Icon.module.scss";

export default function Icon({ skill }) {
  return (
    <figure className={styles.main}>
      <img src={`/images/${skill}.svg`} alt={skill} height="50px" />
      <figcaption>{skill}</figcaption>
    </figure>
  );
}
