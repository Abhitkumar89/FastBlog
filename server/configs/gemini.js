import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}
const genAI = new GoogleGenerativeAI(apiKey, {
  apiVersion: "v1",
});

async function main(prompt) {
  try {
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

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });
    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    // Only return fallback if there's a real API error, not for content issues
    throw new Error(`AI content generation failed: ${error.message}`);
  }
}

export default main;
