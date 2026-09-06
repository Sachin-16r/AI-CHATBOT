import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Root Route (Render URL चेक करने के लिए)
app.get("/", (req, res) => {
  res.send("AI Chatbot Server is running live on Render!");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Correct OpenAI Chat Completion Call
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Valid and fast OpenAI model
      messages: [{ role: "user", content: message }],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

// Dynamic Port for Render Deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
