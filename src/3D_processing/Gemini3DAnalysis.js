import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const analyze3DModel = async (modelData) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const prompt = `
  Analyze this infrastructure 3D model and:
  1. Identify structural weaknesses (provide x,y,z coordinates)
  2. Rate risk severity (1-5) for each
  3. Generate repair recommendations
  
  Return JSON format:
  {
    "riskScore": 0-100,
    "weakPoints": [
      {x: number, y: number, z: number, type: string, severity: number}
    ],
    "recommendations": string[]
  }`;

  try {
    const result = await model.generateContent([prompt, modelData]);
    const response = await result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error("Analysis failed:", error);
    return null;
  }
};