import React, { useState, useEffect } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { DollarSign, Zap, Brain, ChevronUp, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar.jsx';
import './App.css';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        background: {
          body: '#121212',
          surface: '#1e1e1e',
        },
      },
    },
  },
});

const EpsilonDonation = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [isEnlightened, setIsEnlightened] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const donationInterval = setInterval(() => {
      setDonationAmount(prev => prev + Math.floor(Math.random() * 100));
    }, 3000);

    const enlightenmentInterval = setInterval(() => {
      setIsEnlightened(prev => !prev);
    }, 5000);

    return () => {
      clearInterval(donationInterval);
      clearInterval(enlightenmentInterval);
    };
  }, []);

  const addFloatingIcon = () => {
    const newIcon = {
      id: Date.now(),
      icon: [DollarSign, Zap, Brain, Eye][Math.floor(Math.random() * 4)],
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
    };
    setFloatingIcons(prev => [...prev, newIcon]);
    setTimeout(() => {
      setFloatingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
    }, 5000);
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <Sheet
        sx={{
          backgroundColor: '#121212',
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #121212, #1e1e1e)',
          perspective: '1000px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <AnimatePresence>
          {floatingIcons.map(icon => (
            <motion.div
              key={icon.id}
              initial={{ x: icon.x, y: icon.y, opacity: 0 }}
              animate={{ y: -100, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5 }}
              style={{ position: 'absolute', zIndex: 10 }}
            >
              <icon.icon size={32} color="#4caf50" />
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Sheet
            component="header"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(30, 30, 30, 0.8)',
              backdropFilter: 'blur(10px)',
              padding: 2,
              transform: 'rotateX(5deg)',
              transformOrigin: 'top',
            }}
          >
            <Typography
              level="h1"
              component="h1"
              sx={{
                paddingLeft: 5,
                paddingTop: 2,
                fontFamily: "'Pricedown', sans-serif",
                color: '#4caf50',
                textShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
              }}
            >
              Epsilon Program
            </Typography>
          </Sheet>
        </motion.div>

        <Sheet
          component="navbar"
          sx={{
            display: 'block',
            minWidth: "100%",
            background: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
            transform: 'rotateX(-5deg)',
            transformOrigin: 'top',
          }}
        >
          <Navbar />
        </Sheet>

        <Sheet component="main" sx={{ px: 4, py: 8, justifyItems: 'center', backgroundColor: 'rgba(30, 30, 30, 0.8)' }}>
          <motion.div
            animate={{ scale: isEnlightened ? 1.1 : 1 }}
            transition={{ duration: 2 }}
          >
            <Typography
              level="h1"
              textAlign="center"
              sx={{
                mb: 4,
                fontFamily: "'Pricedown', sans-serif",
                color: '#4caf50',
                textShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
                transform: 'perspective(1000px) rotateX(10deg)',
              }}
            >
              Kifflom! Seek the Truth in Los Santos
            </Typography>
          </motion.div>
          <Typography level="h3" textAlign="center" sx={{ mb: 4, color: '#81c784' }}>
            Embrace the teachings of Kraff and ascend to the 10th Paradigm.
          </Typography>
          <Button
            size="lg"
            onClick={addFloatingIcon}
            sx={{
              display: 'block',
              mx: 'auto',
              mb: 8,
              backgroundColor: '#4caf50',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#45a049', transform: 'scale(1.05)' },
              transition: 'all 0.3s ease',
              boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
            }}
          >
            Donate to Ascend
          </Button>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              { icon: DollarSign, title: 'Generous Donations', description: 'Your path to enlightenment begins with opening your wallet.' },
              { icon: Zap, title: 'Karmic Energy', description: 'Harness the power of the universe through our patented Epsilon tracts.' },
              { icon: Brain, title: 'Paradigm Shift', description: 'Expand your mind beyond the limits of this dimensional reality.' },
            ].map((item, index) => (
              <Grid key={index} xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card 
                    sx={{ 
                      backgroundColor: 'rgba(30, 30, 30, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      transform: 'perspective(1000px) rotateY(5deg)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg) scale(1.05)',
                      },
                      boxShadow: '0 0 20px rgba(76, 175, 80, 0.3)',
                    }}
                  >
                    <CardContent>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <item.icon style={{ width: 48, height: 48, marginBottom: 16, color: '#4caf50' }} />
                      </motion.div>
                      <Typography level="h4" component="h3" sx={{ mb: 1, color: '#4caf50' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Typography 
              level="h2" 
              textAlign="center" 
              sx={{ 
                mb: 2, 
                color: '#4caf50', 
                textShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
                transform: 'perspective(1000px) rotateX(-5deg)',
              }}
            >
              The Truth is Expensive
            </Typography>
          </motion.div>
          <Typography level="h4" textAlign="center" sx={{ mb: 4, color: '#fff' }}>
            Total Donations: ${donationAmount.toLocaleString()}
          </Typography> 
          <Typography level="body-lg" textAlign="center" sx={{ mb: 4, color: '#81c784' }}>
            Join Cris Formage and the Epsilon Program. Remember, happiness is yours for only $5000!
          </Typography>
        </Sheet>

        <Sheet
          component="footer"
          sx={{
            p: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(30, 30, 30, 0.9)',
            backdropFilter: 'blur(10px)',
            transform: 'rotateX(-5deg)',
            transformOrigin: 'bottom',
          }}
        >
          <Typography level="body-sm" sx={{ color: '#81c784' }}>
            © 2024 Epsilon Program. Kifflom!
          </Typography>
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
};

export default EpsilonDonation;
