// import * as React from 'react';
// import axios from 'axios';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import Drawer from '@mui/joy/Drawer';
// import DialogTitle from '@mui/joy/DialogTitle';
// import DialogContent from '@mui/joy/DialogContent';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
// import ModalClose from '@mui/joy/ModalClose';
// import { useNavigate } from 'react-router-dom';
// import { Menu, Home, Group, Favorite, Comment, EventNote } from '@mui/icons-material';
// import IconButton from '@mui/joy/IconButton';
// import { Button, Sheet } from '@mui/joy';

// export default function ResponsiveNavbar() {
//   const [open, setOpen] = React.useState(false);
//   const [username, setUsername] = React.useState('');
//   const navigate = useNavigate();

//   const findUser = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('https://website-8t82.onrender.com/api/profile', { token });

//       if (response.status === 200) {
//         setUsername(response.data.username);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   React.useEffect(() => {
//     findUser();
//   }, []);

//   const navItems = [
//     { icon: Home, text: 'Home', path: '/' },
//     { icon: Group, text: 'Join Us', path: '/membership-tiers' },
//     { icon: Favorite, text: 'Donate', path: '/Donation' },
//     { icon: Comment, text: 'Testimonials', path: '/testimonials' },
//     { icon: EventNote, text: 'Event Registration', path: '/UserPage' },
//   ];

//   const NavContent = () => (
//     <>
//       <DialogTitle sx={{ fontSize: 30, fontFamily: "'Pricedown', sans-serif" }}>
//         Epsilon Program
//       </DialogTitle>
//       <DialogContent>
//         <List sx={{ fontSize: 20, fontFamily: "'Pricedown', sans-serif" }}>
//           {navItems.map((item, index) => (
//             <ListItem key={index}>
//               <ListItemButton 
//                 onClick={() => {
//                   navigate(item.path);
//                   setOpen(false);
//                 }}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 2,
//                 }}
//               >
//                 <item.icon />
//                 {item.text}
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </DialogContent>
//       <Box
//         sx={{
//           display: 'flex',
//           gap: 1,
//           p: 1.5,
//           pb: 2,
//           borderTop: '1px solid',
//           borderColor: 'divider',
//         }}
//       >
//         <Avatar size="lg" onClick={() => navigate('/user-profile')}/>
//         <div>
//           <Typography level="title-md">{username || 'Guest'}</Typography>
//           <Typography level="body-sm">joined 20 Jun 2023</Typography>
//         </div>
//         {username ? (
//           <Button sx={{ ml: 'auto' }} onClick={() => {
//             localStorage.removeItem('token');
//             window.location.reload();
//           }}>
//             Logout
//           </Button>
//         ) : (
//           <Button sx={{ ml: 'auto' }} onClick={() => navigate('/Login')}>
//             Login
//           </Button>
//         )}
//       </Box>
//     </>
//   );

//   return (
//     <React.Fragment>
//       <Sheet
//         sx={{
//           display: { xs: 'none', md: 'flex' },
//           flexDirection: 'column',
//           position: 'fixed',
//           left: 0,
//           top: 0,
//           width: 250,
//           height: '100vh',
//           backgroundColor: 'background.surface',
//           borderRight: '1px solid',
//           borderColor: 'divider',
//           overflowY: 'auto',
//         }}
//       >
//         <NavContent />
//       </Sheet>
//       <IconButton
//         onClick={() => setOpen(true)}
//         sx={{ 
//           display: { xs: 'inline-flex', md: 'none' },
//           position: 'fixed',
//           left: 8,
//           top: 8,
//           zIndex: 1100,
//         }}
//       >
//         <Menu />
//       </IconButton>
//       <Drawer
//         open={open}
//         onClose={() => setOpen(false)}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <ModalClose />
//         <NavContent />
//       </Drawer>
//     </React.Fragment>
//   );
// }

import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import { useNavigate } from 'react-router-dom';
import { Menu, StayPrimaryLandscape } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
import { Button } from '@mui/joy';

export default function DrawerScrollable() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();

  const findUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://website-8t82.onrender.com/api/profile', { token });

      if (response.status === 200) {
        setUsername(response.data.username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (open) {
      findUser();
    }
  }, [open]);

  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ display: { xs: 'none', md: 'inline-flex' }, left: 0 }}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle sx={{ fontSize: 30, fontFamily: "'Pricedown' ,sans-serif" }}>
          Epsilon Program
        </DialogTitle>
        <DialogContent>
          <List sx={{ fontSize: 20, fontFamily: "'Pricedown', sans-serif" }}>
            <ListItem>
              <ListItemButton onClick={() => navigate('/')}>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/membership-tiers')}>Join Us</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/Donation')}>Donate</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/testimonials')}>Testimonials</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/UserPage')}>Event Registeration</ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            p: 1.5,
            pb: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar size="lg" onClick={() => navigate('/user-profile')}/>
          <div>
            <Typography level="title-md">{username || 'Guest'}</Typography>
            <Typography level="body-sm">joined 20 Jun 2023</Typography>
          </div>
          {username ? (
            <Button sx={{ ml: 'auto' }} onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}>
              Logout
            </Button>
          ) : (
            <Button sx={{ ml: 'auto' }} onClick={() => navigate('/Login')}>
              Login
            </Button>
          )}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}


