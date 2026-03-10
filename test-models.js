import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });

const apiKey = process.env.GEMINI_API_KEY;

async function listModels() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(JSON.stringify(data.models.map(m => m.name), null, 2));
    } catch (err) {
        console.error(err);
    }
}

listModels();
