import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import HomePage from './HomePage.jsx'
import App from './App.jsx'
import Map from './Map.jsx'
import MemTiers from './MemTiers.jsx'
import Jokes from './Jokes.jsx'
import './index.css'
import './HomePage.jsx'
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
  },
  {
    path:'/jokes',
    element: <Jokes/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      <NextUIProvider>
        <App />
      </NextUIProvider>
  </React.StrictMode>,
)
