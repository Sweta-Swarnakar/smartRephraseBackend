import express from 'express';
import bodyParser from 'body-parser';
import rephraseRoutes from './routes/rephraseRoutes.js';

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/rephrase', rephraseRoutes);

// Health check
app.get('/', (req, res) => res.send('SmartRephrase backend running. POST /rephrase'));

export default app;
