import React,{useState, useEffect} from "react";
import TechnologyService from "../../Services/TechnologyService";
import ProjectService from "../../Services/ProjectService";
import ProjectRequirmentService from "../../Services/ProjectRequirmentService";

const AddProjectRequirment = ()=>{

    const [techId,setTechId] = useState('');
    const [techName,setTechName] = useState("");
    const [projectId,setProjectId] = useState('');
    const [projectName,setProjectName] =useState("");

    const [techIdErr,setTechIdErr] = useState("");
    const [techNameErr,setTechNameErr] = useState('');
    const [projectIdErr,setProjectIdErr] = useState("");

    const [errorMsg,setErrorMsg] =useState("");

    const [techlogies,setTechnologies] = useState([]);
    const [projects,setProjects] = useState([]);

    const getAllTechnologies =()=>{
        TechnologyService.getAllTechnologies().then((response)=>{
            setTechnologies(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const getAllProjects=()=>{
        ProjectService.getAllProjects().then(response=>{
            setProjects(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getAllTechnologies();
        getAllProjects();
    },[]);

    let techIdHandler =(event) =>{
        setTechId(event.target.value);
        if(techIdErr !== ""|| techIdErr !== null ){
            setTechIdErr("");
        }
    }

    let projectIdHandler = (event) =>{
        setProjectId(event.target.value);
        if(projectIdErr !== ""|| projectIdErr !== null ){
            setProjectIdErr("");         
        }
    }

    let validation =()=>{

        let flag = true;

        if(techId === ""){
            setTechIdErr("Please Enter Technology Id");
            flag = false;
        }

        if(projectId === "" || projectId === null){
            setProjectIdErr("Please Enter Project Id");
            flag = false;
        }

        if (flag) {
            return true;
          }
    }

    let handleDelete = (technologyId) => {
        //if (disable === "") {
            TechnologyService.deleteTechnology(technologyId).then(resp => {
                console.log(resp.data);
                getAllTechnologies();
                
               // setShow1("show");
                setTimeout(() => {
                    //setShow1("");
                    clearTimeout();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })
      //  }
      //  else {
      //      alert("Last Date for Updating Student Details is OVER..");
     //   }
    }

    let onSubmit =(event)=>{
        event.preventDefault();
        
        if(validation()){
            setTechIdErr("");
            setProjectIdErr("");
            
            let requirment ={
                techId,
                projectId
            };


            ProjectRequirmentService.AddRequirment(requirment).then((response)=>{
                setTechId("");
                setProjectId("")
                setErrorMsg("");
            }).catch((error)=>{
                console.log(error);
                setErrorMsg(error.response.data);
            });
        }
    };


    return(
        <div className="container-fluid w-50 mt-5 add-qualification-details">
        <div className="m-3">
            <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Project Requirment</h2>
            <p className="text-50 text-success mb-3 dashboard-data-section-para">Please enter Project and Technology Id's</p>
            <div className="border border-1 rounded">
                <div className="m-3">
                    <form onSubmit={onSubmit} className="department-form">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control"
                                value={projectId}
                                onChange={projectIdHandler}
                                placeholder="Enter Technology Name"
                            />
                            <label>Project Id</label>
                            <span className="text-danger">{projectIdErr}</span>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" 
                                value={techId}
                                onChange={techIdHandler}
                                placeholder="enter Resource"   
                            />
                            <label> Technology Id </label>
                            <span className="text-danger">{techIdErr}</span>
                        </div>
                        <div className="row g-1">
                            <button type="submit" className="btn btn-primary"> Submit </button>
                            </div>

                    </form>
                </div>
            </div>
            <span className="text-danger">{errorMsg}</span>
            
        </div>

        <hr />
        {/* <div className="table-responsive">
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Technology Id</th>
                    <th>Technology Name</th>
                    <th>Resource</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    techlogies.map(technology => (
                        <tr key={technology.technologyId}>
                            <td>{technology.techName}</td>
                            <td>{technology.resourceId}</td>
                           <td>
                                <center><button className="btn1 primary1 rounded" onClick={() => {
                                    handleDelete(technology.technologyId);
                                }}>Delete</button></center>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div> */}
    </div>

    );

};


export default AddProjectRequirment;