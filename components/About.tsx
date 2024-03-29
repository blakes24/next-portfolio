import Icon from "./Icon";
import styles from "../styles/About.module.scss";

const About: React.FC = () => {
  const skills = [
    "javaScript",
    "typescript",
    "react",
    "redux",
    "node",
    "express",
    "python",
    "flask",
    "postgreSQL",
    "HTML",
    "CSS",
    "sass",
    "jest",
    "cypress",
    "docker",
    "git",
    "gitHub",
    "circleCI",
    "heroku",
  ];
  return (
    <section className={styles.main} id="about">
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.bio}>
          <img src="/images/profile-square.jpg" alt="Blakely Burns" />
          <p>
            I am a software developer and former science teacher with five years
            of experience in education dedicated to helping students investigate
            real-world problems and design creative solutions. I now enjoy
            applying that same passion to solving problems through code.
          </p>
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>
          {skills.map((skill) => (
            <Icon skill={skill} key={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
