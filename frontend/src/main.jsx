import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import AdminLogin from './AdminLogin.jsx'
import Signup from './Signup.jsx'
import HomePage from './HomePage.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import Map from './Map.jsx'
import Jokes from './Jokes.jsx'
import './MemTiers.css' 
import './HomePage.jsx'
import './MemStories.jsx'
import App from './App.jsx'
import MemStories from './MemStories.jsx'
import Subscription from './Subscription.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProfile from './UserProfile.jsx'
import { AuthProvider } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'


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
    element: <App/>
  },
  {
    path: "/member-stories",
    element: <MemStories/>
  },
  {
    path:'/jokes',
    element: <Jokes/>
  },
  {
    path: '/subscription',
    element: <Subscription/>
  },
  {
    path: 'admin-login',
    element: <AdminLogin/>
  },
  {
    path: 'admin-dashboard',
    element: <AdminDashboard/>
  },
  {
    path: 'user-profile',
    element: (
      <ProtectedRoute>
        <UserProfile/>
      </ProtectedRoute>
    )
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)
