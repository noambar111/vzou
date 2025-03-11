import express from 'express';
import { initProgress, saveProgress, getProgress, getAllProgressByUser, justcheck } from '../controllers/progressController.js';
const router = express.Router();

router.post('/initProgress', initProgress); // Save progress
router.post('/save', saveProgress); // Save progress
//router.get('/:userId/:topicId', getProgress); // Get progress by user and topic
router.get('/user/:userId', getAllProgressByUser); // Get all progress for a user

export default router; // Default export
