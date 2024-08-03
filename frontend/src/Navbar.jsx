import React, { useEffect, useState } from 'react';
import { Box, IconButton, List, ListItem, Button, Typography } from '@mui/joy';
import { Menu, X } from 'lucide-react';
import axios from 'axios';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);

  const navItems = [
          { name: 'Home' , path: '/' },
          { name: 'Join us', path: '/membership-tiers' },
          { name: 'Donate', path: '/Donation' },
          { name: 'Event Registration', path: '/UserPage' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const findUser = async() => {
    try {

      const response = await axios.post('https://website-8t82.onrender.com/api/profile', 
        {
          token: localStorage.getItem('token')
        }
      );

      if (response.data) {
        const responseData = response.data;
        console.log('User data:', responseData);
        setUsername(responseData.username);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findUser();
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: 'rgba(34, 34, 34, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography
            level="h1"
            component="h1"
            sx={{
              fontFamily: "'Pricedown', sans-serif",
              color: '#ffab00',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              flexGrow: 1,
              textAlign: 'center',
              
            }}
          >
            Epsilon Program
          </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              component="a"
              href={item.path}
              variant="outlined"
              color="neutral"
              sx={{
                fontFamily: "'Pricedown', sans-serif",
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                borderColor: 'transparent',
                '&:hover': {
                  borderColor: '#ffab00',
                  backgroundColor: 'rgba(255, 171, 0, 0.1)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
          {username ? (
                <Button variant="outlined"
                  color="neutral"
                  sx={{
                    fontFamily: "'Pricedown', sans-serif",
                    color: '#ff00ab',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    borderColor: 'transparent',
                    '&:hover': {
                      borderColor: '#ffab00',
                      backgroundColor: 'rgba(255, 171, 0, 0.1)',
                    },
                  }} 
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                }}>
                  Logout
                </Button>
              ) : (
                <Button variant="outlined"
                  color="neutral"
                  sx={{
                    fontFamily: "'Pricedown', sans-serif",
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    borderColor: 'transparent',
                    '&:hover': {
                      borderColor: '#ffab00',
                      backgroundColor: 'rgba(255, 171, 0, 0.1)',
                    },
                  }} onClick={() => {
                    window.location.href = '/Login';
                  }}>
                    Login
                </Button>
              )}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={toggleMenu}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#fff',
          }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </IconButton>
      </Box>

      {/* Mobile Menu */}
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(34, 34, 34, 0.95)',
          backdropFilter: 'blur(10px)',
          display: { xs: isMenuOpen ? 'block' : 'none', md: 'none' },
          zIndex: 1000,
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name}>
              <Button
                component="a"
                href={item.path}
                fullWidth
                variant="outlined"
                color="neutral"
                sx={{
                  justifyContent: 'flex-start',
                  color: '#fff',
                  borderColor: 'transparent',
                  '&:hover': {
                    borderColor: '#ffab00',
                    backgroundColor: 'rgba(255, 171, 0, 0.1)',
                  },
                }}
              >
                {item.name}
              </Button>
              </ListItem>
          ))}
          <ListItem>
          {username ? (
                <Button 
                  fullWidth
                  variant="outlined"
                  color="neutral"
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#ff00ab',
                    borderColor: 'transparent',
                    '&:hover': {
                      borderColor: '#ffab00',
                      backgroundColor: 'rgba(255, 171, 0, 0.1)',
                    },
                  }}
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}>
                    Logout
                </Button>
              ) : (
                <Button 
                fullWidth
                variant="outlined"
                color="neutral"
                sx={{
                  justifyContent: 'flex-start',
                  color: '#fff',
                  borderColor: 'transparent',
                  '&:hover': {
                    borderColor: '#ffab00',
                    backgroundColor: 'rgba(255, 171, 0, 0.1)',
                  },
                }}
                onClick={() => {
                  window.location.href = '/Login';
                }}>
                  Login
                </Button>
              )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Box, IconButton, List, ListItem, Button, Typography } from '@mui/joy';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Login', path: '/Login' },
//     { name: 'Join us', path: '/membership-tiers' },
//     { name: 'Donate', path: '/Donation' },
//     { name: 'Event Registration', path: '/UserPage' }
//   ];
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Box
//       component="nav"
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '1rem',
//         backgroundColor: 'rgba(34, 34, 34, 0.8)',
//         backdropFilter: 'blur(10px)',
//       }}
//     >
//       <Typography
//         level="h6"
//         component="div"
//         sx={{
//           flexGrow: 1,
//           fontFamily: "'Pricedown', sans-serif",
//           color: '#ffab00',
//           fontSize: '1.5rem',
//         }}
//       >
//       </Typography>

//       {/* Desktop Menu */}
//       <Box
//         sx={{
//           display: { xs: 'none', md: 'flex' },
//           gap: 2,
//         }}
//       >
//         {navItems.map((item) => (
//           <Button
//             key={item.name}
//             component="a"
//             href={item.path}
//             variant="outlined"
//             color="neutral"
//             sx={{
//               color: '#fff',
//               borderColor: 'transparent',
//               '&:hover': {
//                 borderColor: '#ffab00',
//                 backgroundColor: 'rgba(255, 171, 0, 0.1)',
//               },
//             }}
//           >
//             {item.name}
//           </Button>
//         ))}
//       </Box>

//       {/* Mobile Menu Button */}
//       <IconButton
//         onClick={toggleMenu}
//         sx={{
//           display: { xs: 'flex', md: 'none' },
//           color: '#fff',
//         }}
//       >
//         {isMenuOpen ? <X /> : <Menu />}
//       </IconButton>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '100%',
//             left: 0,
//             right: 0,
//             backgroundColor: 'rgba(34, 34, 34, 0.95)',
//             backdropFilter: 'blur(10px)',
//             zIndex: 1000,
//           }}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem key={item.name}>
//                 <Button
//                   component="a"
//                   href={item.path}
//                   fullWidth
//                   variant="outlined"
//                   color="neutral"
//                   sx={{
//                     justifyContent: 'flex-start',
//                     color: '#fff',
//                     borderColor: 'transparent',
//                     '&:hover': {
//                       borderColor: '#ffab00',
//                       backgroundColor: 'rgba(255, 171, 0, 0.1)',
//                     },
//                   }}
//                 >
//                   {item.name}
//                 </Button>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;




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
// import { Menu, StayPrimaryLandscape } from '@mui/icons-material';
// import IconButton from '@mui/joy/IconButton';
// import { Button } from '@mui/joy';

// export default function DrawerScrollable() {
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
//     if (open) {
//       findUser();
//     }
//   }, [open]);

//   return (
//     <React.Fragment>
//       <IconButton
//         onClick={() => setOpen(true)}
//         sx={{ display: { xs: 'none', md: 'inline-flex' }, left: 0 }}
//       >
//         <Menu />
//       </IconButton>
//       <Drawer open={open} onClose={() => setOpen(false)}>
//         <ModalClose />
//         <DialogTitle sx={{ fontSize: 30, fontFamily: "'Pricedown' ,sans-serif" }}>
//           Epsilon Program
//         </DialogTitle>
//         <DialogContent>
//           <List sx={{ fontSize: 20, fontFamily: "'Pricedown', sans-serif" }}>
//             <ListItem>
//               <ListItemButton onClick={() => navigate('/')}>Home</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton onClick={() => navigate('/membership-tiers')}>Join Us</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton onClick={() => navigate('/Donation')}>Donate</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton onClick={() => navigate('/testimonials')}>Testimonials</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton onClick={() => navigate('/UserPage')}>Event Registeration</ListItemButton>
//             </ListItem>
//           </List>
//         </DialogContent>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: 1,
//             p: 1.5,
//             pb: 2,
//             borderTop: '1px solid',
//             borderColor: 'divider',
//           }}
//         >
//           <Avatar size="lg" onClick={() => navigate('/user-profile')}/>
//           <div>
//             <Typography level="title-md">{username || 'Guest'}</Typography>
//             <Typography level="body-sm">joined 20 Jun 2023</Typography>
//           </div>
//           {username ? (
//             <Button sx={{ ml: 'auto' }} onClick={() => {
//               localStorage.removeItem('token');
//               window.location.reload();
//             }}>
//               Logout
//             </Button>
//           ) : (
//             <Button sx={{ ml: 'auto' }} onClick={() => navigate('/Login')}>
//               Login
//             </Button>
//           )}
//         </Box>
//       </Drawer>
//     </React.Fragment>
//   );
// }


