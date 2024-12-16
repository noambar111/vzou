import { Request, Response } from 'express';
import TestResult from './../models/TestResults.js';
import User from './../models/User.js';


export const saveTestResult = async (req: Request, res: Response) => {
  try {
    console.log("saveTestResult has been called");

    const { results } = req.body;

    // Validate results
    if (!Array.isArray(results) || results.length === 0) {
      console.error('Invalid data format or empty results array.');
      return res.status(400).json({ message: 'Results must be a non-empty array.' });
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

    // Generate learning path
    const learningPath: Record<string, string> = {};
    results.forEach(({ questionId, memoryScore, applicationScore }) => {
      learningPath[`Question-${questionId}`] =
        memoryScore === 0 || applicationScore === 0 ? "Needs Improvement" : "Completed";
    });
    
    console.log("Generated learning path:", learningPath); // Debugging log
    
    const user = await User.findByPk(userId);
    
    if (user) {
      if (Object.keys(learningPath).length > 0) {
        user.learningPath = learningPath; // Save as object directly
        user.hasCompletedQuiz = true;
    
        console.log("Before saving user:", user.toJSON());
        await user.save();
        console.log("User saved successfully.");
      } else {
        console.warn("Learning path is empty. Skipping user update.");
      }
    
      await user.reload();
      console.log("After reload:", user.toJSON());
    } else {
      console.error("User not found while updating learning path.");
      return res.status(404).json({ message: "User not found." });
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
    console.log("getLearningPathByUser");
    const { userId } = req.params;

    // Fetch user by ID
    const user = await User.findByPk(userId, {
      attributes: ['learningPath', 'hasCompletedQuiz'],
      raw: true
    });

    if (!user) {
      console.log("NOT USER - getLearningPathByUser");
      console.error('User not found.');
      return res.status(404).json({ message: 'User not found.' });
    }
    else{
      console.log("i am " + user.learningPath);
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
export const getQuizStatuss = async (req: Request, res: Response) => {
  try {
    console.log("Fetching quiz status for user ID:" );

    console.log("Get quiz status test result")
    const { userId } = req.params;
    console.log("Fetching quiz status for user ID:  " +   userId );

    const user = await User.findByPk(userId, {
      attributes: ['hasCompletedQuiz'],
      raw: true
  });

    console.log(user);
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