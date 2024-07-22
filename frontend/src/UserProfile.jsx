import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode token to get basic user info
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);

        // Fetch additional user details from the server
        fetch('/api/auth-endpoint', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => setUser(prevUser => ({ ...prevUser, ...data.user })))
        .catch(error => setError(error.message));
      } catch (error) {
        setError('Invalid token');
        localStorage.removeItem('token');
      }
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.userName}</p>
          <p>Role: {user.role}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;