import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const navigate = useNavigate(); 

  const styles = {
    heroContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "50px 5%",
    },
    leftContent: {
      maxWidth: "500px",
      textAlign: "left",
    },
    badge: {
      backgroundColor: "#fee2e2",
      color: "#dc2626",
      fontWeight: "bold",
      padding: "6px 12px",
      borderRadius: "12px",
      fontSize: "14px",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "bold",
      marginTop: "10px",
    },
    highlight: {
      color: "#dc2626",
    },
    description: {
      color: "#555",
      marginTop: "10px",
      fontSize: "16px",
    },
    buttonGroup: {
      marginTop: "20px",
      display: "flex",
      gap: "16px",
    },
    imageContainer: {
      position: "relative",
      marginTop: "20px",
    },
    heroImage: {
      width: "500px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },
    safeTag: {
      position: "absolute",
      bottom: "15px",
      left: "15px",
      backgroundColor: "#22c55e",
      color: "white",
      fontSize: "14px",
      padding: "6px 12px",
      borderRadius: "8px",
    },
  };

  return (
    <section style={styles.heroContainer}>
      {/* Left Content */}
      <div style={styles.leftContent}>
        <span style={styles.badge}>AI-Powered Safety</span>
        <h1 style={styles.heading}>
          AI Detector for <span style={styles.highlight}>Man-Made Disasters</span>
        </h1>
        <p style={styles.description}>
          Prevent infrastructure failures before they happen with our advanced AI analysis system
          that detects structural weaknesses and provides actionable insights.
        </p>
        <div style={styles.buttonGroup}>
          <Button
            variant="contained"
            color="error"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: "none", fontSize: "16px", padding: "10px 20px" }}
            onClick={() => navigate("/landing_page/Solution/ManMade/scanning_page/scanning")}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none", fontSize: "16px", padding: "10px 20px" }}
          >
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={styles.imageContainer}>
        <img src="/media/images/bui.png" alt="AI Analysis" style={styles.heroImage} />
        <span style={styles.safeTag}>Safe Structure</span>
      </div>
    </section>
  );
};

export default Hero;
