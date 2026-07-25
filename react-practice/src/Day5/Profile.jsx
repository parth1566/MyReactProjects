import React, { useContext } from 'react'
import { UserContext } from '../App';

const Profile = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div className="user-profile">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Please login to see your profile 🔒</p>
      )}
    </div>
  )
}

export default Profile