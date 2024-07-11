import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './Signup.jsx'
import HomePage from './HomePage.jsx'
import Map from './Map.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
    path: "/homepage",
    element: <HomePage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
