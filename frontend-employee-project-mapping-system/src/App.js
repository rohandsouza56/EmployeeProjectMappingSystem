import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import AddProjects from './components/Projects/project';
import ListProjectComponent from './components/Projects/projectdetails';
import AddEmployees from './components/Employees/Employee';


function App() {
  return (
    <div className="App">
      {/* <AddProjects/> */}
     <AddEmployees/>
    </div>
  );
}

export default App;
