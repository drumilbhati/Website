import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import axios from 'axios';

function ModeToggle() {
  const { mode, setMode } = useColorScheme('dark');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
} 

export default function Login() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/login',
        data: { username, password },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setMessage(response.data.message || 'Login successful');
        navigate('/');
      }
    } catch (error) {
      setMessage(error.response?.data?.message);
    }
  };
  return (
    <CssVarsProvider defaultMode="dark">
      <main>
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <ModeToggle />
          </div>
          <Typography level="body-sm">Log in to continue.</Typography>
          <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={(event) => {setUsername(event.target.value)}}
              placeholder="username"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(event) => {setPassword(event.target.value)}}
              placeholder="password"
            />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 }}>
            Log in
          </Button>
          </form>
          <Typography endDecorator={<Link component={RouterLink} to="/Signup">Sign up</Link>}>
            Don't have an account?
          </Typography> 
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}