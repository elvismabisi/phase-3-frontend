import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Project</NavLink>
        <NavLink to="/newtasks">New Project</NavLink>
        <NavLink to="/taskdetails" >Project Details</NavLink>
    </div>
  )
}

export default NavBar