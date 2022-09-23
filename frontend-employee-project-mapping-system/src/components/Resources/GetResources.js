import { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";



const GetResource = () => {
   const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [technologyId, setTechnologyId] = useState("");
    const[resource, setResources] = useState([]);
 
   

  //--------------for modal--------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllResources();
    setShow(true);
  };
  const [allResources, setAllResources] = useState([]);
  //-------------------------------------


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

    useEffect(() =>{
      getAllResources();
    });


    // useEffect(() =>{
    //   console.log(resource);
    // },[])

    const showAllResources = (resource) =>{


      AdminServices.getAllResources(technologyId)
        .then((response) =>{
          setResources(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 
      setResources(resource)
    };

    
  
 return (
    <>
      
      <div className="container-fluid w-50 mt-5 add-details-section form-background">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Get Resource Details
          </h2>
         
          <div className="modalButtonDiv">
        <Button
          className="modalButton bg-info"
          varient="info"
          onClick={handleShow}
        >
          View Resources
        </Button>
      </div>
        </div>

        <hr />
         {/* ----------------------modal ---------------- */}
      

      <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Resource List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table striped border hover>
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
                  <td>Tech Name</td>
                  <td>{resource.description}</td>
                  <td><a href={resource.link} target="_blank" rel="noreferrer">
                    {resource.link}
                   </a></td>
                

                  
                  <td>
                    
                      
                        
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </Modal.Body>
        <Modal.Footer>
          <Button varient="primary" onClick={handleClose}>
            {" "}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
        </div>
      
    </>
  );
};



export default GetResource;
