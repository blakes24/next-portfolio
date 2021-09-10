import styles from "../styles/ProjectContainer.module.scss";
import projectList from "../json/projects.json";
import Project from "./ProjectCard";
import ProjectCard from "./ProjectCard";

const ProjectContainer: React.FC = () => {
  return (
    <section id="projects" className={styles.main}>
      <h2>Projects</h2>
      <>
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </>
    </section>
  );
};

export default ProjectContainer;
