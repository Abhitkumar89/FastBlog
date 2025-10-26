import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}
const genAI = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  try {
    console.log("Generating content with prompt:", prompt);
    console.log("Using API key:", apiKey.substring(0, 10) + "...");
    
    // Create a comprehensive prompt for blog content generation
    const enhancedPrompt = `Write a comprehensive, engaging blog post about "${prompt}". 

Requirements:
- Write in a conversational, engaging tone
- Include an introduction, main content with 3-4 key points, and a conclusion
- Use proper markdown formatting with headers (##, ###)
- Make it informative and valuable for readers
- Include practical insights or tips where relevant
- Keep it between 800-1200 words
- Make it SEO-friendly and well-structured

Format the response as markdown with proper headers and formatting.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("AI generated content successfully");
    return text;
  } catch (error) {
    console.error("Gemini AI Error Details:", error);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    
    // Only return fallback if there's a real API error, not for content issues
    throw new Error(`AI content generation failed: ${error.message}`);
  }
}

export default main;