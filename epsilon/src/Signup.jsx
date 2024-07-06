import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import Autocomplete from '@mui/joy/Autocomplete';
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
        <FormControl>
          <FormLabel className="role">Role</FormLabel>
          <Autocomplete
            placeholder="Role"
            options={["User", "Admin"]}
          />
          <FormLabel className="email">Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="student@ahduni.edu.in"
          />
        </FormControl>
        <FormControl>
          <FormLabel className="password">Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
        <Typography>
          <Link component={RouterLink} to="/">
            Already have an account?
          </Link>
        </Typography>
      </Sheet>
    </main>
  );
}
