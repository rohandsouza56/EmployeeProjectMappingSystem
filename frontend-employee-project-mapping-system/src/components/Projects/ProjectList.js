import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import AdminServices from '../Services/AdminServices';
// import AdminServices from '../../Services/AdminServices';
import AdminServices from '../../Services/AdminServices';

const ProjectList = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {

        getAllProjects();
    }, [])

    const getAllProjects = () => {
        console.log(localStorage.getItem("jwtToken"));
        AdminServices.getAllProjects().then((response) => {
            setProjects(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    return (
        <div className = "container">
            <h2 className = "text-center"> List Projects </h2>
            {/* <Link to = "/add-Project" className = "btn btn-primary mb-2" > Add Project </Link> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th>  Id </th>
                    <th> Name </th>
                    <th >  Description </th>
                    <th>  Startdate </th>
                    <th> Enddate </th>
                </thead>
                <tbody>
                    {
                        projects.map(
                            project =>
                            <tr key = {project.projectId}> 
                                <td> {project.projectId} </td>
                                <td> {project.name} </td>
                                <td style = {{textAlign:'justify'}}>{project.description}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                
                                <td>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProjectList



