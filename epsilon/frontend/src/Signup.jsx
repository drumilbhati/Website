import React, { useEffect } from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import './App.css';

function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

}

export default function LoginFinal() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    fetch('/api/createUser')
    .then(response => response.json())
    .then(username => setUsername(username))
    .then(password => setPassword(password))
    .catch(error => console.error('Error:', error));
  })
  const handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    username,
    password
  };

  const response = await fetch('/api/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log('Success:', data);

  if (response.ok) {
    console.log('User created successfully');
  } else {
    console.error('Error:', data.error);
  };
}
  return (
    <main>
      <ModeToggle />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
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
          <Typography level="body-sm">Sign up to continue.</Typography>
        </div>
        <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel className="username" value={username} onChange={(event) => setUsername(event.target.value)}>
            Username
          </FormLabel>
          <Input
            // html input attribute
            name="username"
            type="username"
            placeholder="username"
          />
        </FormControl>
        <FormControl>
          <FormLabel className="password" value={password} onChange={(event) => setPassword(event.target.value)}>
            Password
          </FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
        </form>
        <Typography>
          <Link component={RouterLink} to="/login">
            Already have an account?
          </Link>
        </Typography>
      </Sheet>
    </main>
  );
};