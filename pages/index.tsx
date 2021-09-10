import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ProjectContainer from "../components/ProjectContainer";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.landing}>
        <h1 className={styles.title}>Blakely Burns</h1>
        <p className={styles.description}>Full-stack web developer</p>
        <Link href="/projects">
          <a className={styles.link}>View my work</a>
        </Link>
      </div>
      <About />
      <ProjectContainer />
    </main>
  );
};

export default Home;
