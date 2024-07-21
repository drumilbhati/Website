import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';

// Custom theme inspired by GTA5 (consistent with the login page)
const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        background: {
          body: '#121212',
          surface: '#1e1e1e',
        },
      },
    },
  },
});

const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <CssVarsProvider theme={theme} defaultMode="dark">
        <Sheet
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
          }}
        >
          <Typography level="h3" sx={{ color: '#ffab00' }}>
            Please log in to view your profile.
          </Typography>
          <Button
            onClick={() => navigate('/login')}
            sx={{
              mt: 2,
              backgroundColor: '#ffab00',
              color: '#000',
              '&:hover': { backgroundColor: '#ffd600' },
            }}
          >
            Go to Login
          </Button>
        </Sheet>
      </CssVarsProvider>
    );
  }

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <Sheet
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
          color: '#fff',
        }}
      >
        <Avatar
          src={user.avatar || '/default-avatar.png'}
          alt={user.name}
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography
          level="h2"
          sx={{
            mb: 4,
            fontFamily: "'Pricedown', sans-serif",
            color: '#ffab00',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {user.name}'s Profile
        </Typography>
        <Sheet
          sx={{
            width: 350,
            p: 4,
            borderRadius: 'md',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            background: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography level="body-lg" sx={{ mb: 2 }}>
            Username: {user.username}
          </Typography>
          <Typography level="body-lg" sx={{ mb: 2 }}>
            Role: {user.role === 'admin' ? 'Admin' : 'User'}
          </Typography>
          <Typography level="body-lg" sx={{ mb: 4 }}>
            Member since: {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
          <Button
            onClick={handleLogout}
            fullWidth
            sx={{
              backgroundColor: '#ffab00',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#ffd600' },
            }}
          >
            Logout
          </Button>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
};

export default UserProfile;