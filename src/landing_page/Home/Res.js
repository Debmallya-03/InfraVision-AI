import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const FeatureContainer = styled(Box)(({ theme }) => ({
  padding: '100px 5%',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

const ContentBox = styled(Box)({
  maxWidth: '600px',
  padding: '40px',
  position: 'relative',
  zIndex: 2,
});

const StyledImage = styled(motion.div)({
  borderRadius: '0px',
  overflow: 'visible',
  height: '500px',
  width: '100%',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease, filter 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1)',
  }
});

const StyledButton = styled(Button)({
  padding: '14px 32px',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  marginRight: '16px',
  marginTop: '24px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  }
});

const leftAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const rightAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

function Res() {
  const theme = useTheme();

  return (
    <FeatureContainer>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={leftAnimation}
          >
            <ContentBox>
              <Typography variant="h2" component="h2" gutterBottom sx={{
                fontSize: '3rem',
                fontWeight: 800,
                color: theme.palette.primary.main,
                marginBottom: '1rem',
                lineHeight: 1.2,
                background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Transforming the Future
              </Typography>
              
              <Typography variant="h3" component="h3" sx={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#2d3748',
                marginBottom: '1.5rem',
                lineHeight: 1.3
              }}>
                Empowering Infrastructure
              </Typography>
              
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                fontWeight: 400,
                marginBottom: '2rem',
                lineHeight: 1.7,
                color: '#4a5568'
              }}>
                InfraScan AI's advanced algorithms analyze infrastructure data in real-time, delivering detailed 3D models with unprecedented accuracy.
              </Typography>
              
              <Box>
                <StyledButton variant="contained" color="primary">
                  Explore Now
                </StyledButton>
                <StyledButton variant="outlined" color="primary" sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}>
                  Contact Us
                </StyledButton>
              </Box>
            </ContentBox>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={rightAnimation}
          >
            <StyledImage>
              <img src="/media/images/imgg5.png" alt="InfraScan AI in action" />
            </StyledImage>
          </motion.div>
        </Grid>
      </Grid>
    </FeatureContainer>
  );
}

export default Res;