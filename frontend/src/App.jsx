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
import SideButton from './SideButton.jsx';
import './App.css';
import EpsilonDonation from './Donation.jsx';
import EpsilonTestimonials from './Testimonials.jsx';
import UserPage from './UserPage.jsx';

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
        <Route path="/side-button" element={<SideButton />} />
        <Route path="/Donation" element={<EpsilonDonation />} />
        <Route path='/Testimonials' element={<EpsilonTestimonials />}></Route>
        <Route path="/UserPage" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}