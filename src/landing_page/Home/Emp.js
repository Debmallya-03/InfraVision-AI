import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {styled } from '@mui/system';
import { motion } from 'framer-motion';

const TeamContainer = styled(Box)({
  padding: '100px 5%',
  backgroundColor: '#f8fafc',
  textAlign: 'center',
});

const SectionTitle = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 800,
  marginBottom: '80px',
  background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
});

const TeamCard = styled(motion.div)({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '0 0 30px 0',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  transition: 'all 0.4s ease',
  height: '100%',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
  }
});

const TeamImage = styled(motion.div)({
  width: '100%',
  height: '250px',
  marginBottom: '20px',
  overflow: 'hidden',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
    zIndex: 1,
  }
});

const Name = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '8px',
  color: '#1e293b',
  padding: '0 20px',
});

const Position = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: '#64748b',
  marginBottom: '16px',
  padding: '0 20px',
});

const Contact = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 400,
  color: '#94a3b8',
  padding: '0 20px',
});

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

function Emp() {
  const teamMembers = [
    {
      image: '/media/images/imgg6.png',
      name: 'Sylvie Inesceran',
      position: 'Chief Technology Officer',
      contact: 'sylvie@infrascan.ai'
    },
    {
      image: '/media/images/imgg7.png',
      name: 'Imradiase',
      position: 'Lead AI Engineer',
      contact: 'imradiase@infrascan.ai'
    },
    {
      image: '/media/images/imgg8.png',
      name: 'Reescan',
      position: 'Infrastructure Specialist',
      contact: 'reescan@infrascan.ai'
    }
  ];

  return (
    <TeamContainer>
      <SectionTitle variant="h2" component="h2">
        InfraScan AI: Revolutionizing Infrastructure
      </SectionTitle>
      
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardAnimation}
              custom={index}
            >
              <TeamCard>
                <TeamImage>
                  <img src={member.image} alt={member.name} />
                </TeamImage>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
                <Contact>{member.contact}</Contact>
              </TeamCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </TeamContainer>
  );
}

export default Emp;