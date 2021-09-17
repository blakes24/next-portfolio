import styles from "../styles/ProjectContainer.module.scss";
import projectList from "../json/projects.json";
import ProjectCard from "./ProjectCard";

const ProjectContainer: React.FC = () => {
  return (
    <section id="projects" className={styles.main}>
      <h2>Projects</h2>
      <div className={styles.cards}>
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
