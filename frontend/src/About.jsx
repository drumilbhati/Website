import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        About Epsilon
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Discover the transformative power of the Epsilon Program. Unlock your true potential and embark on a journey of self-discovery.
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/path/to/image1.jpg" alt="Benefit 1" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h6" component="h4" gutterBottom>
              Benefit 1
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Brief description of benefit 1.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Repeat for Benefit 2 */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Repeat for Benefit 3 */}
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
        Join Us
      </Button>
    </Container>
  );
};

export default AboutUs;
