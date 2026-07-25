import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const LoginPanel = () => {
    const{user, setUser} = useContext(UserContext);

    function handleLogin() {
        setUser({name: "Parth", email: "parth@dev.com"});
    }

    function handleLogout() {
        setUser(null);
    }
  return (
    <div>
        {user ? (
            <button onClick={handleLogout} className="logout-btn"> Logout </button>
        ) : (
            <button onClick={handleLogin} className="login-btn">Login</button>
        )
        }
    </div>
  )
}

export default LoginPanel
