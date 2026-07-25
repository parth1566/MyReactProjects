import { Outlet } from 'react-router-dom'    // ← imported, not created!
import GymNavbar from './GymNavbar'

const GymLayout = () => {
  return (
    <div>
      <GymNavbar />     
      <Outlet />        
    </div>
  )
}

export default GymLayout