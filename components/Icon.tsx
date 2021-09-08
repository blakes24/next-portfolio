import styles from "../styles/Icon.module.scss";

interface IconProps {
  skill: string;
}

const Icon: React.FC<IconProps> = ({ skill }) => {
  return (
    <figure className={styles.main}>
      <img src={`/images/${skill}.svg`} alt={skill} height="50px" />
      <figcaption>{skill}</figcaption>
    </figure>
  );
};

export default Icon;
