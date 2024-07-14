
//Drumil's Code

import React, { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Sun, Moon, Eye } from 'lucide-react';

const EpsilonHomepage = () => {
  const [isEnlightened, setIsEnlightened] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnlightened(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          minHeight: '100vh',
        }}
      >
        <Sheet
          component="header"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography level="h1" component="h1" sx={{ paddingLeft: 5, paddingTop: 5}}>
            Epsilon Program
          </Typography>
          </Sheet>
          <Sheet
          component="navbar"
          sx={{
            display: 'block',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: "100%",
          }}>
          <List orientation="horizontal" sx={{ gap: 2 , padding: 5}}>
            <ListItem>
              <ListItemButton component="a" href="#about">About</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="#teachings">Teachings</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="#join">Join Us</ListItemButton>
            </ListItem>
            <ListItem>
              <Button sx={{
                alignSelf: 'right',
              }} onClick= {() => {
                window.location.href = '/login';
              }}>Login</Button>
            </ListItem>
          </List>
        </Sheet>

        <Sheet component="main" sx={{ px: 4, py: 8, justifyItems: 'center' }}>
          <Typography level="h1" textAlign="center" sx={{ mb: 4 }}>
            Seeking Truth in This 9-Dimensional World
          </Typography>
          <Typography level="h3" textAlign="center" sx={{ mb: 4 }}>
            Unlock the secrets of the universe and ascend to a higher plane of existence.
          </Typography>
          <Button
            size="lg"
            sx={{ display: 'block', mx: 'auto', mb: 8 }}
          >
            Begin Your Journey
          </Button>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              { icon: Sun, title: 'Enlightenment', description: 'Discover the truth that lies beyond the veil of reality.' },
              { icon: Moon, title: 'Inner Peace', description: 'Achieve harmony with the cosmic forces that shape our existence.' },
              { icon: Eye, title: 'True Vision', description: 'See beyond the limitations of your physical form.' },
            ].map((item, index) => (
              <Grid key={index} xs={12} md={4}>
                <Card>
                  <CardContent>
                    <item.icon style={{ width: 48, height: 48, marginBottom: 16 }} />
                    <Typography level="h4" component="h3" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography level="h2" textAlign="center" sx={{ mb: 2 }}>
            Are You Ready to Ascend?
          </Typography>
          <Typography level="h4" textAlign="center" sx={{ mb: 4 }}>
            Join the Epsilon Program and unlock your true potential.
          </Typography>
          <Sheet
            sx={{
              width: 200,
              height: 200,
              mx: 'auto',
              transition: 'transform 1s',
              transform: isEnlightened ? 'scale(1.1) rotate(360deg)' : 'none',
            }}
          >
            <img src="/frontend/src/assets/epsilon.png" alt="Epsilon Symbol" style={{ width: '100%', height: '100%' }} />
          </Sheet>
        </Sheet>

        <Sheet
          component="footer"
          sx={{
            p: 2,
            textAlign: 'center',
            backgroundColor: 'background.backdrop',
          }}
        >
          <Typography level="body-sm">
            © 2024 Epsilon Program.
          </Typography>
        </Sheet>
       
</Sheet>
      
    </CssVarsProvider>
  );
};

export default EpsilonHomepage;



// Homepage.jsx--1
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// export default function Homepage() {
//   return (
//     <div className="homepage">
//       <h1>Welcome to the Epsilon Program</h1>
//       <p>Discover enlightenment through our membership tiers and special events.</p>
//       <nav className="navbar">
//         <Link to="/login" className="cta-button">Login / Signup</Link>
//         <Link to="/membership-tiers" className="cta-button">Membership Tiers</Link>
//         <Link to="/member-stories" className="cta-button">Member Stories</Link>
//         <Link to="/admin" className="cta-button">Admin Features</Link>
//         <Link to="/events" className="cta-button">Events</Link>
//         <Link to="/donations" className="cta-button">Donations</Link>
//         <Link to="/virtual-currency" className="cta-button">Virtual Currency</Link>
//       </nav>
//     </div>
//   );
// }

// Homepage.jsx --2
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// export default function Homepage() {
//   return (
//     <div className="homepage">
//       <header>
//         <h1>Welcome to the Epsilon Program</h1>
//         <Link to="/login" className="login-button">Login / Signup</Link>
//       </header>
//       <p>Discover enlightenment through our membership tiers and special events.</p>
//       <nav className="navbar">
//         <Link to="/membership-tiers" className="cta-button">Membership Tiers</Link>
//         <Link to="/member-stories" className="cta-button">Member Stories</Link>
//         <Link to="/admin" className="cta-button">Admin Features</Link>
//         <Link to="/events" className="cta-button">Events</Link>
//         <Link to="/donations" className="cta-button">Donations</Link>
//         <Link to="/virtual-currency" className="cta-button">Virtual Currency</Link>
//       </nav>
//       <div className="footer">
//         <p>Join the Epsilon Program and start your journey to enlightenment today!</p>
//       </div>
//     </div>
//   );
// }





// export default function Homepage() {
//   return (
//     <div className="homepage">
//       <h1>Welcome to the Epsilon Program</h1>
//       <p>Follow the path to enlightenment and discover your true self.</p>
//       <Link to="/membership-tiers" className="cta-button">Explore Membership Tiers</Link>
//     </div>
//   );
// }

//Previos code is below discuss with Vidhan and then commented out

// import React, { useState, useEffect } from 'react';
// import { CssVarsProvider } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Grid from '@mui/joy/Grid';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import { Sun, Moon, Eye } from 'lucide-react';





// const EpsilonHomepage = () => {
//   const [isEnlightened, setIsEnlightened] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsEnlightened(prev => !prev);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <CssVarsProvider>
//       <Sheet
//         sx={{
//           minHeight: '100vh',
//         }}
//       >
//         <Sheet
//           component="header"
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <Typography level="h1" component="h1" sx ={{ padding: 5 }}>
//             Epsilon Program
//           </Typography>
//           <List orientation="horizontal" sx={{ gap: 2 , padding: 5}}>
//             <ListItem>
//               <ListItemButton component="a" href="#about">About</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton component="a" href="#teachings">Teachings</ListItemButton>
//             </ListItem>
//             <ListItem>
//               <ListItemButton component="a" href="#join">Join Us</ListItemButton>
//             </ListItem>
//           </List>
//         </Sheet>

//         <Sheet component="main" sx={{ px: 4, py: 8 }}>
//           <Typography level="h1" textAlign="center" sx={{ mb: 4 }}>
//             Seeking Truth in This 9-Dimensional World
//           </Typography>
//           <Typography level="h3" textAlign="center" sx={{ mb: 4 }}>
//             Unlock the secrets of the universe and ascend to a higher plane of existence.
//           </Typography>
//           <Button
//             size="lg"
//             sx={{ display: 'block', mx: 'auto', mb: 8 }}
//           >
//             Begin Your Journey
//           </Button>

//           <Grid container spacing={4} sx={{ mb: 8 }}>
//             {[
//               { icon: Sun, title: 'Enlightenment', description: 'Discover the truth that lies beyond the veil of reality.' },
//               { icon: Moon, title: 'Inner Peace', description: 'Achieve harmony with the cosmic forces that shape our existence.' },
//               { icon: Eye, title: 'True Vision', description: 'See beyond the limitations of your physical form.' },
//             ].map((item, index) => (
//               <Grid key={index} xs={12} md={4}>
//                 <Card>
//                   <CardContent>
//                     <item.icon style={{ width: 48, height: 48, marginBottom: 16 }} />
//                     <Typography level="h4" component="h3" sx={{ mb: 1 }}>
//                       {item.title}
//                     </Typography>
//                     <Typography>
//                       {item.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Typography level="h2" textAlign="center" sx={{ mb: 2 }}>
//             Are You Ready to Ascend?
//           </Typography>
//           <Typography level="h4" textAlign="center" sx={{ mb: 4 }}>
//             Join the Epsilon Program and unlock your true potential.
//           </Typography>
//           <Sheet
//             sx={{
//               width: 200,
//               height: 200,
//               mx: 'auto',
//               transition: 'transform 1s',
//               transform: isEnlightened ? 'scale(1.1) rotate(360deg)' : 'none',
//             }}
//           >
//             <img src="/frontend/src/assets/epsilon.png" alt="Epsilon Symbol" style={{ width: '100%', height: '100%' }} />
//           </Sheet>
//         </Sheet>

//         <Sheet
//           component="footer"
//           sx={{
//             p: 2,
//             textAlign: 'center',
//             backgroundColor: 'background.backdrop',
//           }}
//         >
//           <Typography level="body-sm">
//             © 2024 Epsilon Program.
//           </Typography>
//         </Sheet>
//       </Sheet>
//     </CssVarsProvider>
//   );
// };

// export default EpsilonHomepage;