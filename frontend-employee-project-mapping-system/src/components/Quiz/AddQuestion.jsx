import { React, useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";

const AddQuestion = () => {
  const [technologyId, setTechnologyId] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const [technologyIdErr, setTechnologyIdErr] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [questionErr, setQuestionErr] = useState("");
  const [option1Err, setOption1Err] = useState("");
  const [option2Err, setOption2Err] = useState("");
  const [option3Err, setOption3Err] = useState("");
  const [option4Err, setOption4Err] = useState("");

  const [option1IsTrue, setOption1IsTrue] = useState("");
  const [option2IsTrue, setOption2IsTrue] = useState("");
  const [option3IsTrue, setOption3IsTrue] = useState("");
  const [option4IsTrue, setOption4IsTrue] = useState("");

  const [option1IsTrueErr, setOption1IsTrueErr] = useState("");
  const [option2IsTrueErr, setOption2IsTrueErr] = useState("");
  const [option3IsTrueErr, setOption3IsTrueErr] = useState("");
  const [option4IsTrueErr, setOption4IsTrueErr] = useState("");

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

  let technologyIdHandler = (event) => {
    setTechnologyIdErr("");
    if (technologyIdErr !== "" || technologyIdErr !== null) {
      setTechnologyId(event.target.value);
    }
  };
  let questionHandler = (event) => {
    setQuestionErr("");
    if (question !== "" || question !== null) {
      setQuestion(event.target.value);
    }
  };

  let option1Handler = (event) => {
    setOption4Err("");
    if (question !== "" || question !== null) {
      setOption1(event.target.value);
    }
  };
  let option2Handler = (event) => {
    setOption4Err("");
    if (question !== "" || question !== null) {
      setOption2(event.target.value);
    }
  };
  let option3Handler = (event) => {
    setOption4Err("");
    if (question !== "" || question !== null) {
      setOption3(event.target.value);
    }
  };
  let option4Handler = (event) => {
    setOption4Err("");
    if (question !== "" || question !== null) {
      setOption4(event.target.value);
    }
  };
  let option1IsTrueHandler = (event) => {
    setOption1IsTrueErr("");
    if (question !== "" || question !== null) {
      option1IsTrue(event.target.value);
    }
  };
  let option2IsTrueHandler = (event) => {
    setOption2IsTrueErr("");
    if (question !== "" || question !== null) {
      option2IsTrue(event.target.value);
    }
  };
  let option3IsTrueHandler = (event) => {
    setOption3IsTrueErr("");
    if (question !== "" || question !== null) {
      option3IsTrue(event.target.value);
    }
  };
  let option4IsTrueHandler = (event) => {
    setOption4IsTrueErr("");
    if (question !== "" || question !== null) {
      option4IsTrue(event.target.value);
    }
  };

  let validation = () => {
    let flag = true;

    if (technologyId === "" || technologyId === null) {
      setTechnologyIdErr("Technology Id is compulsory");
      flag = false;
    }

    if (question === " " || question === null) {
      setQuestionErr("Please Enter A Question");
      flag = false;
    }

    if (option1 === " " || option1 === null) {
      setOption1Err("Please Enter Option");
      flag = false;
    }

    if (option2 === " " || option2 === null) {
      setOption2Err("Please Enter A Question");
      flag = false;
    }
    if (option3 === " " || option3 === null) {
      setOption3Err("Please Enter A Question");
      flag = false;
    }
    if (option4 === " " || option4 === null) {
      setOption4Err("Please Enter A Question");
      flag = false;
    }

    if (flag) return true;
  };

  const AddQuestionSubmit = () => {
    if (validation()) {
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Add Questions
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Question and Options
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={AddQuestionSubmit} className="department-form">
              <div className="form-floating mb-3">
                <select
                  class="form-select"
                  onChange={technologyIdHandler}
                  aria-label="Select Technology"
                >
                  <option hidden disabled selected value>
                    {" "}
                    -- Select Technology --{" "}
                  </option>
                  {technologies.map((technology) => (
                    <option
                      key={technology.technologyId}
                      value={technology.technologyId}
                    >
                      {technology.technologyName}
                    </option>
                  ))}
                </select>
                <span className="text-danger">{technologyIdErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={question}
                  onChange={questionHandler}
                  placeholder="Enter Question"
                />
                <label> Question </label>
                <span className="text-danger">{questionErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={option1}
                  onChange={option1Handler}
                  placeholder="Option 1"
                />
                <label>Option 1</label>
                <span className="text-danger">{option1Err}</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={option1IsTrueHandler}
                >
                  <option hidden disabled selected value>
                    -- select --
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={option2}
                  onChange={option2Handler}
                  placeholder="Option 2"
                />
                <label>Option 2</label>
                <span className="text-danger">{option2Err}</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={option2IsTrueHandler}
                >
                  <option hidden disabled selected value>
                    -- select --
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={option3}
                  onChange={option3Handler}
                  placeholder="Option 3"
                />
                <label>Option 3</label>
                <span className="text-danger">{option3Err}</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={option3IsTrueHandler}
                >
                  <option hidden disabled selected value>
                    -- select --
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={option4}
                  onChange={option4Handler}
                  placeholder="Option 4"
                />
                <label>Option 4</label>
                <span className="text-danger">{option4Err}</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={option4IsTrueHandler}
                >
                  <option hidden disabled selected value>
                    -- select --
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>

              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  Add Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddQuestion;
