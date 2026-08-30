import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 py-4">
        <NavLink 
        to={"/"}
        >
            Home
        </NavLink>
        
        <NavLink>
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar
