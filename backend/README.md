SmartRephrase Backend Quick Start
1. Copy .env.example -> .env, set OPENAI_API_KEY
2. npm install
3. npm start
POST /rephrase expects JSON { text: string, tone?: string } and returns { rephrased: string }.
