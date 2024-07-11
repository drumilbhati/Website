import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import HomePage from './HomePage.jsx'
import Map from './Map.jsx'
import MemTiers from './MemTiers.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path: "/map",
    element: <Map/>
  },
  {
    path: "/membership-tiers",
    element: <MemTiers/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
