import React from "react";
// import logo from './logo.svg';
import "./App.css";

import AddProjects from "./components/Projects/AddProject";
import ProjectList from "./components/Projects/ProjectList";
import AddEmployees from "./components/Employees/AddEmployee";
import AddSkills from "./components/Skills/AddSkill";
import AddTechnology from "./components/Technology/AddTechnology";
import AddDepartment from "./components/Departments/AddDepartment";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import AddProjectMapping from "./components/Projects/ProjectMapping";
import AddResources from "./components/Resources/AddResource";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ExtraInfo from "./components/Home/ExtraInfo";
import Copyright from "./components/Home/Copyright";
import AddResume from "./components/Employees/AddResume";
import ProjectListEmployee from "./components/Projects/ProjectListEmployee";
import EmployeeLogin from "./components/Login/EmployeeLogin";
import EmployeeProfile from "./components/Employees/EmployeeProfile";
import QuizComp from "./components/Quiz/Quiz"
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/addproject" element={<AddProjects />} />
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/department" element={<AddDepartment />} />
          <Route path="/technology" element={<AddTechnology />} />
          <Route path="/employee" element={<AddEmployees />} />
          <Route path="/skill" element={<AddSkills />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard />} />
          <Route path="/addresource" element={<AddResources />} />
          <Route path="/projectmapping" element={<AddProjectMapping />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<AddResume />} />
          <Route path="/empproject" element={<ProjectListEmployee />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
          <Route path="/employeeprofile" element={<EmployeeProfile />} />
          <Route path="/quiz" element={<QuizComp />} />
          {/* <Route path="/teampage" element={<TeamPage/>} /> */}
        </Routes>

        <footer className="footer section ">
          <ExtraInfo />
          <Copyright />
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
