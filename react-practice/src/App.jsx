import { useState, createContext } from "react";
import Header from "./Day5/Header";
import Profile from "./Day5/Profile";
import LoginPanel from "./Day5/LoginPanel";
import './Day5/User.css'


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <div  className="user-container">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Profile />
        <LoginPanel />
      </UserContext.Provider>
    </div>
  )

}

export default App

