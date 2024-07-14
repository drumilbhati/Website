import * as React from 'react';
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
import IconButton from '@mui/joy/IconButton';

// You'll need to install @mui/icons-material or use your own icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function ModeToggle() {
  const { mode, setMode } = useColorScheme('blue');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // return (
  //   <IconButton
  //     variant="outlined"
  //     color="neutral"
  //     onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
  //   >
  //     {mode === 'dark' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
  //   </IconButton>
  // );
}

export default function Login() {
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <ModeToggle />
          </div>
          <Typography level="body-sm">Log in to continue.</Typography>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              placeholder="username"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button 
            sx={{ mt: 1 }}
            onClick={() => {
              setTimeout(() => {
                window.location.href = "/Map";
              }, 1000);
            }}
          >
            Log in
          </Button>
          <Typography endDecorator={<Link component={RouterLink} to="/Signup">Sign up</Link>}>
            Don't have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

















// import * as React from 'react';
// import Sheet from '@mui/joy/Sheet';
// import CssBaseline from '@mui/joy/CssBaseline';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/joy/Link';

// function ModeToggle() {
//   const [mounted, setMounted] = React.useState(false);

//   // necessary for server-side rendering
//   // because mode is undefined on the server
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
// }


// export default function Login() {
//   return (
//     <main>
//       <ModeToggle />
//       <CssBaseline />
//       <Sheet
//         sx={{
//           width: 300,
//           mx: 'auto', // margin left & right
//           my: 4, // margin top & bottom
//           py: 3, // padding top & bottom
//           px: 2, // padding left & right
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           borderRadius: 'sm',
//           boxShadow: 'md',
//         }}
//         variant="outlined"
//       >
//         <div>
//           <Typography level="h4" component="h1">
//             <b>Welcome!</b>
//           </Typography>
//           <Typography level="body-sm">Log in to continue.</Typography>
//         </div>
//         <FormControl>
//           <FormLabel className="username">Username</FormLabel>
//           <Input
//             // html input attribute
//             name="username"
//             type="username"
//             placeholder="username"
//           />
//         </FormControl>
//         <FormControl>
//           <FormLabel className="password">Password</FormLabel>
//           <Input
//             // html input attribute
//             name="password"
//             type="password"
//             placeholder="password"
//           />
//         </FormControl>
//         {/* Log in button */}
//         <Button sx={{ mt: 1 /* margin top */ }}
//                 onClick={() => {
//                     setTimeout(() => {
//                       window.location.href = "/Map";
//                     }, 1000);
                    
//                 }}>
//           Log in
//         </Button>
//         <Typography>
//         <Link component={RouterLink} to="/Signup">
//           Sign Up
//         </Link>
//         </Typography>
//       </Sheet>
//     </main>
//   );
// }
