import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import AdminServices from '../Services/AdminServices';
// import AdminServices from '../../Services/AdminServices';
import AdminServices from '../../Services/AdminServices';

const ListProjectComponent = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {

        getAllProjects();
    }, [])

    const getAllProjects = () => {
        console.log(localStorage.getItem("jwtToken"));
        AdminServices.getAllProjects().then((response) => {
            setProjects(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    // const deleteProject = (ProjectId) => {
    //    AdminServices.deleteProject(ProjectId).then((response) =>{
    //     getAllProjects();

    //    }).catch(error =>{
    //        console.log(error);
    //    })
        
    // }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Projects </h2>
            {/* <Link to = "/add-Project" className = "btn btn-primary mb-2" > Add Project </Link> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <th>  Id </th>
                    <th> Name </th>
                    <th>  description </th>
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
                                <td>{project.description}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>
                                    {/* <Link className="btn btn-info" to={`/edit-Project/${Project.id}`} >Update</Link> */}
                                    {/* <button className = "btn btn-danger" onClick = {() => deleteProject(Project.id)} */}
                                    {/* style = {{marginLeft:"10px"}}> Delete</button> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProjectComponent