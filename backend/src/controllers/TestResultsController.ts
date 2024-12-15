import { Request, Response } from 'express';
import TestResult from './../models/TestResults.js';
import User from './../models/User.js';

export const saveTestResult = async (req: Request, res: Response) => {
  try {
    console.log("Received data:", JSON.stringify(req.body, null, 2));
    const { results } = req.body;

    if (!Array.isArray(results)) {
      console.error('Invalid data format. Expected "results" to be an array.');
      return res.status(400).json({ message: 'Invalid data format. "results" must be an array.' });
    }

    const userId = results[0]?.userId;

    if (!userId) {
      console.error('Missing userId in results.');
      return res.status(400).json({ message: 'Missing userId in results.' });
    }

    const createdResults = await Promise.all(
      results.map(({ userId, questionId, memoryScore, applicationScore }) => {
        return TestResult.create({
          userId,
          questionId,
          memoryScore,
          applicationScore,
        });
      })
    );

    console.log("Test results saved successfully.");

    const learningPath: Record<string, string> = {};
    results.forEach(({ questionId, memoryScore, applicationScore }) => {
      learningPath[`Question-${questionId}`] =
        memoryScore === 0 || applicationScore === 0 ? 'Needs Improvement' : 'Completed';
    });

    const user = await User.findByPk(userId);

    if (user) {
      user.learningPath = learningPath; 
      user.hasCompletedQuiz = true;
      await user.save(); 
      console.log("Learning path and quiz status updated for user:", userId);
    } else {
      console.error('User not found while updating learning path.');
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(201).json({
      message: 'Test results and learning path saved successfully',
      data: createdResults,
      learningPath,
    });
  } catch (error) {
    console.error('Error saving test results or updating learning path:', error);
    res.status(500).json({ message: 'Failed to save test results or update learning path' });
  }
};

export const getTestResultsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const results = await TestResult.findAll({ where: { userId } });
    res.status(200).json({ data: results });
  } catch (error) {
    console.error('Error fetching test results:', error);
    res.status(500).json({ message: 'Failed to fetch test results' });
  }
};

export const getLearningPathByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Fetch user by ID
    const user = await User.findByPk(userId, {
      attributes: ['learningPath', 'hasCompletedQuiz'],
    });

    if (!user) {
      console.error('User not found.');
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({
      message: 'Learning path fetched successfully',
      learningPath: user.learningPath,
      hasCompletedQuiz: user.hasCompletedQuiz,
    });
  } catch (error) {
    console.error('Error fetching learning path:', error);
    res.status(500).json({ message: 'Failed to fetch learning path' });
  }
};

// Get quiz status
export const getQuizStatus = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      attributes: ['hasCompletedQuiz'],
    });

    if (!user) {
      console.error('User not found.');
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({
      message: 'Quiz status fetched successfully',
      hasCompletedQuiz: user.hasCompletedQuiz,
    });
  } catch (error) {
    console.error('Error fetching quiz status:', error);
    res.status(500).json({ message: 'Failed to fetch quiz status' });
  }
};