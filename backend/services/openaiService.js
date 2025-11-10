import fetch from 'node-fetch';
import { OPENAI_API_KEY, OPENAI_API_URL } from '../configs/openaiConfig.js';

export async function rephraseText(text, tone) {
  const prompt = `Rephrase the following text${tone ? ` in a ${tone} tone` : ''}:\n\n${text}`;

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-5',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 400
    })
  });

  if (!response.ok) {
    const txt = await response.text();
    throw new Error(`OpenAI API error: ${txt}`);
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content?.trim() || '';
}
