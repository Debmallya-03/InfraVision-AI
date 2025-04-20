import React, { useState } from "react";
import { Box, Button, Typography, Card, CircularProgress} from "@mui/material";
import { CameraAlt, CloudUpload, ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

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
        setLoading(false);

        if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
          const resultText = data.candidates[0].content.parts[0].text;
          const cleaned = resultText.replace(/\*/g, "").trim();

          setAiResponse(
            cleaned.split("\n").map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Typography variant="body2" sx={{ mb: 1, color: "#333" }}>
                  {line}
                </Typography>
              </motion.div>
            ))
          );
        } else {
          setAiResponse("Analysis failed. Please try again.");
        }
      } catch (error) {
        console.error("Error sending image to AI:", error);
        setAiResponse("Error analyzing image. Please try again.");
        setLoading(false);
      }
    };
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.text("AI Analysis Report", 20, 20);

    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const textWidth = pageWidth - 2 * margin;
    const lineHeight = 10;

    let yPosition = 30;

    if (aiResponse) {
      const responseText = aiResponse.map((line) => line.props.children.props.children).join("\n");
      const wrappedText = doc.splitTextToSize(responseText, textWidth);

      wrappedText.forEach((line) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;

        if (yPosition > doc.internal.pageSize.height - 20) {
          doc.addPage();
          yPosition = 20;
        }
      });
    } else {
      doc.text("No AI response to display.", margin, yPosition);
    }

    doc.save("ai_analysis_report.pdf");
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
            flexDirection: selectedImage ? "column" : "block",
            gap: 2,
          }}
        >
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
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
              {/* Image Preview */}
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={selectedImage}
                  alt="Uploaded Structure"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                />
                <Button variant="outlined" sx={{ mt: 2, width: "100%" }} onClick={() => setSelectedImage(null)}>
                  Upload Another
                </Button>
              </Box>

              {/* AI Analysis Result Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ flex: 1 }}
              >

                <Box
                  sx={{
                    background: "linear-gradient(to top, #fdfbfb, #ebedee)",
                    p: 3,
                    borderRadius: 4,
                    maxHeight: "400px",
                    overflowY: "auto",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    border: "1px solid #ddd",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: "#222" }}>
                    AI Structural Analysis
                  </Typography>

                  {loading ? (
                    <Box sx={{ textAlign: "center" }}>
                      <CircularProgress />
                      <Typography variant="body2" mt={1}>
                        Analyzing...
                      </Typography>
                    </Box>
                  ) : (
                    <Box>{aiResponse}</Box>
                  )}

                  {!loading && aiResponse && (
                    <Button
                      variant="outlined"
                      sx={{ mt: 2, borderColor: "#1976d2", color: "#1976d2" }}
                      onClick={generatePDF}
                    >
                      Download Report
                    </Button>
                  )}
                </Box>
              </motion.div>
            </Box>
          )}
        </Card>
      </motion.div>
    </Box>
  );
};

export default Scanning;
