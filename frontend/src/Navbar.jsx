import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Search from '@mui/icons-material/Search';
import Menu from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Join Us', href: '/membership-tiers' },
    { label: 'Find Us', href: '/map' },
    { label: 'Login', href: '/login' },
    { label: 'Demo', href: '/user-profile'}
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Typography
        level="h4"
        component="div"
        sx={{
          fontFamily: "'Pricedown', sans-serif",
          color: '#ffab00',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          display: { xs: 'none', sm: 'block' },
        }}
      >
      </Typography>

      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 2,
        }}
      >
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            role="menuitem"
            component="a"
            href={item.href}
            sx={{
              fontWeight: 'bold',
              color: '#ffab00',
              '&:hover': {
                backgroundColor: 'rgba(255, 171, 0, 0.1)',
              },
            }}
          >
            {item.label}
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Input
          size="sm"
          placeholder="Search"
          variant="outlined"
          endDecorator={<Search />}
          sx={{
            display: { xs: 'none', md: 'flex' },
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        />
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <Menu />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;