import express from 'express';
import { handleRephrase } from '../controllers/rephraseController.js';

const router = express.Router();
router.post('/', handleRephrase);

export default router;
