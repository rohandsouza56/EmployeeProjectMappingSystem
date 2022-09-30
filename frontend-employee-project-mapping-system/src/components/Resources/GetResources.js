import { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";
import EmployeeService from "../../Services/EmployeeService";

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

const handleResource = (resourceId) => {
  EmployeeService.downloadResource(resourceId)
    .then((response) => {
      //var bytes = new Uint8Array(response.data)
      var sampleArr = base64ToArrayBuffer(response.data);
      saveByteArray("Sample Report", sampleArr);

      // console.log(response.headers);
      //const blob = new Blob([bytes], { type: "application/pdf" });
      // console.log(blob.text());

      // let reader = new FileReader();

      // const content = response.headers["content-type"];
      // //console.log(response);
      // download(blob, "abc.pdf", content);
    })
    .catch((error) => {
      console.log(error);
    });
};

function base64ToArrayBuffer(base64) {
  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
    var ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
}

function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], { type: "application/zip" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
}


  

  return (
    <>
      <div className="container-fluid w-75 mt-5 add-details-section form-background">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Get Resource Details
          </h2>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Resource Id</th>
                <th>Technology Name</th>
                <th>Description</th>
                <th>Documentation Link</th>
                <th>Get Resource</th>
              </tr>
            </thead>
            <tbody>
              {resource.map((resource) => (
                <tr key={resource.resourceId}>
                  <td>{resource.resourceId}</td>
                  <td>{resource.technology.technologyName}</td>
                  <td>{resource.description}</td>
                  <td>
                    <a style={{textDecoration:"none",color:"darkgreen" ,fontWeight:"500"}} href={resource.link} target="_blank" rel="noreferrer">
                    Documentation
                    </a>
                  </td>

                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleResource(resource.resourceId)}
                      style={{ marginLeft: "10px" }}
                    >
                      Resource
                    </button>
                  </td>
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
