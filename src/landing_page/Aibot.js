import React, { useState } from 'react';
import {
  Box, IconButton, Paper, TextField, Typography, useMediaQuery,
} from '@mui/material';
import { ChatBubbleOutline, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Aibot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Infra Bot. Ask me anything about infrastructures.' },
  ]);

  const isMobile = useMediaQuery('(max-width:600px)');

  const cleanText = (text) => {
    return text.replace(/\*+/g, '').trim();
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `You are Infra Bot, a smart assistant inside an app that scans infrastructure using the mobile camera. Here's what you know about the app:

🚀 Features:
- Real-Time Damage Detection: Users can scan structures to detect cracks, corrosion, or deformation.
- AI-Powered Risk Analysis: Uses Google Gemini 1.5 Flash API to analyze and predict health status.
- 3D Visualization: Converts scan data into interactive 3D models.
- Safety Report Generator: Generates detailed safety reports for engineers and government use.
- Augmented Reality Mode (Coming Soon): Highlights stress zones in real time using AR.
- Voice Input & Multilingual Support: Users can speak and get results in their preferred language.
- User Authentication: Uses Clerk for secure, seamless login and access control.

Now respond to the user's query below. If it is about the app or infrastructure, reply informatively and helpfully. If it's completely irrelevant, politely deny the query.

User asked: ${userMessage.text}`
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiReply = cleanText(data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not respond.');
      setMessages((prev) => [...prev, { sender: 'bot', text: aiReply }]);
    } catch (err) {
      console.error('Error from Gemini:', err);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Oops! Something went wrong.' }]);
    }
  };

  return (
    <>
      {/* 🌈 Floating Chat Bubble */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
        animate={open ? {
          border: [
            '4px solid #ff4d4d',
            '4px solid #ff4da6',
            '4px solid #b84dff',
            '4px solid #4da6ff',
            '4px solid #4dff88',
            '4px solid #ffff4d',
            '4px solid #ff944d',
            '4px solid #ff4d4d',
          ],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          },
        } : {}}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: 'linear-gradient(135deg, #2196f3, #21cbf3)',
          color: 'white',
          padding: '10px 16px',
          borderRadius: 50,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          zIndex: 999,
          border: open ? '4px solid #ff4d4d' : '4px solid transparent',
        }}
      >
        <ChatBubbleOutline />
        <Typography variant="subtitle2" fontWeight="bold">
          Infra Bot
        </Typography>
      </motion.div>

      {/* 🧊 Modern Overlay Messenger */}
      {open && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: isMobile ? '90%' : 380,
            maxHeight: 500,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            overflow: 'hidden',
            zIndex: 999,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            animation: 'bgShift 10s infinite alternate linear',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2,
              py: 1.5,
              textAlign: 'center',
              background: 'linear-gradient(to right, #2196f3, #21cbf3)',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            <Typography variant="h6">Infra Bot</Typography>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              px: 2,
              py: 1,
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.2,
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  bgcolor: msg.sender === 'user' ? '#d2f4ff' : '#f3f3f3',
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  maxWidth: '80%',
                  fontSize: 14,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                }}
              >
                {msg.text}
              </Box>
            ))}
          </Box>

          {/* Input */}
          <Paper
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 1,
              borderTop: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(6px)',
            }}
            elevation={0}
          >
            <TextField
              variant="standard"
              fullWidth
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{
                ml: 1,
                input: {
                  color: 'white',
                  fontSize: '14px',
                },
              }}
            />
            <IconButton type="submit" color="primary">
              <Send />
            </IconButton>
          </Paper>
        </motion.div>
      )}

      {/* ✨ Gradient Animation */}
      <style>
        {`
          @keyframes bgShift {
            0% {
              background: rgba(255, 255, 255, 0.05);
            }
            100% {
              background: rgba(255, 255, 255, 0.15);
            }
          }
        `}
      </style>
    </>
  );
};

export default Aibot;
