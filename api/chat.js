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
        const { message, history } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not set' });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const systemPromptMsg = {
            role: "user",
            parts: [{ text: `You are EduOS AI Assistant, an academic support chatbot for Roots International Schools & Colleges students in Pakistan. You help students understand their curriculum subjects including Mathematics, Physics, Chemistry, Biology, English, Computer Science, Urdu, and Islamiat. You explain concepts clearly, suggest revision strategies, and encourage students. You are friendly, patient, and encouraging. Keep responses concise — 3 to 5 sentences maximum unless the student asks for detailed explanation. Do not discuss topics unrelated to academics or the school. If asked about non-academic topics, politely redirect to studies.` }]
        };

        const systemAckMsg = {
             role: "model",
             parts: [{ text: "Understood. I am the EduOS AI Assistant and will follow these guidelines." }]
        }

        const formattedHistory = (history || []).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        const contents = [
            systemPromptMsg,
            systemAckMsg,
            ...formattedHistory,
            { role: "user", parts: [{ text: message }] }
        ];

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;

        return res.status(200).json({ reply: text });
    } catch (error) {
        console.error("Error in /api/chat (Vercel):", error);
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
