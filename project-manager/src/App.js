import {Routes, Route, useNavigate} from 'react-router-dom'
import Project from './components/ProjectMembers';
import Home from './views/Home';
import NavBar from './components/Home';
import { useEffect, useState } from 'react';
import Login from './components/LoginPage';
import NewProject from './components/Projects';
import ProjectDetails from './components/Registration';


function App() {

  const [user, setUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {

  const user_id = localStorage.getItem('user_id')
  if (user_id) {
    navigate('/');
  } else {
    navigate('/login');
  }
}, [navigate]);
console.log(user)
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path = '/' element = {<Home user = {user} />}/>
        <Route exact path = '/project' element = {<Project />}/>
        <Route exact path = '/login' element = {<Login setUser = {setUser}/>} />
        <Route exact path = '/newproject' element = {<NewProject />}/> 
        <Route exact path = '/projectdetails' element = {<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;