import React, { useState } from "react";
import { Box, Button, Typography, Card, CircularProgress } from "@mui/material";
import { CameraAlt, CloudUpload, ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Scanning = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      sendToAI(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement("canvas");
      document.body.appendChild(video);

      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        video.pause();
        stream.getTracks().forEach((track) => track.stop());

        canvas.toBlob((blob) => {
          const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" });
          setSelectedImage(URL.createObjectURL(file));
          sendToAI(file);
        }, "image/jpeg");

        document.body.removeChild(video);
      }, 2000);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const sendToAI = async (file) => {
    setLoading(true);
    setAiResponse(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];

      const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
      if (!API_KEY) {
        console.error("Error: API Key is missing!");
        setAiResponse("API Key is missing. Please configure it.");
        setLoading(false);
        return;
      }

      console.log("Using API Key:", API_KEY);

      const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

      const requestBody = {
        contents: [
          {
            parts: [
              { text: "Analyze this infrastructure image to detect structural risks, cracks, stability issues, and potential hazards." },
              { inlineData: { mimeType: "image/jpeg", data: base64Image } },
            ],
          },
        ],
      };

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        console.log("AI Response:", data);

        setLoading(false);

        if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
          const resultText = data.candidates[0].content.parts[0].text;
          const cleanedResponse = resultText.replace(/\*\*/g, "");

          setAiResponse(cleanedResponse.split("\n").map((line, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>
              {line}
            </Typography>
          )));
        } else {
          console.error("Unexpected API response:", data);
          setAiResponse("Analysis failed. Please try again.");
        }
      } catch (error) {
        console.error("Error sending image to AI:", error);
        setAiResponse("Error analyzing image. Please try again.");
        setLoading(false);
      }
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: selectedImage ? "900px" : "400px" }}
      >
        <Card
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: 4,
            boxShadow: 5,
            background: "#fff",
            display: selectedImage ? "flex" : "block",
            gap: 2,
          }}
        >
          {/* Back Button */}
          <ArrowBack
            sx={{
              cursor: "pointer",
              fontSize: 28,
              position: "absolute",
              top: 16,
              left: 16,
              color: "#333",
            }}
            onClick={() => navigate(-1)}
          />

          {!selectedImage ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 2 }}>
                <CameraAlt sx={{ fontSize: 50, color: "#ff9800" }} />
              </Box>

              <Typography variant="h5" fontWeight={600} gutterBottom>
                Scan Infrastructure
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Use your camera to capture an infrastructure or upload an existing photo.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff9800",
                  color: "#fff",
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  mb: 2,
                  "&:hover": { bgcolor: "#e68900" },
                  width: "100%",
                }}
                startIcon={<CameraAlt />}
                onClick={handleCameraCapture}
              >
                Start Camera
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "#00bcd4",
                  borderColor: "#00bcd4",
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  "&:hover": { borderColor: "#0097a7", color: "#0097a7" },
                  width: "100%",
                }}
                startIcon={<CloudUpload />}
                onClick={handleUploadClick}
              >
                Upload Photo
              </Button>

              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </>
          ) : (
            <>
              {/* Left Section: Image Preview */}
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={selectedImage}
                  alt="Uploaded Structure"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                />
                <Button
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onClick={() => setSelectedImage(null)}
                >
                  Upload Another
                </Button>
              </Box>

              {/* Right Section: AI Analysis */}
              <Box sx={{ flex: 1, textAlign: "left", p: 2, backgroundColor: "#f5f5f5", borderRadius: 2, maxHeight: "300px", overflowY: "auto" }}>
                <Typography variant="h6" fontWeight="bold">
                  AI Analysis
                </Typography>

                {loading ? (
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <CircularProgress size={20} />
                    <Typography variant="body2" ml={2}>
                      Analyzing...
                    </Typography>
                  </Box>
                ) : (
                  aiResponse || <Typography variant="body2">No analysis yet.</Typography>
                )}
              </Box>
            </>
          )}
        </Card>
      </motion.div>
    </Box>
  );
};

export default Scanning;
