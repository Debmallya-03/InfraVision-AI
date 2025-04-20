import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled(Box)({
  position: 'relative',
  height: '100vh',
  minHeight: '800px',
  width: '100%',
  backgroundImage: 'url(/media/images/imgg2.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '15vh',
  color: 'white',
  overflow: 'hidden'
});

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
  maxWidth: '600px',
  padding: '0 2%',
  textAlign: 'left',
  marginTop: '5%',
});

const HeroButton = styled(Button)({
  marginTop: '10px',
  padding: '14px 32px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  borderRadius: '0',
  '&:first-of-type': {
    marginRight: '20px',
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#1565c0',
    }
  },
  '&:last-of-type': {
    border: '2px solid white',
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    }
  }
});

function Hero() {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroContent>
        <Typography variant="h1" component="h1" gutterBottom sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 700,
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
        }}>
          Scan. Detect. Prevent
        </Typography>
        <Typography variant="h2" component="h2" sx={{
          fontSize: { xs: '1.3rem', md: '1.8rem' },
          fontWeight: 400,
          marginBottom: '2rem',
          lineHeight: 1.4,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
        }}>
          <strong>InfraVision AI</strong> harnesses the power of cutting-edge technology to revolutionize infrastructure and save from ManMade Disasters
        </Typography>
        <Box>
          <HeroButton variant="contained" onClick={() => navigate('./landing_page/SignIn')}>Explore Now</HeroButton>
          <HeroButton variant="outlined">Learn More</HeroButton>
        </Box>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;