import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";

const Solution = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        py: 6, // Reduced padding
      }}
    >
      <Container maxWidth="md"> {/* Smaller container */}
        <Grid container spacing={4} alignItems="center">
          {/* Left Section - Main Heading */}
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ 
              color: "#03DAC6", 
              fontSize: 14,
              letterSpacing: 1,
              mb: 1
            }}>
              Disaster Response Simplified
            </Typography>

            <Typography
              variant="h4" // Smaller heading
              sx={{
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.3
              }}
            >
              Unifying Disaster Management
            </Typography>

            <Typography variant="body1" sx={{ 
              color: "#B0B0B0", 
              mb: 3,
              fontSize: 15
            }}>
              DisAid integrates data through AI and Big Data analytics
            </Typography>

            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: "#03DAC6",
                color: "#121212",
                fontWeight: 600,
                px: 3,
                py: 1,
                "&:hover": { 
                  bgcolor: "#00C9B6",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease"
              }}
            >
              Explore Solutions
            </Button>
          </Grid>

          {/* Right Section - Features */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              bgcolor: "#1E1E1E",
              borderRadius: 2,
              p: 3
            }}>
              <Typography variant="overline" sx={{ 
                color: "#BB86FC", 
                fontSize: 12,
                letterSpacing: 1
              }}>
                Disaster Components
              </Typography>
              
              {/* Feature 1 */}
              <Box display="flex" alignItems="center" mb={2} mt={2}>
                <InsightsIcon sx={{ 
                  fontSize: 28, 
                  color: "#FFC107", 
                  mr: 2 
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Predictive Modeling
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9E9E9E", fontSize: 13 }}>
                    AI-powered disaster forecasting
                  </Typography>
                </Box>
              </Box>

              {/* Feature 2 */}
              <Box display="flex" alignItems="center" mb={2}>
                <GroupsIcon sx={{ 
                  fontSize: 28, 
                  color: "#03DAC6", 
                  mr: 2 
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Collaborative Response
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9E9E9E", fontSize: 13 }}>
                    Unified disaster management
                  </Typography>
                </Box>
              </Box>

              {/* Feature 3 */}
              <Box display="flex" alignItems="center">
                <SecurityIcon sx={{ 
                  fontSize: 28, 
                  color: "#64B5F6", 
                  mr: 2 
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Resilient Systems
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9E9E9E", fontSize: 13 }}>
                    Anticipate and prepare effectively
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Solution;