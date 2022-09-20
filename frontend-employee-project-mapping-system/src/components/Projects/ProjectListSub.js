import "./ProjectListSub.css";
import { Button } from "react-bootstrap";
const ProjectListSub = ({ projectData }) => {
  return (
    <div className="col-5">
      <div className="card">
        <div className="card__title">Name: {projectData.name}</div>
        <div className="card__body">
          <p>
            <span className="span-head">Id: </span> {projectData.projectId}
          </p>
          <p>
            <span className="span-head">Description: </span>{" "}
            {projectData.description}
          </p>
          <p>
            <span className="span-head">Location: </span> {projectData.location}
          </p>
          <p>
            <span className="span-head">Start Date: </span>
            {projectData.startDate}
          </p>
          <p>
            <span className="span-head">End Date:</span> {projectData.endDate}
          </p>
          {/* <p>Manager Id: {projectData.managerId}</p> */}
          <Button
            className="project-sub-button"

            // onClick={handleShow}
          >
            View Project
          </Button>

          <Button
            className="project-req-button"

            // onClick={handleShow}
          >
            Request Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListSub;
