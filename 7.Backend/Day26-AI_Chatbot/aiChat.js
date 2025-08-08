const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMENI_API_KEY,
});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg,
  });
  return response.text;
}

module.exports = main;
