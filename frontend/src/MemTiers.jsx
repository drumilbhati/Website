import React, { useState } from 'react';
import { Button, Card, Typography, Stack, Modal, ModalDialog, ModalClose, Box } from '@mui/joy';

const MembershipTiers = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const tiers = [
    {
      name: 'Basic',
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      features: ['Access to basic content', 'Email support', 'Monthly newsletter'],
      gradient: 'linear-gradient(45deg, #45B3FA, #8BC34A)'
    },
    {
      name: 'Pro',
      monthlyPrice: '$19.99',
      yearlyPrice: '$199.99',
      features: ['Access to all content', 'Priority email support', 'Exclusive webinars', 'Ad-free experience'],
      gradient: 'linear-gradient(45deg, #FFC5C5, #99CCFF, #66CCCC)'
    },
    {
      name: 'Premium',
      monthlyPrice: '$29.99',
      yearlyPrice: '$299.99',
      features: ['All Pro features', '24/7 phone support', 'Personal account manager', 'Early access to new features'],
      gradient: 'linear-gradient(95deg, #3498DB, #2ECC71)'
    }
  ];

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    setOpenModal(true);
  };

  const handleConfirm = () => {
    setOpenModal(false);
    console.log(`Confirmed subscription to ${selectedTier.name} tier`);
  };

  return (
    <Stack spacing={4} alignItems="center">
      <Box 
        sx={{ 
          bgcolor: '#000', 
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
            color: '#4caf50',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            animation: 'fadeIn 1s ease-in'
          }}
        >
          Select the Membership
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
              <Typography level="h3" sx={{ mb: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{tier.monthlyPrice}/month</Typography>
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
            background: selectedTier?.gradient,
            color: 'white',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
          }}
        >
          <ModalClose sx={{ color: 'white' }} />
          <Typography level="h4" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Confirm Subscription</Typography>
          <Typography sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            You have selected the {selectedTier?.name} tier at {selectedTier?.monthlyPrice}/month. 
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
    </Stack>
  );
};

export default MembershipTiers;