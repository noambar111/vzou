import { Request, Response } from 'express';
import Question from '../models/Question.js';
// Create a new question

export const bulkInsertQuestions = async (req: Request, res: Response) => {
    try {
      const questions = [
        {
          topicId: 0,
          question: "Given the array [8, 3, 5, 2], what will be the state of the array after 3 steps of Insertion Sort?",
          options: ["[3, 8, 5, 2]", "[3, 5, 8, 2]", "[2, 3, 5, 8]", "[8, 3, 2, 5]"],
          correct: "[3, 5, 8, 2]",
        },
        {
          topicId: 0,
          question: "You are given a nearly sorted dataset. Why would you choose Insertion Sort over other algorithms?",
          options: [
            "It has a faster runtime for nearly sorted datasets",
            "It can handle large datasets efficiently",
            "It is designed for parallel processing",
            "It is always faster than other sorting algorithms",
          ],
          correct: "It has a faster runtime for nearly sorted datasets",
        },
        {
          topicId: 0,
          question: "Write the state of the array after inserting the 3rd element of the array [7, 4, 5, 2] using Insertion Sort.",
          options: ["[4, 7, 5, 2]", "[4, 5, 7, 2]", "[7, 4, 5, 2]", "[2, 4, 5, 7]"],
          correct: "[4, 5, 7, 2]",
        },
        {
          topicId: 0,
          question: "How would you modify Insertion Sort to sort an array of objects by a specific property (e.g., age)?",
          options: [
            "Compare the specific property while sorting",
            "Sort the array randomly",
            "Use another sorting algorithm",
            "Convert objects to strings and sort",
          ],
          correct: "Compare the specific property while sorting",
        },
        {
          topicId: 0,
          question: "For a partially sorted array, how does the performance of Insertion Sort compare to QuickSort?",
          options: [
            "Insertion Sort performs better for small, nearly sorted arrays",
            "QuickSort always performs better",
            "Both algorithms have the same performance",
            "QuickSort is better for all cases",
          ],
          correct: "Insertion Sort performs better for small, nearly sorted arrays",
        },
      ];
  
      await Question.bulkCreate(questions);
  
      res.status(201).json({ message: 'Questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert questions.' });
    }
  };


export const createQuestion = async (req: Request, res: Response) => {
  const { topicId, question, options, correct } = req.body;

  try {
    if (!topicId || !question || !options || !correct) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newQuestion = await Question.create({
      topicId,
      question,
      options,
      correct,
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ message: 'Failed to create question' });
  }
};

// Get all questions for a specific topic
export const getQuestionsByTopic = async (req: Request, res: Response) => {
  const { topicId } = req.params;

  try {
    const questions = await Question.findAll({ where: { topicId } });

    if (!questions.length) {
      return res.status(404).json({ message: 'No questions found for this topic' });
    }

    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Failed to fetch questions' });
  }
};

// Get a single question by ID
export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const question = await Question.findByPk(id);
    console.log(question);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json(question);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ message: 'Failed to fetch question' });
  }
};

// Update a question
export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { question, options, correct } = req.body;

  try {
    const questionToUpdate = await Question.findByPk(id);

    if (!questionToUpdate) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const updatedQuestion = await questionToUpdate.update({
      question,
      options,
      correct,
    });

    res.status(200).json(updatedQuestion);
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({ message: 'Failed to update question' });
  }
};

// Delete a question
export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const questionToDelete = await Question.findByPk(id);

    if (!questionToDelete) {
      return res.status(404).json({ message: 'Question not found' });
    }

    await questionToDelete.destroy();
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ message: 'Failed to delete question' });
  }
};
