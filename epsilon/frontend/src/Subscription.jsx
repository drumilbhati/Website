// // import React from 'react';

// // export default function Subscription() {
// //   return (
// //     <div>
// //       <h2>Subscription Details</h2>
// //       <p>Here are the details for the subscription...</p>
// //       <button>Level I</button>
// //       <button>Level II</button>
// //       <button>Level III</button>

// //     </div>
// //   );
// // }

// // Subscription.jsx
// import React from 'react';
// import Navbar from './Navbar';
// import { List } from '@mui/joy';

// export default function Subscription({ level }) {
//   const subscriptionDetails = {
//     'Level I': {
//       price: '$5/month',
//       benefits: ['Access to basic content', 'Standard Definition'],
//     },
//     'Level II': {
//       price: '$10/month',
//       benefits: ['Access to all content', 'High Definition', 'No ads'],
//     },
//     'Level III': {
//       price: '$15/month',
//       benefits: ['Access to all content', 'Ultra High Definition', 'No ads', 'Offline download'],
//     },
//   };

//   const details = subscriptionDetails[level];

//   return (
//     <div className="subscription-details">
//       <List sx={{width:"5%", paddingLeft: 5}}>
//         <Navbar/>
//       </List>
//       <h2>{level} Subscription</h2>
//       <p>Price: {details.price}</p>
//       <h3>Benefits:</h3>
//       <ul>
//         {details.benefits.map((benefit, index) => (
//           <li key={index}>{benefit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Navbar from './Navbar';

// Custom theme inspired by GTA5 (same as previous components)
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

const subscriptionDetails = {
  'Level I': {
    price: '$5/month',
    benefits: ['Access to basic content', 'Standard Definition'],
  },
  'Level II': {
    price: '$10/month',
    benefits: ['Access to all content', 'High Definition', 'No ads'],
  },
  'Level III': {
    price: '$15/month',
    benefits: ['Access to all content', 'Ultra High Definition', 'No ads', 'Offline download'],
  },
};

export default function Subscription() {
  const [selectedLevel, setSelectedLevel] = useState('Level I');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the subscription process
    console.log(`Subscribed to ${selectedLevel}`);
    // You can add logic here to process the subscription
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Sheet
        sx={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: 'url("/api/placeholder/1920/1080")', // Placeholder for a GTA5-style background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Navbar sx={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
        <Sheet
          sx={{
            width: '80%',
            maxWidth: 600,
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            background: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
          variant="outlined"
        >
          <Typography
            level="h3"
            sx={{
              fontFamily: "'Pricedown', sans-serif", // Custom GTA-style font
              color: '#ffab00',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              textAlign: 'center',
            }}
          >
            Join Los Santos Premium
          </Typography>``
          <form onSubmit={handleSubmit}>
            <RadioGroup
              defaultValue="Level I"
              name="subscription-level"
              onChange={(event) => setSelectedLevel(event.target.value)}
            >
              {Object.entries(subscriptionDetails).map(([level, details]) => (
                <Sheet
                  key={level}
                  sx={{
                    p: 2,
                    borderRadius: 'sm',
                    boxShadow: 'sm',
                    mb: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
                  }}
                >
                  <Radio
                    value={level}
                    label={
                      <Typography level="h5" sx={{ color: '#ffab00' }}>
                        {level} - {details.price}
                      </Typography>
                    }
                    sx={{ mb: 1 }}
                  />
                  <List>
                    {details.benefits.map((benefit, index) => (
                      <ListItem key={index}>
                        <ListItemContent sx={{ color: '#fff' }}>{benefit}</ListItemContent>
                      </ListItem>
                    ))}
                  </List>
                </Sheet>
              ))}
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#ffab00',
                color: '#000',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#ffd600' },
              }}
            >
              Subscribe Now
            </Button>
          </form>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}