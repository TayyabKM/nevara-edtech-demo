export default async function handler(req, res) {
    // CORS setup for Vercel
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { subject, question, studentAnswer, marksOutOf } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not set' });
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

        return res.status(200).json(parsedData);
    } catch (error) {
        console.error("Error in /api/mark (Vercel):", error);
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
