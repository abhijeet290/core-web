const { GoogleGenAI } = require("@google/genai");

// import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyC7X156CX9In6BOxYZmd0LFDMJlGpFYb1s",
});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg,
  });
  return response.text;
}

module.exports = main;
