import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from server/.env
dotenv.config({ path: './server/.env' });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/mark', async (req, res) => {
    try {
        const { subject, question, studentAnswer, marksOutOf } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not set in server environment' });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

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

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        const parsedData = JSON.parse(text.replace(/```json|```/g, "").trim());

        res.json(parsedData);
    } catch (error) {
        console.error("Error in /api/mark:", error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
