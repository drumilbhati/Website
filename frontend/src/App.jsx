import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Jokes from './Jokes.jsx';
import Map from './Map.jsx';
import EpsilonHomepage from './HomePage.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import MemStories from './MemStories.jsx';
import Subscription from './Subscription.jsx';
import UserProfile from './UserProfile.jsx';
import MemTiers from './MemTiers.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EpsilonHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/member-stories" element={<MemStories />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/map" element={<Map />} />
        <Route path="/membership-tiers" element={<MemTiers />} />
      </Routes>
    </>
  );
}