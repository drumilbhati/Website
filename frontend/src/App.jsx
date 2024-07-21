import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import AdminLogin from './AdminLogin.jsx';
import UserProfile from './UserProfile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import AdminDashboard from './AdminDashboard.jsx'; // Assume you have this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<HomePage />} /> {/* Assume you have a Home component */}
        </Route>

        {/* Admin routes (you might want to create a separate AdminRoute component) */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;