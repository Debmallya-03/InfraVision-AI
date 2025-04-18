import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import InsightsIcon from "@mui/icons-material/Insights";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const steps = [
  {
    id: 1,
    title: "User Input",
    description: "Capture or upload images of infrastructure like bridges, buildings, dams, or tunnels.",
    icon: <CameraAltIcon sx={{ fontSize: 40, color: "#ff4d4f" }} />,
    color: "#ffebee",
  },
  {
    id: 2,
    title: "3D Processing",
    description: "System converts 2D images into detailed 3D models using AI-based depth estimation.",
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: "#2196f3" }} />,
    color: "#e3f2fd",
  },
  {
    id: 3,
    title: "AI Analysis",
    description: "AI analyzes both 2D and 3D data to detect cracks, degradation, and structural issues.",
    icon: <InsightsIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
    color: "#f3e5f5",
  },
  {
    id: 4,
    title: "Risk Assessment",
    description: "Generates risk scores and detailed reports with preventive action recommendations.",
    icon: <DescriptionIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
    color: "#e8f5e9",
  },
  {
    id: 5,
    title: "Alert System",
    description: "High-risk structures trigger alerts to authorities for immediate action.",
    icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
    color: "#fff3e0",
  },
];

const Working = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, background: "white" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How It Works
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "600px", margin: "0 auto" }}>
        Our AI-powered system uses advanced computer vision and structural analysis to detect potential
        infrastructure failures before they occur.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          mt: 4,
        }}
      >
        {steps.map((step) => (
          <Card
            key={step.id}
            sx={{
              width: 250,
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              transition: "all 0.3s ease",
              backgroundColor: step.color,
              "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  background: step.color,
                }}
              >
                {step.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold">
                Step {step.id}
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="text.primary" mt={1}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Working;
