import React, {useEffect, useState} from 'react'

function Project() {

  const [project, setProject] = useState([])
  const [allProjects, setAllProjects] = useState([])

useEffect(() =>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then((tasks) => {
    console.log(project)
    setProject(project)
    setAllProjects(
    project.map((project) => (
      <div>
        <h2>{project.title}</h2>
        <p>{project.body}</p>
      </div>
    )))
  })
}, [])
  return (
    <div>
      {allProjects}
    </div>
  )
}

export default Project