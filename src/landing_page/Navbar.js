import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#121212',
  color: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
  padding: '8px 0',
});

const NavButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  margin: '0 12px',
  '&:hover': {
    color: '#03DAC6',
    backgroundColor: 'transparent',
  },
});

const LogoText = styled(Typography)({
  fontWeight: 700,
  fontSize: '24px',
  background: 'linear-gradient(90deg, #03DAC6 0%, #BB86FC 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginRight: '40px',
});

const DemoButton = styled(Button)({
  backgroundColor: '#03DAC6',
  color: '#121212',
  borderRadius: '8px',
  padding: '8px 24px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#00C9B6',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.2s ease',
});

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LogoText variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }}>
            InfraVision
          </LogoText>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <NavButton component={Link} to="/">Home</NavButton>
            <NavButton component={Link} to="/landing_page/about.js">About</NavButton>
            
            <NavButton component={Link} to="/landing_page/contact.js">Contact</NavButton>
          </Box>

          <DemoButton component={Link} to="./landing_page/SignUp">
            Sign UP
          </DemoButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;