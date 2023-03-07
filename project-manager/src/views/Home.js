import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Project from '../components/Project'


function Home({user}) {

  const [project, setProject] = useState([])
  const [allProjects, setAllProjects] = useState([])

  const user_id = localStorage.getItem('user_id')


useEffect(() =>{
  fetch(`http://localhost:9292/user/project/${user_id}`)
  .then(response => response.json())
  .then((project) => {
    console.log(project)
    setProject(project)
    setAllProjects(
    project.map((project) => (
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    )))
  })
}, [])
  return (
    <div>
    <NavBar/>
      {allProjects}
      <Project/>
    </div>
  )
}

export default Home