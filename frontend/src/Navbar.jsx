import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';

export default function DrawerScrollable() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'none', md: 'inline-flex', right: 560 } }}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle sx={{fontSize: 30, fontFamily: "'Pricedown', sans-serif"}}>Epsilon Program</DialogTitle>
        <DialogContent>
          <List sx={{fontSize: 20, fontFamily: "'Pricedown', sans-serif"}}>
            <ListItem>
              <ListItemButton onClick={() => navigate('/')}>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/join')}>Join Us</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/donate')}>Donate</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/testimonials')}>Testimonials</ListItemButton>
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
          <Avatar size="lg" />
          <div>
            <Typography level="title-md">user.username</Typography>
            <Typography level="body-sm">joined 20 Jun 2023</Typography>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
