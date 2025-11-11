import { rephraseText } from '../services/openaiService.js';

export async function handleRephrase(req, res) {
  try {
    const { text, tone } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: "Missing 'text' string in body" });
    }

    const rephrased = await rephraseText(text, tone);
    res.json({ rephrased });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
