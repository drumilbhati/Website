import React, { useState, useEffect } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { Sun, Moon, Eye } from 'lucide-react';
import Navbar from './Navbar.jsx';
import './App.css';

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

  const EpsilonHomepage = () => {
    const [isEnlightened, setIsEnlightened] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsEnlightened(prev => !prev);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <CssVarsProvider theme={theme} defaultMode="dark">
        <Sheet
          sx={{
            backgroundColor: '#000',
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #121212, #0a0a0a)',
          }}
        >
          <Sheet
            component="header"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#222',
              backdropFilter: 'blur(10px)',
              padding: 2,
            }}
          >
            <Typography
              level="h1"
              component="h1"
              sx={{
                paddingLeft: 5,
                paddingTop: 2,
                fontFamily: "'Pricedown', sans-serif",
                color: '#ffab00',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Epsilon Program
            </Typography>
          </Sheet>
          <Sheet
            component="navbar"
            sx={{
              display: 'block',
              minWidth: "100%",
              background: '#222',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Navbar />
          </Sheet>

          <Sheet component="main" sx={{ px: 4, py: 8, justifyItems: 'center', backgroundColor: '#111' }}>
            <Typography
              level="h1"
              textAlign="center"
              sx={{
                mb: 4,
                fontFamily: "'Pricedown', sans-serif",
                color: '#ffab00',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Seeking Truth in This 9-Dimensional World
            </Typography>
            <Typography level="h3" textAlign="center" sx={{ mb: 4, color: '#ffab00' }}>
              Unlock the secrets of the universe and ascend to a higher plane of existence.
            </Typography>
            <Button
              size="lg"
              sx={{
                display: 'block',
                mx: 'auto',
                mb: 8,
                backgroundColor: '#ffab00',
                color: '#000',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#ffd600' },
              }}
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
                  <Card sx={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', backdropFilter: 'blur(10px)' }}>
                    <CardContent>
                      <item.icon style={{ width: 48, height: 48, marginBottom: 16, color: '#ffab00' }} />
                      <Typography level="h4" component="h3" sx={{ mb: 1, color: '#ffab00' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography level="h2" textAlign="center" sx={{ mb: 2, color: '#ffab00', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Are You Ready to Ascend?
            </Typography>
            <Typography level="h4" textAlign="center" sx={{ mb: 4, color: '#fff' }}>
              Join the Epsilon Program and unlock your true potential.
            </Typography> 
          </Sheet>

          <Sheet
            component="footer"
            sx={{
              p: 2,
              textAlign: 'center',
              backgroundColor: 'rgba(10, 10, 10, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography level="body-sm" sx={{ color: '#fff' }}>
              © 2024 Epsilon Program. All Rights Reserved.
            </Typography>
          </Sheet>
        </Sheet>
      </CssVarsProvider>
    );
  };

  export default EpsilonHomepage;