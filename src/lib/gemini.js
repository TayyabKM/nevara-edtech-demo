import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function markStudentAnswer({ subject, question, studentAnswer, marksOutOf }) {
  const prompt = `
You are an experienced ${subject} teacher in Pakistan marking a student's answer.

Question: ${question}
Student Answer: ${studentAnswer}
Total Marks: ${marksOutOf}

Provide your assessment in the following JSON format only, no other text:
{
  "score": <number>,
  "percentage": <number>,
  "grade": "<A/B/C/D/F>",
  "overallFeedback": "<2-3 sentence summary>",
  "strengths": ["<point 1>", "<point 2>"],
  "improvements": ["<point 1>", "<point 2>"],
  "suggestedResources": ["<topic to revise 1>", "<topic to revise 2>"],
  "confidenceLevel": "<High/Medium/Low>"
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });
    
    const text = response.text;
    return JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
