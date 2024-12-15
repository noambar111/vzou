import express from 'express';
import { saveTestResult, getTestResultsByUser,getLearningPathByUser, getQuizStatuss } from '../controllers/TestResultsController.js';

const router = express.Router();

router.post('/results', saveTestResult); // Endpoint to save test results
router.get('/results/:userId', getTestResultsByUser); // Endpoint to fetch results by user ID
router.get('/learning-path/:userId', getLearningPathByUser); 
router.get('/quiz-status/:userId', getQuizStatuss); 


export default router;
