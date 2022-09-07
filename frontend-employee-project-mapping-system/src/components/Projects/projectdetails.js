import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import ProjectService from '../Services/ProjectService';
import ProjectService from '../../Services/ProjectService';

const ListProjectComponent = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {

        getAllProjects();
    }, [])

    const getAllProjects = () => {
        ProjectService.getAllProjects().then((response) => {
            setProjects(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    // const deleteProject = (ProjectId) => {
    //    ProjectService.deleteProject(ProjectId).then((response) =>{
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
                            Project =>
                            <tr key = {projects.id}> 
                                <td> {projects.id} </td>
                                <td> {projects.Name} </td>
                                <td>{projects.description}</td>
                                <td>{projects.startdate}</td>
                                <td>{projects.enddate}</td>
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