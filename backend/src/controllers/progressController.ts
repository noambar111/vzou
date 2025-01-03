import { Request, Response } from 'express';
import UserTopicProgress from '../models/UserTopicProgress.js';
import User from '../models/User.js';


export const initProgress = async (req: Request, res: Response) => {
  console.log("initProgress started");
  console.log("initProgress started");
  try {
      const { userId, results } = req.body;
      console.log("User ID:", userId);
      // Update user completion status
      const user = await User.findByPk(userId);
      if (user) {
          user.hasCompletedQuiz = true;
          console.log("Before saving user:", user.toJSON());
          await user.save();
          console.log("User saved successfully.");
      }

      // Process results
      for (const topicIdStr in results) {
        const topicId = parseInt(topicIdStr, 10); // Convert string to integer
        const status = results[topicIdStr];
          console.log(`Processing topicId: ${topicId}, status: ${status}`);

          if (status !== undefined && status !== null) {
              try {
                  await UserTopicProgress.upsert({
                      userId,
                      topicId,
                      status,
                      lastUpdated: new Date(),
                  });
                  console.log(`Progress updated for topicId: ${topicId}`);
              } catch (err) {
                  console.error(`Error updating topicId: ${topicId}`, err);
              }
          }
      }

      res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
      console.error("Error updating progress:", error);
      res.status(500).json({ message: "Failed to update progress" });
  }
};



export const saveProgress = async (req: Request, res: Response) => {
  console.log("saveProgress");
  try {
    const { userId, topicId } = req.body;

    if (!userId || !topicId  === undefined) {
      return res.status(400).json({ message: 'Invalid request data' });
    }
    const existingProgress = await UserTopicProgress.findOne({
      where: {
          userId,
          topicId,
      },
  });
  
  if (existingProgress) {
      // Update the existing record
      await existingProgress.update({
          status: 3,
          lastUpdated: new Date(),
      });
  } else {
      // Insert a new record
      await UserTopicProgress.create({
          userId,
          topicId,
          status: 3,
          lastUpdated: new Date(),
      });
  }
    res.status(201).json({ message: 'Progress saved successfully.' });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ message: 'Failed to save progress.' });
  }
};

export const getProgress = async (req: Request, res: Response) => {
  try {
    const { userId, topicId } = req.params;

    const progress = await UserTopicProgress.findOne({
      where: { userId, topicId },
      attributes: ['status', 'lastUpdated'],
    });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found.' });
    }

    res.status(200).json(progress);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Failed to fetch progress.' });
  }
};


export const justcheck = async (req: Request, res: Response) => {

    res.status(200).json("ddd");

};

export const getAllProgressByUser = async (req: Request, res: Response) => {
  try {
    console.log("getAllProgressByUser");

    const { userId } = req.params;

    console.log("getAllProgressByUser");

    const progressList = await UserTopicProgress.findAll({
      where: { userId },
      attributes: ['topicId', 'status', 'lastUpdated'],
    });

    if (!progressList || progressList.length === 0) {
      return res.status(404).json({ message: 'No progress found for this user.' });
    }

    res.status(200).json(progressList);
  } catch (error) {
    console.error('Error fetching progress list:', error);
    res.status(500).json({ message: 'Failed to fetch progress list.' });
  }
};

