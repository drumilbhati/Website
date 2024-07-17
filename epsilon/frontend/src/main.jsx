import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import HomePage from './HomePage.jsx'
import Map from './Map.jsx'
import MemTiers from './MemTiers.jsx'
import Jokes from './Jokes.jsx'
import './MemTiers.css'
import './HomePage.jsx'
import './MemStories.jsx'
import Subscription from './Subscription.jsx'
// import './Memstories.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MemberStories from './MemStories.jsx'


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
  },
  {
    path: "/member-stories",
    element: <MemberStories/>  // Why showing error if I write memStories?
  },
  {
    path:'/jokes',
    element: <Jokes/>
  },
  {
    path: '/subscription',
    element: <Subscription/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
