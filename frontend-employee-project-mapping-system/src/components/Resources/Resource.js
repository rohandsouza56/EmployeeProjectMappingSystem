import React,{useState,useEffect} from "react";
import ResourceService from "../../Services/ResourceService";

const AddResources = () =>{

    const [link,setLink] = useState("");
    const [resourceName, setResourceName] = useState("");
    
    const [linkErr,setLinkErr] = useState("");
    const [resourceNameErr, setResourceNameErr] = useState("");

    const [errorMesg,setErrorMesg] = useState("");
    const [resources,setResources] = useState([]);

    const getAllResources=()=>{
        ResourceService.getAllResources().then((response)=>{
            setResources(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getAllResources();
    },[]);

    let linkHandler = (event)=>{
        if(linkErr !== "" || linkErr !== null) setLinkErr("");
        if(errorMesg !== " " || errorMesg !== null ) setErrorMesg("");
        setLink(event.target.value);

    };

    let resourceNameHandler = (event)=>{
        if(resourceNameErr !== "" || resourceNameErr !== null) setLinkErr("");
        if(errorMesg !== " " || errorMesg !== null ) setErrorMesg("");
        setResourceName(event.target.value);
    };

    let validation = () => {

        setLinkErr("");
        setResourceNameErr("");

        let flag = true;

        if(link === "" || link === null ){
            setLinkErr("This field is compulsory");
            flag = false;

        }

        if(resourceName === "" || resourceName === null ){
            setResourceNameErr("This field is compulsory");
            flag = false;
        }

        if (flag) {
            return true;
          }
        
    };

    let addResourceDetails = (event) =>{
        event.preventDefault();
        if(validation() === true){
            let resourceDetails = {
                link,
                resourceName
            };
            ResourceService
            .addNewResouce(resourceDetails)
            .then((response) =>{
                setLink("");
                setResourceName("");

            })
            .catch((error) =>{
                console.log(error)
                setErrorMesg(error.response.data);

            });

        }

    };

    let handleDelete = (resourceId) => {
        //if (disable === "") {
            ResourceService.deleteResource(resourceId).then(resp => {
                console.log(resp.data);
                getAllResources();
               // setShow1("show");
                setTimeout(() => {
                    //setShow1("");
                    clearTimeout();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
          {/* {loggedInStudentFalse && <Navigate to="/home" />}
          {studentProfileUpdated && <Navigate to="/student_dashboard" />} */}
          <div className="container-fluid w-50 mt-5 add-details-section">
            <div className="m-3">
              <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
                Add Resource Details
              </h2>
              <p className="text-50 text-success mb-3 dashboard-data-section-para">
                Please fill up the form
              </p>
              <div className="border border-1 rounded">
                <div className="m-3">
                  <form onSubmit={addResourceDetails}>
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        value={link}
                        onChange={linkHandler}
                        placeholder="Enter Link here"
                        
                      />
                      <label>Resource Link</label>
                      <span className="text-danger">{linkErr}</span>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={resourceName}
                        onChange={resourceNameHandler}
                        placeholder="enter Resource Name"
                        
                      />
                      <label>Resource Name</label>
                      <span className="text-danger">{resourceNameErr}</span>
                    </div>
                    
                    
                    <div className="row g-1">
                      <button type="submit" className="btn btn-primary">
                        Add Resource
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <span className="text-success">
                <b>{successMesg}</b>
              </span>
              <span className="text-danger">
                <b>{errorMesg}</b>
              </span> */}
            </div>

            <hr />
        <div className="table-responsive">
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Resource Name</th>
                    <th>Resource Link</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    resources.map(resource => (
                        <tr key={resource.resourceId}>
                            <td>{resource.resourceName}</td>
                            <td>{resource.resourceLink}</td>
                           <td>
                                <center><button className="btn1 primary1 rounded" onClick={() => {
                                    handleDelete(resource.resourceId);
                                }}>Delete</button></center>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
          </div>
        </>
      );
    };
export default AddResources;