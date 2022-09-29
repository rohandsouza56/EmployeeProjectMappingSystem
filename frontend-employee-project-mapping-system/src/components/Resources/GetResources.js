import { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";

const GetResource = () => {
  const [resource, setResources] = useState([]);


  const getAllResources = () => {
    console.log(localStorage.getItem("jwtToken"));
    AdminServices.getAllResources()
      .then((response) => {
        setResources(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {

    getAllResources();
}, [])


  

  return (
    <>
      <div className="container-fluid w-50 mt-5 add-details-section form-background">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Get Resource Details
          </h2>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Technology Name</th>
                <th>Description</th>
                <th>Resource Link</th>
              </tr>
            </thead>
            <tbody>
              {resource.map((resource) => (
                <tr key={resource.resourceId}>
                  <td>{resource.resourceId}</td>
                  <td>{resource.technology.technologyName}</td>
                  <td>{resource.description}</td>
                  <td>
                    <a href={resource.link} target="_blank" rel="noreferrer">
                      Docs
                    </a>
                  </td>

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
      </div>
    </>
  );
};

export default GetResource;
