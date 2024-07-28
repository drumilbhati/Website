import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Stack, Modal, ModalDialog, ModalClose, Box, Sheet, Alert } from '@mui/joy';
import axios from 'axios';

const MembershipTiers = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [userBalance, setUserBalance] = useState(0); // Simulated user balance
  const [alert, setAlert] = useState(null);

  const tiers = [
    {
      name: 'Cris Formage Level 1',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: ['Access to basic content', 'Email support', 'Monthly newsletter'],
      gradient: 'linear-gradient(45deg, #FFAB00, #FF12AA)'
    },
    {
      name: 'Cris Formage Level 2',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: ['Access to all content', 'Priority email support', 'Exclusive webinars', 'Ad-free experience'],
      gradient: 'linear-gradient(45deg, #FFAB00, #FF12DD)'
    },
    {
      name: 'Cris Formage Level 3',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: ['All Pro features', '24/7 phone support', 'Personal account manager', 'Early access to new features'],
      gradient: 'linear-gradient(45deg, #FFAB00, #FF12FF)'
    }
  ];

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setOpenModal(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/subscribe', {
        tier: selectedTier.name,
        token: localStorage.getItem('token')
      });
      if (response.status === 200) {
        setUserBalance(response.data.balance);
        setAlert({
          type: 'success',
          message: `Successfully subscribed to ${selectedTier.name}. Your new balance is $${response.data.balance}.`
        });
      } else {
        setAlert({
          type: 'error',
          message: response.data.message
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setAlert({
        type: 'error',
        message: 'Subscription failed. Please try again later.'
      });
    }
    setOpenModal(false);
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5000);
      return () => clearTimeout(timer);
    }
    const response = axios.get('http://localhost:3001/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    response.then((response) => {
      setUserBalance(response.data.balance);
    });
  }, [alert]);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
      animation: 'gradientBG 15s ease infinite',
      backgroundSize: '400% 400%',
      '@keyframes gradientBG': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    }}>
      <Stack spacing={4} alignItems="center">
        <Box 
          sx={{ 
            bgcolor: 'rgba(0, 0, 0, 0.5)', 
            width: '100%', 
            py: 2, 
            mb: 4,
            textAlign: 'center',
            animation: 'fadeIn 1s ease-in'
          }}
        >
          <Typography 
            level="h2" 
            sx={{ 
              color: '#FFA500',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              animation: 'fadeIn 1s ease-in'
            }}
          >
            Select Your Membership
          </Typography>
          <Typography 
            level="body1" 
            sx={{ 
              color: '#FFF',
              mt: 2
            }}
          >
            Your balance: ${userBalance !== null ? userBalance : 'Loading...'} 
          </Typography>
        </Box>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} useFlexGap>
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              variant="outlined"
              sx={{
                mb: 2,
                width: 300,
                background: tier.gradient,
                color: 'white',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
                transform: 'perspective(1000px) rotateX(10deg)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)'
                },
                animation: 'fadeIn 1s ease-in',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography level="h2" sx={{ mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{tier.name}</Typography>
                <Typography level="h3" sx={{ mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>${tier.monthlyPrice}</Typography>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  {tier.features.map((feature, index) => (
                    <Typography key={index} level="body2" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>• {feature}</Typography>
                  ))}
                </Stack>
              </Box>
              <Button 
                onClick={() => handleTierSelect(tier)}
                sx={{
                  mt: 'auto',
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'black',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  } 
                }}
              >
                Buy {tier.name}
              </Button>
            </Card>
          ))}
        </Stack>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>  
          <ModalDialog
            sx={{
              background: selectedTier?.gradient || 'linear-gradient(45deg, #FFA500, #FFD700)',
              color: 'white',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
            }}
          >
            <ModalClose sx={{ color: 'white' }} />
            <Typography level="h4" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Confirm Subscription</Typography>
            <Typography sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              You have selected the {selectedTier?.name} tier at ${selectedTier?.monthlyPrice}.
              Would you like to proceed with this subscription?
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button 
                variant="softA" 
                onClick={() => setOpenModal(false)}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'black',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  }
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleConfirm}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'black',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.3)',
                  }
                }}
              >
                Confirm
              </Button>
            </Stack>
          </ModalDialog>
        </Modal>
        {alert && (
          <Alert
            variant="soft"
            color={alert.type === 'error' ? 'danger' : 'success'}
            sx={{
              position: 'fixed',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              maxWidth: '90%',
              width: '400px',
            }}
          >
            {alert.message}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default MembershipTiers;

// import React, { useState } from 'react';
// import { Button, Card, Typography, Stack, Modal, ModalDialog, ModalClose, Box, Sheet } from '@mui/joy';
// import Navbar from './Navbar.jsx';
// import './App.css';

// const MembershipTiers = () => {
//   const [selectedTier, setSelectedTier] = useState(null);
//   const [openModal, setOpenModal] = useState(false);

//   const tiers = [
//     {
//       name: 'Cris Formage Level 1',
//       monthlyPrice: '$9.99',
//       yearlyPrice: '$99.99',
//       features: ['Access to basic content', 'Email support', 'Monthly newsletter'],
//       gradient: 'linear-gradient(45deg, #FFAB00, #FF12AA)'
//     },
//     {
//       name: 'Cris Formage Level 2',
//       monthlyPrice: '$19.99',
//       yearlyPrice: '$199.99',
//       features: ['Access to all content', 'Priority email support', 'Exclusive webinars', 'Ad-free experience'],
//       gradient: 'linear-gradient(45deg, #FFAB00, #FF12DD)'
//     },
//     {
//       name: 'Cris Formage Level 3',
//       monthlyPrice: '$29.99',
//       yearlyPrice: '$299.99',
//       features: ['All Pro features', '24/7 phone support', 'Personal account manager', 'Early access to new features'],
//       gradient: 'linear-gradient(45deg, #FFAB00, #FF12FF)'
//     }
//   ];

//   const handleTierSelect = (tier) => {
//     setSelectedTier(tier);
//     setOpenModal(true);
//   };

//   const handleConfirm = async () => {
//     setOpenModal(false);
  
//     try {
//       const { token } = user;
//       const decodedToken = jwt.verify(token, JWT_SECRET);
//       const userId = decodedToken.userId;
  
//       const user = await User.findById(userId).select('-password');
  
//       if (!user) {
//         return alert('User not found');
//       }
  
//       const subscriptionPrice = selectedTier.price;
//       const userBalance = user.balance;
  
//       if (userBalance < subscriptionPrice) {
//         return alert('Insufficient balance');
//       }
  
//       user.balance -= subscriptionPrice;
//       user.subscription = selectedTier.name;
//       user.subscriptionExpiry = new Date(Date.now() + selectedTier.duration * 24 * 60 * 60 * 1000);
  
//       await user.save();
  
//       alert(`Subscribed to ${selectedTier.name} tier successfully`);
//     } catch (error) {
//       console.error('Subscription error:', error);
//       alert('Server error');
//     }
//   };



//   return (
//     <Stack spacing={4} alignItems="center">
//       <Box 
//         sx={{ 
//           bgcolor: '#000', 
//           width: '100%', 
//           py: 2, 
//           mb: 4,
//           textAlign: 'center',
//           animation: 'fadeIn 1s ease-in'
//         }}
//       >
//         <Typography 
//           level="h2" 
//           sx={{ 
//             color: '#FFA500',
//             textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//             animation: 'fadeIn 1s ease-in'
//           }}
//         >
//           Select the Membership
//         </Typography>
//       </Box>
//       <Sheet
//         component="navbar"
//         sx={{
//           display: 'block',
//           minWidth: "100%",
//           background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
//           backdropFilter: 'blur(10px)',
//         }}
//       >
//       </Sheet>
      
//       <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} useFlexGap>
//         {tiers.map((tier) => (
//           <Card
//             key={tier.name}
//             variant="outlined"
//             sx={{
//               mb: 2,
//               width: 300,
//               background: tier.gradient,
//               color: 'white',
//               boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
//               transform: 'perspective(1000px) rotateX(10deg)',
//               transition: 'all 0.3s ease-in-out',
//               '&:hover': { 
//                 transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
//                 boxShadow: '0 15px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)'
//               },
//               animation: 'fadeIn 1s ease-in',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between'
//             }}
//           >
//             <Box>
//               <Typography level="h2" sx={{ mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{tier.name}</Typography>
//               <Typography level="h3" sx={{ mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{tier.monthlyPrice}/month</Typography>
//               <Stack spacing={1} sx={{ mb: 2 }}>
//                 {tier.features.map((feature, index) => (
//                   <Typography key={index} level="body2" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>• {feature}</Typography>
//                 ))}
//               </Stack>
//             </Box>
//             <Button 
//               onClick={() => handleTierSelect(tier) }
//               sx={{
//                 mt: 'auto',
//                 bgcolor: 'rgba(255,255,255,0.2)',
//                 color: 'black',
//                 '&:hover': {
//                   bgcolor: 'rgba(255,255,255,0.3)',
//                 } 
//               }}
//             >
//               Buy {tier.name}
//             </Button>
//           </Card>
//         ))}
//       </Stack>
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>  
//         <ModalDialog
//           sx={{
//             background: selectedTier?.gradient || 'linear-gradient(45deg, #FFA500, #FFD700)',
//             color: 'white',
//             boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
//           }}
//         >
//           <ModalClose sx={{ color: 'white' }} />
//           <Typography level="h4" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Confirm Subscription</Typography>
//           <Typography sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
//             You have selected the {selectedTier?.name} tier at {selectedTier?.monthlyPrice}/month. 
//             Would you like to proceed with this subscription?
//           </Typography>
//           <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
//             <Button 
//               variant="softA" 
//               onClick={() => setOpenModal(false)}
//               sx={{
//                 bgcolor: 'rgba(255,255,255,0.2)',
//                 color: 'black',
//                 '&:hover': {
//                   bgcolor: 'rgba(255,255,255,0.3)',
//                 }
//               }}
//             >
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleConfirm}
//               sx={{
//                 bgcolor: 'rgba(255,255,255,0.2)',
//                 color: 'black',
//                 '&:hover': {
//                   bgcolor: 'rgba(255,255,255,0.3)',
//                 }
//               }}
//             >
//               Confirm
//             </Button>
//           </Stack>
//         </ModalDialog>
//       </Modal>
//     </Stack>
//   );
// };

// export default MembershipTiers;