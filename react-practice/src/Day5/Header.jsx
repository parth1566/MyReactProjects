import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App';

const Header = () => {

    const{user} = useContext(UserContext);

  return (
    <div className="user-header">
      {user ? `Hi, ${user.name}` : "Guest"}
    </div>
  )
}

export default Header
