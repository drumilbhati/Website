import React, { useState, useEffect } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Checkbox from '@mui/joy/Checkbox';
import Table from '@mui/joy/Table';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { PlusCircle } from 'lucide-react';
import axios from 'axios';

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

const AdminEventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    createdBy: '',
    capacity: 0,
    membershipRequired: false
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/get-events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      await axios.post('/api/post-event', newEvent);
      setIsModalOpen(false);
      setNewEvent({
        title: '',
        description: '',
        date: '',
        location: '',
        createdBy: '',
        capacity: 0,
        membershipRequired: false
      });
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Sheet
        sx={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #1e1e1e, #121212)',
          p: 3,
        }}
      >
        <Typography
          level="h2"
          sx={{
            mb: 4,
            fontFamily: "'Pricedown', sans-serif",
            color: '#ffab00',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Event Management Dashboard
        </Typography>

        <Button
          startDecorator={<PlusCircle />}
          onClick={() => setIsModalOpen(true)}
          sx={{
            mb: 3,
            backgroundColor: '#ffab00',
            color: '#000',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#ffd600' },
          }}
        >
          Create New Event
        </Button>

        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'md',
            overflow: 'auto',
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
          }}
        >
          <Table stickyHeader hoverRow>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Membership Required</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td>{event.location}</td>
                  <td>{event.capacity}</td>
                  <td>{event.membershipRequired}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalDialog>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogContent>
              <Input
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Textarea
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                minRows={3}
                sx={{ mb: 2 }}
              />
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Input
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Input
                placeholder="Created By"
                value={newEvent.createdBy}
                onChange={(e) => setNewEvent({ ...newEvent, createdBy: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Input
                type="number"
                placeholder="Capacity"
                value={newEvent.capacity}
                onChange={(e) => setNewEvent({ ...newEvent, capacity: parseInt(e.target.value) })}
                sx={{ mb: 2 }}
              />
              <Checkbox
                label="Membership Required"
                checked={newEvent.membershipRequired}
                onChange={(e) => setNewEvent({ ...newEvent, membershipRequired: e.target.checked })}
                sx={{ mb: 2 }}
              />
              <Button
                onClick={handleCreateEvent}
                sx={{
                  backgroundColor: '#ffab00',
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#ffd600' },
                }}
              >
                Create Event
              </Button>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </Sheet>
    </CssVarsProvider>
  );
};

export default AdminEventDashboard;