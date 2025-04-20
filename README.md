# 🏗️ InfraVision AI – AI-Powered Infrastructure Inspection

InfraVision AI is a mobile-first AI-powered tool that revolutionizes infrastructure inspection. It leverages cutting-edge computer vision and AI to detect structural damage, generate 3D visualizations, and provide safety reports in real time.

---

## 🚀 Features

-Real-Time Damage Detection: Use your mobile camera to scan structures and detect cracks, corrosion, or deformation.

-AI-Powered Risk Analysis: LLM Rage database with Pinecone Vector DB using Gemini 1.5 Flash analyzes and predicts infrastructure health status.

-Safety Report Generator: Automatically generates detailed safety reports for records or government use.

-Augmented Reality Mode (Coming Soon): AR view highlighting stress zones in infrastructure.

-Voice Input & Multilingual Support: Speak to the app and get results in your preferred language.

-User Authentication: Powered by Clerk for secure and seamless login.

---

## 🎯 Mission & Vision

### 🌍 Mission
To enable smart, proactive infrastructure inspection using AI for safer cities, reduced manual labor, and cost-effective maintenance.

### 🔮 Vision
To become the go-to AI platform for infrastructure health diagnostics, serving governments, engineers, and developers globally.

---

## 🧠 SWOT Analysis

### ✅ Strengths
- Real-time AI scanning with LLM Rage DB and Pinecone

- Mobile-first inspection from anywhere

- User-friendly UI & AR-ready interface

- Generates official-grade safety reports

### ⚠️ Weaknesses
- High computational demand for real-time 3D generation
- Depends on external APIs (Gemini, Clerk)
- Limited to camera-based visible surface detection

### 🔥 Opportunities
- Use in disaster zones, post-earthquake scans
- Government tie-ups for urban safety
- Expand into bridge, railway, and dam inspections
- Data analytics for predictive maintenance

### ⚠️ Threats
- Strong competitors in AI infrastructure space
- Data privacy concerns while capturing site visuals
- AI hallucinations in poor lighting or camera angles

---

## 🛠 Tech Stack

- **Frontend**: React.js, Material UI, CSS Modules
- **Authentication**: Clerk.dev
- **AI/ML**: Google Gemini 1.5 Flash Pinecone VectorDB Rage Database
- **Hosting**: Netlify / Vercel (Frontend), Firebase (optional)

---

## 📂 Project Structure
```
/infravision-ai
│── /public               # Static assets like images, manifest, etc.
│── /src
│   ├── /app              # Main app logic and views
│   ├── /components       # Reusable UI Components (Navbars, Cards, etc.)
│   ├── /lib              # Utility functions or constants
│   ├── /pages            # Page-level components 
│   ├── /styles           # Global or component-specific styling 
│   ├── /utils            # Helper functions and modules
│   ├── /auth             # Clerk authentication setup
│   ├── pinecone.js       # Pinecone vector search setup 
│   ├── langchain.js      # Langchain configuration 
│   └── index.js          # App entry point
│
├── .env                 # Environment variables 
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

```

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js 18+
- React Project + Rage Database 
- (Optional) Google Gemini API Key for live scans

---

### 🔧 Installation

```bash
git clone https://github.com/debmallya/infra-vision-ai.git
cd infra-vision-ai
npm install
```
---
🧬 Environment Variables
Create a .env.local file:
```
REACT_APP_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
REACT_APP_CLERK_SECRET_KEY=<your-clerk-secret-key>
REACT_APP_GEMINI_API_KEY=<your-gemini-api-key>  # optional
```
---
▶️ Run the App
```
npm run dev
```
---
📌 Usage
---
Click "Explore Now" on the landing page.

Sign up or log in with Clerk authentication.

Navigate to the camera scan dashboard.

Point camera towards structure – AI detects damage.

View visualized 3D model and safety report.

Export report or continue scanning.

---

📜 License
This project is open-source and available under the MIT License.
---
🤝 Contributing
---
We welcome all contributions! Fork the repo, make your changes, and submit a pull request. Let’s build safer cities together.
---
⭐ Star this repo if you like the project!







