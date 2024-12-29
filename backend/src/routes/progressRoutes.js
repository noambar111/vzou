import express from 'express';
import { saveProgress, getProgress, getAllProgressByUser } from '../controllers/progressController.js';
const router = express.Router();

router.post('/save', saveProgress); // Save progress
router.get('/:userId/:topicId', getProgress); // Get progress by user and topic
router.get('/user/:userId', getAllProgressByUser); // Get all progress for a user

export default router; // Default export
