import { Request, Response } from 'express';
import UserTopicProgress from '../models/UserTopicProgress.js';

export const saveProgress = async (req: Request, res: Response) => {
  try {
    const { userId, topicId, newStatus } = req.body;

    if (!userId || !topicId || newStatus === undefined) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Validation: Ensure status progression is logical
    const existingProgress = await UserTopicProgress.findOne({ where: { userId, topicId } });

    if (newStatus === 2 && (!existingProgress || existingProgress.status < 1)) {
      return res.status(400).json({
        message: 'Cannot set status to 2 without passing memory level.',
      });
    }

    // Prevent regression in status
    if (existingProgress && newStatus < existingProgress.status) {
      return res.status(400).json({ message: 'Cannot regress progress status.' });
    }

    // Upsert progress
    await UserTopicProgress.upsert({
      userId,
      topicId,
      status: newStatus,
      lastUpdated: new Date(),
    });

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

export const getAllProgressByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

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

