import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(90deg, #03DAC6, #BB86FC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            About InfraScan AI
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            InfraScan AI is an innovative AI-powered mobile-first platform designed to revolutionize infrastructure inspection. By leveraging advanced computer vision technology, it allows users to scan and detect damage in structures, such as buildings, bridges, and roads, directly through their mobile devices.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            

            <Button
              variant="outlined"
              sx={{
                color: '#03DAC6',
                borderColor: '#03DAC6',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 600,
              }}
              onClick={() => navigate('/landing_page/contact.js')}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
