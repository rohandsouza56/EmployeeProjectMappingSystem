import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import AddProjects from './components/Projects/project';
import ListProjectComponent from './components/Projects/projectdetails';


function App() {
  return (
    <div className="App">
      <ListProjectComponent/>
    </div>
  );
}

export default App;
