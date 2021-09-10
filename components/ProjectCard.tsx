import styles from "../styles/ProjectCard.module.scss";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string;
    live?: string;
    repo: string;
    img?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  return (
    <div className={styles.main}>
      <img src={`images/${project.img}`} alt="" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Tech Stack: {project.tech}</p>
      <div className={styles.links}>
        {project.live && (
          <a href={project.live} target="_blank">
            Live
          </a>
        )}
        <a href={project.repo} target="_blank">
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
