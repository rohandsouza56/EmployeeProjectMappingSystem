import { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import ProjectListSub from "./ProjectListSub";
const ProjectListEmployee = () => {
  const [projects, setProjects] = useState([]);
  const [fliterprojects, setFilterProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = () => {
    console.log(localStorage.getItem("jwtToken"));
    AdminServices.getAllProjects()
      .then((response) => {
        setProjects(response.data);
        setFilterProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredProjects = fliterprojects.filter((project) =>
      `${project.name} ${project.location}`.toLowerCase().includes(value)
    );
    setProjects(filteredProjects);
  };
  return (
    <div className="project-list">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <input
        className="search-box"
        onInput={filterCards}
        placeholder="Search Projects"
      />
      <div className="cards-container row offset-1">
        {projects.map((project, index) => (
          <ProjectListSub key={index} projectData={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectListEmployee;
