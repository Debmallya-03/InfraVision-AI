import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RiskContainer = styled(Box)({
  padding: '80px 5%',
  backgroundColor: '#f9f9f9',
});

const Section = styled(Grid)(({ theme }) => ({
  marginBottom: '80px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

const ContentBox = styled(Box)({
  padding: '0 40px',
});

const ImageBox = styled(Box)({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  height: '400px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    }
  }
});

const StyledButton = styled(Button)({
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  marginTop: '20px',
  marginRight: '15px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
});

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
  viewport: { once: false } 
};

const rightAnimationProps = {
  ...animationProps,
  initial: { opacity: 0, x: 100 }
};

function Risk() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <RiskContainer>
      {/* First Section */}
      <Section container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div {...animationProps}>
            <ContentBox>
              <Typography variant="h2" component="h2" gutterBottom sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                Transforming Infrastructure Inspection with
              </Typography>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                fontWeight: 400,
                marginBottom: '2rem',
                lineHeight: 1.6,
                color: '#555'
              }}>
                <strong>InfraScan AI</strong> is your digital partner, using advanced computer vision and machine learning to detect and analyze the state of infrastructure with unprecedented accuracy.
              </Typography>
              <Box>
                <StyledButton variant="contained" color="primary" onClick={() => navigate('/landing_page/Solution/ManMade/ManPage')}>
                  Get Started
                </StyledButton>
                <StyledButton variant="outlined" color="primary">
                  See How It Works
                </StyledButton>
              </Box>
            </ContentBox>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div {...rightAnimationProps}>
            <ImageBox>
              <img src="/media/images/imgg3.png" alt="Infrastructure Analysis" />
            </ImageBox>
          </motion.div>
        </Grid>
      </Section>

      {/* Second Section */}
      <Section container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div {...animationProps}>
            <ImageBox>
              <img src="/media/images/imgg4.png" alt="AI Technology" />
            </ImageBox>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div {...rightAnimationProps}>
            <ContentBox>
              <Typography variant="h2" component="h2" gutterBottom sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                Unlock the Future of
              </Typography>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                fontWeight: 400,
                marginBottom: '2rem',
                lineHeight: 1.6,
                color: '#555'
              }}>
                <strong>InfraScan AI's</strong> sophisticated algorithms and deep learning models analyze visual data to predict potential failures before they happen, saving time and resources.
              </Typography>
            </ContentBox>
          </motion.div>
        </Grid>
      </Section>
    </RiskContainer>
  );
}

export default Risk;