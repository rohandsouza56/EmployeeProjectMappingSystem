import React, { useState, useEffect } from "react";
import { Button } from "bootstrap";
import AdminServices from "../../Services/AdminServices";
import { Table } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../Dashboards/EmployeeDashboard.css';

const AttemptQuiz = () => {
  const [technologies, setTechnologies] = useState([]);
  const [technologyId, setTechnologyId] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [technologyErr, setTechnologyErr] = useState("");
  const navigate = useNavigate();
  const attempQuizSection = (techId) => {
  window.sessionStorage.setItem("quizTechId",techId);
  console.log(techId);
  navigate("/quiz");

  };
  const getAllTechnology = () => {
    AdminServices.getAllTechnologies()
      .then((response) => {
        setTechnologies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllTechnology();
  }, []);

  return (
    <>
      <div className="container-fluid w-50 mt-5 add-details-section form-background ">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Attempt Quizz
          </h2>
          <div className="border border-0 rounded ">
            <Table borderless>
              <thead className="thead-dark ">
                <tr>
                  <th>Sr. No.</th>
                  <th>Technology Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((technology) => (
                  <tr key={technology.technologyId}>
                    <td>{technology.technologyId}</td>
                    <td>{technology.technologyName}</td>

                    <td>
                      <center>
                        <button className="btn btn-primary" onClick={event => attempQuizSection(technology.technologyId)}>
                          Attempt Quiz
                        </button>
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AttemptQuiz;
