const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");
require("dotenv").config({ quiet: true });

// import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const conversationHistory = [];

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: conversationHistory,
  });
  return response.text;
  // return response.response.text();
}

// function to fetch weather

async function getWeather(location) {
  const weatherAPI = process.env.WEATHER_API_KEY;
  const weatherInfo = [];

  for (const { city, date } of location) {
    if (date == "today") {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}`
      );
      const data = response.json();
      weatherInfo.push(data);
    } else {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}&dt=${date}`
      );
      const data = response.json();
      weatherInfo.push(data);
    }
  }
  return weatherInfo;
}

async function chatting() {
  const question = readlineSync.question("Ask for weather\n ");
  const prompt = `
You are an AI agent,who will respond to me in JSON format only.
Analyse the user query and try to fetch city and date details from it.
the date format should be in (yyyy-mm-dd) if user ask for future weather,
If user ask for today weather, mark date as 'today'.
To fetch weather details I already have some function which can fetch weather details for me,

If you need weather information, use the below format
JSON format should looklike this:
{
  "weather_details_needed": true,
  "location": [{"city":"delhi","date":"today"},{"city":"patna","date":"2025-05-08"}]
}

Once you have the weatherreport details respond me in JSON format only.
JSON format should looklike this:
{
  "weather_details_needed": true,
  "weather_report": "The temperature of your city is 25 degree, you can do whatever you enjoy the most, go on long drive, spend some quality time with friend or family"
}

user asked for this: ${question}

Strictly follow JSON format, respond only in JSON format.
`;

  conversationHistory.push({ role: "user", parts: [{ text: prompt }] });

  while (true) {
    let response = await main();
    conversationHistory.push({ role: "model", parts: [{ text: response }] });
    // console.log(response)
    response = response.trim();
    response = response.replace("```json", "").replace("```", "").trim();
    // console.log(response)
    const data = JSON.parse(response);
    // console.log(data);

    if (data.weather_details_needed == false) {
      console.log(data.weather_report);
      break;
    }

    const weatherInformation = await getWeather(data.location);
    const weatherInfo = JSON.stringify(weatherInformation);
    conversationHistory.push({
      role: "user",
      parts: [{ text: `This is the weather information: ${weatherInfo}` }],
    });
  }
}
chatting();

// always trim when you get response from llm

// build 3 AI agent
// to fetch weather report
// to fetch blockchain info
// fetch github profile info
// news api
