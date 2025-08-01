import "./Projects.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="proyectos">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Proyectos</h2>
        </div>
        <div className="projects__container">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
