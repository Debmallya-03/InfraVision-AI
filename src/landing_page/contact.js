"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

  
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setShowSuccess(true);

        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/media/images/imgg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
     
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          zIndex: 1,
        }}
      ></Box>

      <Container
        maxWidth="md"
        sx={{
          zIndex: 2, 
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            background: "linear-gradient(to right, #f5f7fa, #e4e7eb)",
            borderRadius: 2,
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <ContactMailIcon fontSize="large" color="primary" />
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="bold"
                  sx={{
                    animation: "fadeIn 5s infinite",
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We'd love to hear from you! Please fill out the form below and
                we'll get back to you as soon as possible.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      variant="outlined"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      disabled={isSubmitting}
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: 2,
                        boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
                        "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: "0 6px 20px rgba(0,118,255,0.23)",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>

        {/* Success Message */}
        <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: "100%" }}>
            Your message has been sent!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
