import express from 'express';
import { saveTestResult, getTestResultsByUser } from '../controllers/TestResultsController.js';

const router = express.Router();

router.post('/results', saveTestResult); // Endpoint to save test results
router.get('/results/:userId', getTestResultsByUser); // Endpoint to fetch results by user ID

export default router;
