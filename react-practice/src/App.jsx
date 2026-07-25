import { useState, createContext } from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Workouts from "./Day5/Workouts";
import Diet from "./Day5/Diet";
import Progress from "./Day5/Progress";
import Contact from "./Day5/Contact";
import NotFound from "./Day5/NotFound";
import GymNavbar from "./Day5/GymNavbar";
import GymLayout from "./Day5/GymLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GymLayout/>,
    children: [
      { path: "/", element: <Workouts/> },
      { path: "/diet", element: <Diet/> },
      { path: "/progress", element: <Progress/> },
      { path: "/contact", element: <Contact/> },
      { path: "*", element: <NotFound/> }
    ]
  }
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>   
    </div>
  )

}

export default App

