// import { useEffect, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token found');
//     } else {
//       if (token) {
//         try {
//           // Decode token to get basic user info
//           const decodedUser = jwtDecode(token);
//           setUser(decodedUser);
  
//           // Fetch additional user details from the server
//           fetch('/api/auth-endpoint', {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           })
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Failed to fetch user details');
//             }
//             return response.json();
//           })
//           .then(data => setUser(prevUser => ({ ...prevUser, ...data })))
//           .catch(error => setError(error.message));
//         } catch (error) {
//           setError('Invalid token');
//           localStorage.removeItem('token');
//         }
//       }
//     }
//   }, []);

//   if (error) {
//     navigate('/login');
//   }

//   return (
//     <div> 
//       <h1>User Profile</h1>
//       {user ? (
//         <div>
//           <p>Username: {user.userName}</p>
//           <p>Role: ${user.balance}</p>
//         </div>
//       ) : (
//         <p>Loading user profile...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        navigate('/login');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        
        const response = await axios.get('http://localhost:3000/api/auth-endpoint', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser({ ...decodedToken, ...response.data });
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch user profile');
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Balance: ${user.balance}</p>
    </div>
  );
};

export default UserProfile;