import React from 'react'
import { NavLink } from 'react-router-dom'

const GymNavbar = () => {
  return ( 
    <div>
      <ul>
        <li>
          <NavLink to='/'>Workouts</NavLink>
        </li>
        <li>
          <NavLink to='/diet'>Diet</NavLink>
        </li>
        <li>
          <NavLink to='/progress'>Progress</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default GymNavbar
