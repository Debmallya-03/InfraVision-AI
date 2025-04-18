import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { Warning, Layers, Home, AccountBalance, Vibration, Report } from "@mui/icons-material";

const detectionData = [
  {
    icon: <Warning style={{ color: "#FF4D4F" }} />, 
    title: "Cracks & Surface Damage",
    description: "Detects hairline cracks, surface degradation, and potential fracture points with 98.7% accuracy.",
    features: [
      "Micro-crack detection (as small as 0.1mm)",
      "Pattern analysis for structural weakness",
      "Historical progression tracking",
    ],
  },
  {
    icon: <Layers style={{ color: "#FFAF38" }} />, 
    title: "Material Degradation",
    description: "Identifies corrosion, rusting, concrete spalling, and material fatigue in various environmental conditions.",
    features: [
      "Rust and corrosion detection",
      "Material composition analysis",
      "Environmental damage assessment",
    ],
  },
  {
    icon: <Home style={{ color: "#4C8BF5" }} />, 
    title: "Foundation Stability",
    description: "Evaluates foundation integrity, settlement issues, and ground stability around structures.",
    features: [
      "Settlement pattern recognition",
      "Soil condition assessment",
      "Water damage and erosion detection",
    ],
  },
  {
    icon: <AccountBalance style={{ color: "#69DB7C" }} />, 
    title: "Load-Bearing Capacity",
    description: "Calculates current load-bearing capacity and identifies potential weak points in the structure.",
    features: [
      "Stress point identification",
      "Load distribution analysis",
      "Weight tolerance estimation",
    ],
  },
  {
    icon: <Vibration style={{ color: "#B27CFB" }} />, 
    title: "Vibration & Stress",
    description: "Analyzes vibration patterns and structural stress levels to predict potential failure points.",
    features: [
      "Resonance frequency analysis",
      "Stress concentration mapping",
      "Dynamic load response simulation",
    ],
  },
  {
    icon: <Report style={{ color: "#FFD43B" }} />, 
    title: "Comprehensive Reporting",
    description: "Generates detailed reports with risk scores, visualizations, and actionable recommendations.",
    features: [
      "Risk classification (Safe/Moderate/High)",
      "Repair priority recommendations",
      "Maintenance schedule generation",
    ],
  },
];

const Detection = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold">Advanced Detection Capabilities</Typography>
      <Typography variant="body1" sx={{ color: "gray", marginBottom: "30px" }}>
        Our AI system can detect multiple types of structural issues with high accuracy
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {detectionData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: "20px", textAlign: "left", height: "100%" }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {item.icon} {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", marginY: "10px" }}>
                  {item.description}
                </Typography>
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <Typography variant="body2">✔ {feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Detection;
