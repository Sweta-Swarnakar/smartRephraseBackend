import dotenv from 'dotenv';
dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const OPENAI_API_URL = process.env.OPENAI_API_URL || 'https://openrouter.ai/api/v1/chat/completions';
