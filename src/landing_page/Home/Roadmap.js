import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Card Data
const roadmapData = [
  {
    title: "Disaster",
    description: "Enabling Sustainable Development: DisAid's disaster",
    icon: "🌍",
  },
  {
    title: "Trusted by",
    description: "Harnessing the Power of Partnerships: DisAid collaborates with",
    icon: "🤝",
  },
  {
    title: "Empowering",
    description: "Trusted by Governments and NGOs to Deliver",
    icon: "🚀",
  },
  {
    title: "Partnering for",
    description: "Collaborating with Government Agencies and NGOs: DisAid",
    icon: "🔗",
  },
  {
    title: "DisAid Partner",
    description: "Driving Innovation in Disaster Response: DisAid's",
    icon: "💡",
  },
  {
    title: "Transforming",
    description: "DisAid's AI-powered platform and strategic partnerships empower",
    icon: "⚡",
  },
];

const Roadmap = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#0e172c", textAlign: "center" }}>
      {/* Header Section */}
      <Typography variant="h6" sx={{ color: "#93c5fd", textTransform: "uppercase" }}>
        Driving Sustainable Development
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", fontFamily: "monospace", mb: 2, color: "#ffffff" }}
      >
        Disaster Resilience Roadmap
      </Typography>
      <Typography variant="body1" sx={{ color: "#9ca3af", mb: 4 }}>
        Aligning with the UN Sustainable Development Goals
      </Typography>

      {/* Swiper Slider for Auto-Rotating Cards */}
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        spaceBetween={20}
        coverflowEffect={{ rotate: 20, stretch: 50, depth: 100, modifier: 2 }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {roadmapData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                maxWidth: 300,
                minHeight: 200,
                mx: "auto",
                boxShadow: 3,
                transition: "transform 0.3s",
                bgcolor: "#1e293b",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h4">{item.icon}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#f1f5f9" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#cbd5e1", mt: 1 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Roadmap;