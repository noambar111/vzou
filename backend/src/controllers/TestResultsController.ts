import { Request, Response } from 'express';
import TestResult from './../models/TestResults.js';

export const saveTestResult = async (req: Request, res: Response) => {
    try {
      console.log("Received data:", JSON.stringify(req.body, null, 2)); // Log received data in a readable format
      const { results } = req.body;
  
      // Validate that results is an array
      if (!Array.isArray(results)) {
        console.error('Invalid data format. Expected "results" to be an array.');
        return res.status(400).json({ message: 'Invalid data format. "results" must be an array.' });
      }
  
      // Validate and insert each result
      const createdResults = await Promise.all(
        results.map(({ userId, questionId, memoryScore, applicationScore }, index) => {
          console.log(`Processing result at index ${index}:`, {
            userId,
            questionId,
            memoryScore,
            applicationScore,
          });
  
          // Validate fields
          if (typeof userId !== 'number' || typeof questionId !== 'number') {
            console.error(`Validation failed at index ${index}:`, { userId, questionId });
            throw new Error('userId and questionId must be valid numbers.');
          }
  
          // Create record in the database
          return TestResult.create({
            userId,
            questionId,
            memoryScore,
            applicationScore,
          });
        })
      );
  
      res.status(201).json({ message: 'Test results saved successfully', data: createdResults });
    } catch (error) {
      console.error('Error saving test result:', error);
      res.status(500).json({ message: 'Failed to save test results' });
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
