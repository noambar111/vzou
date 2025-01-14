import { Request, Response } from 'express';
import Question from '../models/Question.js';
// Create a new question

export const bulkInsertQuestions = async (req: Request, res: Response) => {
  try {
    const selectionSortQuestions = [
      {
        topicId: 0, // Selection Sort
        question: "Given the array [8, 3, 5, 2], what will the array look like after two iterations of Selection Sort?",
        options: [
          "[2, 3, 5, 8]",
          "[2, 8, 5, 3]",
          "[2, 3, 8, 5]",
          "[3, 5, 8, 2]",
        ],
        correct: "[2, 3, 8, 5]",
      },
      {
        topicId: 0, // Selection Sort
        question: "Why is Selection Sort not considered efficient for large datasets?",
        options: [
          "It requires additional memory for sorting",
          "Its time complexity is O(n^2), making it slow for large datasets",
          "It requires the dataset to be sorted beforehand",
          "It only works on arrays with unique elements",
        ],
        correct: "Its time complexity is O(n^2), making it slow for large datasets",
      },
      {
        topicId: 0, // Selection Sort
        question: "For the array [7, 4, 5, 2], how many swaps will Selection Sort perform to sort the array completely?",
        options: [
          "4",
          "3",
          "2",
          "1",
        ],
        correct: "3",
      },
      {
        topicId: 0, // Selection Sort
        question: "Given the array [10, 9, 8, 7], at which step will the first correctly placed element appear in Selection Sort?",
        options: [
          "After step 1",
          "After step 2",
          "After step 3",
          "After step 4",
        ],
        correct: "After step 1",
      },
      {
        topicId: 0, // Selection Sort
        question: "What is the main advantage of Selection Sort over other simple sorting algorithms like Bubble Sort?",
        options: [
          "It performs fewer swaps, reducing write operations for write-intensive systems",
          "It has a better average-case time complexity",
          "It is a stable sorting algorithm",
          "It can handle larger datasets more efficiently",
        ],
        correct: "It performs fewer swaps, reducing write operations for write-intensive systems",
      },
    ];

    await Question.bulkCreate(selectionSortQuestions);

    res.status(201).json({ message: 'Selection Sort questions inserted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to insert Selection Sort questions.' });
  }
  };

  export const bulkInsertBubbleSortQuestions = async (req: Request, res: Response) => {
    try {
      const bubbleSortQuestions = [
        {
          topicId: 1, // Bubble Sort
          question: "Using Bubble Sort, what will the array look like after the second pass on [4, 3, 1, 2]?",
          options: ["[3, 1, 2, 4]", "[1, 3, 2, 4]", "[3, 2, 1, 4]", "[4, 3, 1, 2]"],
          correct: "[1, 3, 2, 4]",
        },
        {
          topicId: 1, // Bubble Sort
          question: "Using Bubble Sort, what will the array [6, 2, 4, 1] look like after the first pass?",
          options: ["[2, 6, 4, 1]", "[6, 2, 1, 4]", "[2, 4, 6, 1]", "[2, 6, 1, 4]"],
          correct: "[2, 6, 4, 1]",
        },
        {
          topicId: 1, // Bubble Sort
          question: "What will the sorted array [8, 4, 6, 2] look like after three passes of Bubble Sort?",
          options: ["[4, 6, 2, 8]", "[4, 2, 6, 8]", "[2, 4, 6, 8]", "[8, 6, 4, 2]"],
          correct: "[2, 4, 6, 8]",
        },
        {
          topicId: 1, // Bubble Sort
          question: "Using Bubble Sort, what is the number of swaps needed to sort [3, 2, 4, 1]?",
          options: ["3", "4", "5", "6"],
          correct: "5",
        },
        {
          topicId: 1, // Bubble Sort
          question: "After sorting the array [5, 1, 4, 2, 8] with Bubble Sort, how many passes are required?",
          options: ["3", "4", "5", "6"],
          correct: "4",
        },
      ];
  
      await Question.bulkCreate(bubbleSortQuestions);
  
      res.status(201).json({ message: 'Bubble Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Bubble Sort questions.' });
    }
  };

  export const bulkInsertInsertionSortQuestions = async (req: Request, res: Response) => {
    console.log("Inserting questions:");
    try {
      const insertionSortQuestions = [
        {
          topicId: 2, // Insertion Sort
          question: "Given the array [9, 5, 1, 3], what will the array look like after three iterations of Insertion Sort?",
          options: [
            "[1, 3, 5, 9]",
            "[5, 9, 1, 3]",
            "[1, 5, 9, 3]",
            "[1, 3, 9, 5]",
          ],
          correct: "[1, 3, 9, 5]",
        },
        {
          topicId: 2, // Insertion Sort
          question: "Why is Insertion Sort more efficient for nearly sorted datasets compared to other O(n^2) algorithms?",
          options: [
            "It has a linear time complexity for nearly sorted datasets",
            "It uses divide and conquer techniques",
            "It avoids unnecessary swaps",
            "It processes elements in parallel",
          ],
          correct: "It has a linear time complexity for nearly sorted datasets",
        },
        {
          topicId: 2, // Insertion Sort
          question: "You are sorting the array [10, 8, 12, 7] using Insertion Sort. What is the number of comparisons made to sort the array completely?",
          options: [
            "6",
            "5",
            "4",
            "7",
          ],
          correct: "6",
        },
        {
          topicId: 2, // Insertion Sort
          question: "What is the main disadvantage of Insertion Sort compared to more advanced sorting algorithms like Merge Sort?",
          options: [
            "It cannot handle large datasets efficiently due to O(n^2) complexity",
            "It is not stable",
            "It uses extra memory for temporary arrays",
            "It cannot sort in descending order",
          ],
          correct: "It cannot handle large datasets efficiently due to O(n^2) complexity",
        },
        {
          topicId: 2, // Insertion Sort
          question: "How would you modify Insertion Sort to sort an array of objects by a specific property, such as 'age'?",
          options: [
            "Change the comparison to compare the specific property",
            "Sort the objects by their memory addresses",
            "Use a different sorting algorithm like Quick Sort",
            "Convert the objects into strings and then sort",
          ],
          correct: "Change the comparison to compare the specific property",
        },
      ];
  
      await Question.bulkCreate(insertionSortQuestions);
  
      res.status(201).json({ message: 'Insertion Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Insertion Sort questions.' });
    }
  };
  

  export const bulkInsertStackQuestions = async (req: Request, res: Response) => {
    try {
      const stackQuestions = [
        {
          topicId: 3, // Stack
          question: "Perform push(2), push(3), pop() on an empty stack. What remains in the stack?",
          options: ["3", "2", "Empty Stack"],
          correct: "2",
        },
        {
          topicId: 3, // Stack
          question: "Perform the operations: push(5), push(7), pop(), push(8) on an empty stack. What is the top element?",
          options: ["5", "7", "8", "Empty Stack"],
          correct: "8",
        },
        {
          topicId: 3, // Stack
          question: "Given the stack operations: push(1), push(2), pop(), push(3), pop(). What remains in the stack?",
          options: ["1", "2", "3", "Empty Stack"],
          correct: "1",
        },
        {
          topicId: 3, // Stack
          question: "You have an empty stack. Perform push(4), push(6), push(8), pop(), pop(). What is the last element left in the stack?",
          options: ["4", "6", "8", "Empty Stack"],
          correct: "4",
        },
        {
          topicId: 3, // Stack
          question: "If a stack contains elements [3, 6, 9] (top to bottom), and you perform pop(), what will be the top element after the operation?",
          options: ["3", "6", "9", "Empty Stack"],
          correct: "6",
        },
      ];
  
      await Question.bulkCreate(stackQuestions);
  
      res.status(201).json({ message: 'Stack questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert stack questions.' });
    }
  };
  
  export const bulkInsertQueueQuestions = async (req: Request, res: Response) => {
    try {
      const queueQuestions = [
        {
          topicId: 4, // Queue
          question: "Perform enqueue(2), enqueue(4), dequeue() on an empty queue. What remains in the queue?",
          options: ["4", "2", "Empty Queue"],
          correct: "4",
        },
        {
          topicId: 4, // Queue
          question: "If you enqueue(3), enqueue(6), enqueue(9), and dequeue() twice on an empty queue, what is the front element?",
          options: ["6", "9", "3", "Empty Queue"],
          correct: "9",
        },
        {
          topicId: 4, // Queue
          question: "Given the queue operations: enqueue(7), enqueue(5), dequeue(), enqueue(8), what are the elements in the queue from front to rear?",
          options: ["[5, 8]", "[7, 5, 8]", "[8, 5]", "[7, 8]"],
          correct: "[5, 8]",
        },
        {
          topicId: 4, // Queue
          question: "If the queue contains [10, 20, 30] (front to rear) and you perform enqueue(40), dequeue(), what is the front element now?",
          options: ["20", "30", "40", "10"],
          correct: "20",
        },
        {
          topicId: 4, // Queue
          question: "What is the result of performing enqueue(1), enqueue(2), enqueue(3), dequeue(), dequeue() on an empty queue?",
          options: ["[3]", "[1, 2]", "[2, 3]", "Empty Queue"],
          correct: "[3]",
        },
      ];
  
      await Question.bulkCreate(queueQuestions);
  
      res.status(201).json({ message: 'Queue questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert queue questions.' });
    }
  };
  
  export const bulkInsertLinkedListQuestions = async (req: Request, res: Response) => {
    try {
      const linkedListQuestions = [
        {
          topicId: 5, // Linked List
          question: "Insert 3 at the beginning of the linked list: 5 -> 7 -> NULL. What is the new list?",
          options: ["3 -> 5 -> 7 -> NULL", "5 -> 3 -> 7 -> NULL", "5 -> 7 -> 3 -> NULL"],
          correct: "3 -> 5 -> 7 -> NULL",
        },
        {
          topicId: 5, // Linked List
          question: "Delete the first node from the linked list: 2 -> 4 -> 6 -> NULL. What is the new list?",
          options: ["4 -> 6 -> NULL", "2 -> 6 -> NULL", "2 -> 4 -> NULL", "NULL"],
          correct: "4 -> 6 -> NULL",
        },
        {
          topicId: 5, // Linked List
          question: "Insert 10 after the node with value 7 in the linked list: 5 -> 7 -> 9 -> NULL. What is the new list?",
          options: ["5 -> 7 -> 10 -> 9 -> NULL", "5 -> 10 -> 7 -> 9 -> NULL", "5 -> 7 -> 9 -> 10 -> NULL"],
          correct: "5 -> 7 -> 10 -> 9 -> NULL",
        },
        {
          topicId: 5, // Linked List
          question: "Given the linked list 1 -> 2 -> 3 -> NULL, reverse the list. What is the result?",
          options: ["3 -> 2 -> 1 -> NULL", "1 -> 3 -> 2 -> NULL", "2 -> 1 -> 3 -> NULL"],
          correct: "3 -> 2 -> 1 -> NULL",
        },
        {
          topicId: 5, // Linked List
          question: "Find the middle node of the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> NULL. What is the value of the middle node?",
          options: ["2", "3", "4", "5"],
          correct: "3",
        },
      ];
  
      await Question.bulkCreate(linkedListQuestions);
  
      res.status(201).json({ message: 'Linked List questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert linked list questions.' });
    }
  };

  export const bulkInsertCountingSortQuestions = async (req: Request, res: Response) => {
    try {
      const countingSortQuestions = [
        {
          topicId: 6, // Counting Sort
          question: "You are tasked with sorting the array [7, 5, 3, 7, 1] using Counting Sort. What does the counting array look like after counting all occurrences of the elements?",
          options: [
            "[0, 1, 0, 1, 0, 1, 0, 2]", 
            "[1, 1, 1, 1, 1, 1, 1, 1]", 
            "[1, 0, 1, 0, 1, 1, 0, 2]",
            "[0, 1, 1, 0, 1, 1, 0, 2]"
          ],
          correct: "[0, 1, 0, 1, 0, 1, 0, 2]",
        },
        {
          topicId: 6, // Counting Sort
          question: "Given the input array [9, 8, 7, 6, 5], use Counting Sort. What will the array look like after cumulative sums are calculated in the counting array?",
          options: [
            "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", 
            "[0, 0, 0, 0, 0, 1, 2, 3, 4, 5]", 
            "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "[0, 1, 1, 1, 2, 3, 4, 5, 6, 7]"
          ],
          correct: "[0, 0, 0, 0, 0, 1, 2, 3, 4, 5]",
        },
        {
          topicId: 6, // Counting Sort
          question: "A system using Counting Sort needs to sort an array of student ages ranging from 10 to 50. How many elements will the counting array contain?",
          options: ["40", "41", "50", "39"],
          correct: "41",
        },
        {
          topicId: 6, // Counting Sort
          question: "Sort the array [4, 2, 3, 4, 1] using Counting Sort. What will be the array after placing all elements in their sorted positions?",
          options: ["[1, 2, 3, 4, 4]", "[4, 4, 3, 2, 1]", "[1, 3, 2, 4, 4]", "[1, 2, 4, 3, 4]"],
          correct: "[1, 2, 3, 4, 4]",
        },
        {
          topicId: 6, // Counting Sort
          question: "Your input array is [1, 2, 2, 1]. Using Counting Sort, what will be the sorted output if the counting array is adjusted using cumulative sums?",
          options: ["[1, 1, 2, 2]", "[2, 2, 1, 1]", "[1, 2, 1, 2]", "[2, 1, 2, 1]"],
          correct: "[1, 1, 2, 2]",
        },
        {
          topicId: 6, // Counting Sort
          question: "Why is Counting Sort not suitable for sorting the array [-2, -1, 0, 1, 2] without modifications?",
          options: [
            "It cannot handle negative numbers without offsetting", 
            "It requires floating-point precision", 
            "It can only sort arrays of even length", 
            "It doesn't work for ranges below zero"
          ],
          correct: "It cannot handle negative numbers without offsetting",
        },
      ];
  
      await Question.bulkCreate(countingSortQuestions);
  
      res.status(201).json({ message: 'Counting Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Counting Sort questions.' });
    }
  };
    
  export const bulkInsertRadixSortQuestions = async (req: Request, res: Response) => {
    try {
      const radixSortQuestions = [
        {
          topicId: 7, // Radix Sort
          question: "Sort the array [170, 45, 75, 90] using Radix Sort. What will the array look like after sorting by the least significant digit (units place)?",
          options: [
            "[170, 90, 75, 45]",
            "[90, 170, 75, 45]",
            "[170, 75, 45, 90]",
            "[45, 75, 90, 170]",
          ],
          correct: "[90, 170, 75, 45]",
        },
        {
          topicId: 7, // Radix Sort
          question: "What will the array [802, 630, 75, 2, 24] look like after sorting by the tens place during Radix Sort?",
          options: [
            "[802, 2, 24, 630, 75]",
            "[2, 802, 24, 75, 630]",
            "[2, 24, 630, 75, 802]",
            "[2, 24, 75, 630, 802]",
          ],
          correct: "[2, 802, 24, 75, 630]",
        },
        {
          topicId: 7, // Radix Sort
          question: "Given the input array [432, 8, 530, 90, 88], what will the array look like after sorting by the hundreds place?",
          options: [
            "[8, 88, 90, 432, 530]",
            "[432, 8, 530, 90, 88]",
            "[530, 432, 88, 90, 8]",
            "[8, 90, 88, 432, 530]",
          ],
          correct: "[8, 88, 90, 432, 530]",
        },
        {
          topicId: 7, // Radix Sort
          question: "Using Radix Sort, the array [5, 12, 300, 3, 45] is sorted. How many passes are required to fully sort the array?",
          options: ["1", "2", "3", "4"],
          correct: "3",
        },
        {
          topicId: 7, // Radix Sort
          question: "Why is Radix Sort more efficient than comparison-based algorithms like QuickSort for sorting integers?",
          options: [
            "It has a better time complexity for large integers",
            "It avoids comparisons and relies on digit-based sorting",
            "It can handle negative numbers directly",
            "It sorts in-place with minimal memory",
          ],
          correct: "It avoids comparisons and relies on digit-based sorting",
        },
        {
          topicId: 7, // Radix Sort
          question: "What is the main limitation of Radix Sort?",
          options: [
            "It cannot handle floating-point numbers",
            "It cannot handle large datasets",
            "It requires additional memory for auxiliary arrays",
            "It works only for strings",
          ],
          correct: "It requires additional memory for auxiliary arrays",
        },
      ];
  
      await Question.bulkCreate(radixSortQuestions);
  
      res.status(201).json({ message: 'Radix Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Radix Sort questions.' });
    }
  };
  
  export const bulkInsertBucketSortQuestions = async (req: Request, res: Response) => {
    try {
      const bucketSortQuestions = [
        {
          topicId: 8, // Bucket Sort
          question: "You are given the array [0.89, 0.23, 0.75, 0.41, 0.12]. After placing elements into buckets (assuming 5 buckets for range [0,1]), which bucket will contain 0.75?",
          options: [
            "Bucket 3",
            "Bucket 4",
            "Bucket 2",
            "Bucket 5",
          ],
          correct: "Bucket 4",
        },
        {
          topicId: 8, // Bucket Sort
          question: "Sort the array [0.9, 0.4, 0.8, 0.3, 0.2] using Bucket Sort with 3 buckets. What will the sorted array look like after sorting all buckets individually?",
          options: [
            "[0.9, 0.8, 0.4, 0.3, 0.2]",
            "[0.2, 0.3, 0.4, 0.8, 0.9]",
            "[0.3, 0.2, 0.8, 0.4, 0.9]",
            "[0.8, 0.9, 0.3, 0.4, 0.2]",
          ],
          correct: "[0.2, 0.3, 0.4, 0.8, 0.9]",
        },
        {
          topicId: 8, // Bucket Sort
          question: "An array [78, 25, 45, 98, 33] is sorted using Bucket Sort with bucket intervals of size 10. Which bucket will 45 be placed in?",
          options: [
            "Bucket 4",
            "Bucket 3",
            "Bucket 5",
            "Bucket 6",
          ],
          correct: "Bucket 5",
        },
        {
          topicId: 8, // Bucket Sort
          question: "Why is Bucket Sort generally more efficient for floating-point numbers uniformly distributed over a range?",
          options: [
            "It reduces the number of comparisons required",
            "It avoids sorting by using buckets",
            "It maps elements directly into sorted positions",
            "It groups elements into buckets that are sorted internally",
          ],
          correct: "It groups elements into buckets that are sorted internally",
        },
        {
          topicId: 8, // Bucket Sort
          question: "Given the array [0.78, 0.55, 0.62, 0.12, 0.19], how can you determine the optimal number of buckets for efficient sorting?",
          options: [
            "Set the number of buckets equal to the size of the array",
            "Set the number of buckets equal to the range of the array",
            "Use a fixed number like 10 buckets regardless of input",
            "It depends on the distribution and range of the input data",
          ],
          correct: "It depends on the distribution and range of the input data",
        },
        {
          topicId: 8, // Bucket Sort
          question: "Given an array [10, 15, 20, 25, 30] with a bucket size of 5, what is the time complexity for distributing elements into buckets?",
          options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(log n)",
          ],
          correct: "O(n)",
        },
        {
          topicId: 8, // Bucket Sort
          question: "What is the key limitation of Bucket Sort when applied to large datasets with non-uniform distribution?",
          options: [
            "Buckets may become imbalanced and require extra sorting time",
            "It cannot handle negative numbers",
            "It requires too much memory",
            "It cannot handle datasets with duplicate values",
          ],
          correct: "Buckets may become imbalanced and require extra sorting time",
        },
        {
          topicId: 8, // Bucket Sort
          question: "When sorting the array [7.1, 4.2, 5.3, 6.4, 3.5] using Bucket Sort with 4 buckets, which sorting algorithm would you use to sort elements within each bucket for maximum efficiency?",
          options: [
            "Quick Sort",
            "Insertion Sort",
            "Bubble Sort",
            "Merge Sort",
          ],
          correct: "Insertion Sort",
        },
      ];
  
      await Question.bulkCreate(bucketSortQuestions);
  
      res.status(201).json({ message: 'Bucket Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Bucket Sort questions.' });
    }
  };

  export const bulkInsertMergeSortQuestions = async (req: Request, res: Response) => {
    try {
      const mergeSortQuestions = [
        {
          topicId: 9, // Merge Sort
          question: "You are given the array [38, 27, 43, 3, 9, 82, 10]. After the first split in Merge Sort, what are the two resulting subarrays?",
          options: [
            "[38, 27, 43] and [3, 9, 82, 10]",
            "[38, 27, 43, 3] and [9, 82, 10]",
            "[38, 27] and [43, 3, 9, 82, 10]",
            "[38] and [27, 43, 3, 9, 82, 10]",
          ],
          correct: "[38, 27, 43] and [3, 9, 82, 10]",
        },
        {
          topicId: 9, // Merge Sort
          question: "During the merge step of Merge Sort for the arrays [3, 9, 27] and [10, 38, 43], what will the resulting array look like after the first three elements are merged?",
          options: [
            "[3, 9, 27, 10, 38, 43]",
            "[3, 9, 10, 27, 38, 43]",
            "[3, 10, 27, 38, 43]",
            "[10, 27, 38, 3, 9, 43]",
          ],
          correct: "[3, 9, 10, 27, 38, 43]",
        },
        {
          topicId: 9, // Merge Sort
          question: "Merge Sort splits the array [5, 2, 4, 7, 1, 3, 6, 8] into single-element subarrays. What is the third merge step (after merging single-element subarrays)?",
          options: [
            "[5, 2, 4, 7] and [1, 3, 6, 8]",
            "[2, 5] and [4, 7]",
            "[2, 4, 5, 7] and [1, 3, 6, 8]",
            "[1, 2, 3, 4, 5, 6, 7, 8]",
          ],
          correct: "[2, 4, 5, 7] and [1, 3, 6, 8]",
        },
        {
          topicId: 9, // Merge Sort
          question: "Why does Merge Sort require O(n log n) time complexity, even in the best case?",
          options: [
            "It requires log n levels of recursive splitting and O(n) merging at each level",
            "It uses a binary search approach at every step",
            "It performs O(n^2) comparisons but divides the array efficiently",
            "It uses auxiliary memory proportional to the input size",
          ],
          correct: "It requires log n levels of recursive splitting and O(n) merging at each level",
        },
        {
          topicId: 9, // Merge Sort
          question: "Given an array of size 100, what is the total number of merge operations performed in Merge Sort?",
          options: [
            "99",
            "100",
            "50",
            "197",
          ],
          correct: "99",
        },
      ];
  
      await Question.bulkCreate(mergeSortQuestions);
  
      res.status(201).json({ message: 'Merge Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Merge Sort questions.' });
    }
  };
  
  export const bulkInsertQuickSortQuestions = async (req: Request, res: Response) => {
    try {
      const quickSortQuestions = [
        {
          topicId: 10, // Quick Sort
          question: "You are given the array [8, 3, 6, 7, 2]. Using Quick Sort with 6 as the pivot, what will the array look like after the first partition step?",
          options: [
            "[3, 2, 6, 8, 7]",
            "[3, 2, 6, 7, 8]",
            "[6, 3, 7, 8, 2]",
            "[2, 3, 6, 7, 8]",
          ],
          correct: "[3, 2, 6, 8, 7]",
        },
        {
          topicId: 10, // Quick Sort
          question: "Given the array [10, 7, 8, 9, 1, 5], and choosing 5 as the pivot, how many swaps are required to partition the array around the pivot?",
          options: [
            "3",
            "2",
            "4",
            "1",
          ],
          correct: "3",
        },
        {
          topicId: 10, // Quick Sort
          question: "For the array [9, 4, 7, 6, 3], Quick Sort is used with 6 as the pivot. After partitioning, which element will be at its final position?",
          options: [
            "6",
            "4",
            "3",
            "7",
          ],
          correct: "6",
        },
        {
          topicId: 10, // Quick Sort
          question: "Why does Quick Sort have O(n^2) time complexity in the worst case?",
          options: [
            "The pivot always ends up at one end, creating unbalanced partitions",
            "It requires O(n^2) comparisons at every level",
            "It recursively sorts each element individually",
            "It uses auxiliary memory proportional to the array size",
          ],
          correct: "The pivot always ends up at one end, creating unbalanced partitions",
        },
        {
          topicId: 10, // Quick Sort
          question: "You are sorting an array of size 8 using Quick Sort, and the pivot is chosen randomly. What is the probability that the pivot splits the array into two subarrays of equal size?",
          options: [
            "1/8",
            "1/4",
            "1/7",
            "1/2",
          ],
          correct: "1/7",
        },
      ];
  
      await Question.bulkCreate(quickSortQuestions);
  
      res.status(201).json({ message: 'Quick Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Quick Sort questions.' });
    }
  };

  export const bulkInsertBinarySearchTreeQuestions = async (req: Request, res: Response) => {
    try {
      const bstQuestions = [
        {
          topicId: 11, // Binary Search Tree
          question: "You are given a BST with the elements [50, 30, 70, 20, 40, 60, 80]. What will the tree look like after deleting the root node (50)?",
          options: [
            "The node with value 60 replaces the root",
            "The node with value 40 replaces the root",
            "The node with value 30 replaces the root",
            "The node with value 70 replaces the root",
          ],
          correct: "The node with value 60 replaces the root",
        },
        {
          topicId: 11, // Binary Search Tree
          question: "Given the BST [15, 10, 20, 8, 12, 17, 25], what is the in-order traversal after deleting the node 10?",
          options: [
            "[8, 12, 15, 17, 20, 25]",
            "[15, 8, 12, 17, 20, 25]",
            "[8, 15, 12, 17, 20, 25]",
            "[15, 12, 8, 20, 25, 17]",
          ],
          correct: "[8, 12, 15, 17, 20, 25]",
        },
        {
          topicId: 11, // Binary Search Tree
          question: "What is the height of a BST created from the elements [10, 20, 30, 40, 50] if inserted in ascending order?",
          options: [
            "4",
            "3",
            "5",
            "2",
          ],
          correct: "4",
        },
        {
          topicId: 11, // Binary Search Tree
          question: "Given a BST, what is the minimum number of nodes that need to be checked to find whether 35 is present in the tree with root 50 and child nodes [30, 70]?",
          options: [
            "3",
            "2",
            "4",
            "1",
          ],
          correct: "3",
        },
        {
          topicId: 11, // Binary Search Tree
          question: "Why does inserting elements in sorted order into a BST often lead to poor performance?",
          options: [
            "It creates a skewed tree with O(n) height",
            "It violates the BST property",
            "It increases the time complexity to O(n log n)",
            "It requires additional memory for balancing",
          ],
          correct: "It creates a skewed tree with O(n) height",
        },
      ];
  
      await Question.bulkCreate(bstQuestions);
  
      res.status(201).json({ message: 'Binary Search Tree questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Binary Search Tree questions.' });
    }
  };

  export const bulkInsertHashTableQuestions = async (req: Request, res: Response) => {
    try {
      const hashTableQuestions = [
        {
          topicId: 12, // Hash Table
          question: "A hash table uses chaining to resolve collisions. If the hash function is `h(x) = x % 10`, what will the hash table look like after inserting [10, 20, 15, 25, 30]?",
          options: [
            "Index 0: [10, 20, 30], Index 5: [15, 25]",
            "Index 0: [10], Index 5: [20, 15, 25], Index 5: [30]",
            "Index 0: [10, 15, 30], Index 5: [20, 25]",
            "Index 0: [10], Index 1: [15], Index 5: [25], Index 5: [20], Index 3: [30]",
          ],
          correct: "Index 0: [10, 20, 30], Index 5: [15, 25]",
        },
        {
          topicId: 12, // Hash Table
          question: "What is the time complexity of searching for an element in a hash table with separate chaining, assuming all elements are in the same bucket?",
          options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)",
          ],
          correct: "O(n)",
        },
        {
          topicId: 12, // Hash Table
          question: "A hash table uses open addressing with linear probing. After inserting [12, 22, 32] into a table of size 10, what index does 32 occupy?",
          options: [
            "2",
            "3",
            "4",
            "1",
          ],
          correct: "4",
        },
        {
          topicId: 12, // Hash Table
          question: "Given a hash table with size 7 and the hash function `h(x) = x % 7`, which of the following insertion sequences causes the most collisions using quadratic probing?",
          options: [
            "[3, 10, 17, 24]",
            "[4, 11, 18, 25]",
            "[5, 12, 19, 26]",
            "[6, 13, 20, 27]",
          ],
          correct: "[3, 10, 17, 24]",
        },
        {
          topicId: 12, // Hash Table
          question: "Why does the load factor in a hash table directly affect its performance?",
          options: [
            "It determines the number of collisions and affects search efficiency",
            "It increases the memory usage proportionally",
            "It determines the size of the hash table",
            "It reduces the time complexity to O(1)",
          ],
          correct: "It determines the number of collisions and affects search efficiency",
        },
      ];
  
      await Question.bulkCreate(hashTableQuestions);
  
      res.status(201).json({ message: 'Hash Table questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Hash Table questions.' });
    }
  };
  
  export const bulkInsertBFSQuestions = async (req: Request, res: Response) => {
    try {
      const bfsQuestions = [
        {
          topicId: 13, // BFS
          question: "Given the graph: A -> [B, C], B -> [D, E], C -> [F, G], what is the BFS traversal starting from node A?",
          options: [
            "[A, B, C, D, E, F, G]",
            "[A, C, B, F, G, D, E]",
            "[A, B, D, E, C, F, G]",
            "[A, C, F, G, B, D, E]",
          ],
          correct: "[A, B, C, D, E, F, G]",
        },
        {
          topicId: 13, // BFS
          question: "A BFS traversal is performed on a graph with nodes [A, B, C, D, E] and edges [(A, B), (A, C), (B, D), (D, E)]. If node A is the starting node, how many levels will the traversal have?",
          options: ["2", "3", "4", "5"],
          correct: "3",
        },
        {
          topicId: 13, // BFS
          question: "You perform BFS on a graph with 6 nodes and 7 edges. The graph contains a cycle. Which data structure ensures no node is visited more than once?",
          options: [
            "Queue",
            "Set or Hash Table",
            "Stack",
            "Priority Queue",
          ],
          correct: "Set or Hash Table",
        },
        {
          topicId: 13, // BFS
          question: "You need to find the shortest path in an unweighted graph using BFS. If the graph has 1,000 nodes and is connected, what is the worst-case time complexity?",
          options: [
            "O(V + E)",
            "O(V^2)",
            "O(E log V)",
            "O(V log E)",
          ],
          correct: "O(V + E)",
        },
        {
          topicId: 13, // BFS
          question: "Why does BFS fail to find the shortest path in a weighted graph if edge weights are not uniform?",
          options: [
            "It does not account for weights while traversing nodes",
            "It traverses nodes in a depth-first manner",
            "It requires a priority queue to process weights",
            "It assumes all paths are weighted equally",
          ],
          correct: "It does not account for weights while traversing nodes",
        },
      ];
  
      await Question.bulkCreate(bfsQuestions);
  
      res.status(201).json({ message: 'BFS questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert BFS questions.' });
    }
  };
  
  export const bulkInsertDFSQuestions = async (req: Request, res: Response) => {
    try {
      const dfsQuestions = [
        {
          topicId: 14, // DFS
          question: "Given a directed graph: A -> [B, C], B -> [D, E], C -> [F], F -> [C], perform a DFS starting from A. Which of the following nodes is part of a strongly connected component?",
          options: [
            "C",
            "D",
            "E",
            "A",
          ],
          correct: "C",
        },
        {
          topicId: 14, // DFS
          question: "A graph with 8 nodes and 12 edges is traversed using DFS. If all edges are traversed once, how many recursive calls will DFS make in the worst case?",
          options: [
            "8",
            "12",
            "16",
            "20",
          ],
          correct: "8",
        },
        {
          topicId: 14, // DFS
          question: "In a graph with nodes [A, B, C, D, E] and edges [(A, B), (B, C), (C, D), (D, B), (D, E)], a DFS starts at node A. What type of edge is (D, B)?",
          options: [
            "Tree edge",
            "Back edge",
            "Forward edge",
            "Cross edge",
          ],
          correct: "Back edge",
        },
        {
          topicId: 14, // DFS
          question: "Why does a DFS traversal need to maintain a visited set or array, especially in dense graphs?",
          options: [
            "To prevent infinite recursion in cyclic graphs",
            "To reduce the time complexity to O(1)",
            "To ensure nodes are processed in topological order",
            "To handle graphs with disconnected components",
          ],
          correct: "To prevent infinite recursion in cyclic graphs",
        },
        {
          topicId: 14, // DFS
          question: "Given a graph with 10 nodes and 15 edges, DFS is used to detect cycles. How many back edges must be present for the graph to contain exactly two cycles?",
          options: [
            "2",
            "1",
            "3",
            "4",
          ],
          correct: "2",
        },
      ];
  
      await Question.bulkCreate(dfsQuestions);
  
      res.status(201).json({ message: 'DFS questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert DFS questions.' });
    }
  };
  
  export const bulkInsertHeapQuestions = async (req: Request, res: Response) => {
    try {
      const heapQuestions = [
        {
          topicId: 15, // Heap
          question: "Given a max heap [50, 30, 40, 10, 20], what will the heap look like after inserting 45 and reheapifying?",
          options: [
            "[50, 45, 40, 10, 20, 30]",
            "[50, 30, 45, 10, 20, 40]",
            "[50, 30, 40, 10, 20, 45]",
            "[50, 45, 30, 10, 20, 40]",
          ],
          correct: "[50, 45, 40, 10, 20, 30]",
        },
        {
          topicId: 15, // Heap
          question: "You are building a min heap from an unsorted array [7, 3, 5, 1, 2]. After the heapify operation, what is the final heap?",
          options: [
            "[1, 2, 5, 3, 7]",
            "[7, 3, 5, 1, 2]",
            "[1, 3, 5, 7, 2]",
            "[1, 2, 7, 5, 3]",
          ],
          correct: "[1, 2, 5, 3, 7]",
        },
        {
          topicId: 15, // Heap
          question: "A max heap contains 15 elements. How many leaf nodes are present?",
          options: [
            "7",
            "8",
            "15",
            "4",
          ],
          correct: "8",
        },
        {
          topicId: 15, // Heap
          question: "Given a min heap [1, 3, 6, 5, 9, 8], delete the root and reheapify. What is the resulting heap?",
          options: [
            "[3, 5, 6, 8, 9]",
            "[3, 5, 8, 6, 9]",
            "[3, 5, 6, 9, 8]",
            "[3, 9, 6, 5, 8]",
          ],
          correct: "[3, 5, 6, 9, 8]",
        },
        {
          topicId: 15, // Heap
          question: "Why is the time complexity of inserting an element into a heap O(log n)?",
          options: [
            "The insertion operation must traverse the height of the heap",
            "The insertion operation compares each element in the heap",
            "The insertion operation swaps every node in the heap",
            "The insertion operation uses a linear search for the correct position",
          ],
          correct: "The insertion operation must traverse the height of the heap",
        },
      ];
  
      await Question.bulkCreate(heapQuestions);
  
      res.status(201).json({ message: 'Heap questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Heap questions.' });
    }
  };

  export const bulkInsertTopologicalSortQuestions = async (req: Request, res: Response) => {
    try {
      const topologicalSortQuestions = [
        {
          topicId: 16, // Topological Sort
          question: "Given a directed acyclic graph (DAG): A -> [B, C], B -> [D], C -> [D], what is a valid topological ordering?",
          options: [
            "[A, B, C, D]",
            "[A, C, B, D]",
            "[A, D, B, C]",
            "[D, A, B, C]",
          ],
          correct: "[A, B, C, D]",
        },
        {
          topicId: 16, // Topological Sort
          question: "Why can topological sort only be applied to Directed Acyclic Graphs (DAGs)?",
          options: [
            "Because cyclic graphs do not have a well-defined order of dependencies",
            "Because DAGs allow cycles, which topological sort needs",
            "Because topological sort requires undirected edges",
            "Because topological sort is only defined for binary trees",
          ],
          correct: "Because cyclic graphs do not have a well-defined order of dependencies",
        },
        {
          topicId: 16, // Topological Sort
          question: "You are performing a topological sort on a DAG with 6 nodes and 7 edges. What is the time complexity of the sorting algorithm using Kahn's Algorithm?",
          options: [
            "O(V + E)",
            "O(V^2)",
            "O(E log V)",
            "O(V log E)",
          ],
          correct: "O(V + E)",
        },
        {
          topicId: 16, // Topological Sort
          question: "Given a DAG: A -> B, A -> C, B -> D, C -> D, you want to ensure that D is processed before C in the topological order. What edge must be added to the graph?",
          options: [
            "D -> C",
            "C -> D",
            "B -> A",
            "D -> A",
          ],
          correct: "D -> C",
        },
        {
          topicId: 16, // Topological Sort
          question: "If a graph is not a DAG, what will happen when you attempt a topological sort using Kahn's Algorithm?",
          options: [
            "The algorithm will detect a cycle and fail",
            "The algorithm will incorrectly order the nodes",
            "The algorithm will enter an infinite loop",
            "The algorithm will complete successfully but produce a random order",
          ],
          correct: "The algorithm will detect a cycle and fail",
        },
      ];
  
      await Question.bulkCreate(topologicalSortQuestions);
  
      res.status(201).json({ message: 'Topological Sort questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Topological Sort questions.' });
    }
  };
  
  export const bulkInsertAVLTreeQuestions = async (req: Request, res: Response) => {
    try {
      const avlTreeQuestions = [
        {
          topicId: 17, // AVL Tree
          question: "Given an empty AVL tree, insert the values [10, 20, 30]. What will the tree look like after balancing?",
          options: [
            "10 -> 20 -> 30",
            "20 -> 10, 30",
            "30 -> 20, 10",
            "10 -> 30 -> 20",
          ],
          correct: "20 -> 10, 30",
        },
        {
          topicId: 17, // AVL Tree
          question: "You are given an AVL tree with nodes [30, 20, 40, 10]. After inserting 25, what is the balance factor of the root node?",
          options: [
            "0",
            "-1",
            "1",
            "2",
          ],
          correct: "1",
        },
        {
          topicId: 17, // AVL Tree
          question: "Why does an AVL Tree require O(log n) time complexity for insertion and deletion?",
          options: [
            "The height of the tree is always balanced to O(log n)",
            "The tree reorganizes itself using a linear number of rotations",
            "AVL trees do not allow duplicate values",
            "AVL trees only allow balanced binary trees",
          ],
          correct: "The height of the tree is always balanced to O(log n)",
        },
        {
          topicId: 17, // AVL Tree
          question: "Given an AVL tree with height 4, what is the maximum number of nodes it can contain?",
          options: [
            "15",
            "31",
            "25",
            "13",
          ],
          correct: "31",
        },
        {
          topicId: 17, // AVL Tree
          question: "What rotation(s) are required to balance an AVL tree after inserting the value 50 into a tree with root 40 and child nodes [30, 45]?",
          options: [
            "Left rotation at 40",
            "Right rotation at 40",
            "Right rotation at 50",
            "Left rotation at 30 followed by a right rotation at 40",
          ],
          correct: "Left rotation at 40",
        },
      ];
  
      await Question.bulkCreate(avlTreeQuestions);
  
      res.status(201).json({ message: 'AVL Tree questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert AVL Tree questions.' });
    }
  };

  export const bulkInsertDijkstrasAlgorithmQuestions = async (req: Request, res: Response) => {
    try {
      const dijkstraQuestions = [
        {
          topicId: 18, // Dijkstra's Algorithm
          question: "Given a graph: A -> B (3), A -> C (1), C -> B (1), B -> D (6), C -> D (5), starting from A, what is the shortest path to D and its total cost?",
          options: [
            "A -> C -> D, cost = 6",
            "A -> B -> D, cost = 9",
            "A -> C -> B -> D, cost = 8",
            "A -> D, cost = 6",
          ],
          correct: "A -> C -> D, cost = 6",
        },
        {
          topicId: 18, // Dijkstra's Algorithm
          question: "In a graph with nodes A, B, C, D, and edges: A -> B (1), B -> C (2), C -> D (3), and A -> D (10), how does Dijkstra’s Algorithm update the shortest distance to D after processing C?",
          options: [
            "Updates to 6 through path A -> B -> C -> D",
            "Remains 10 since A -> D is shorter",
            "Updates to 7 through path A -> C -> D",
            "Cannot update because no valid path exists",
          ],
          correct: "Updates to 6 through path A -> B -> C -> D",
        },
        {
          topicId: 18, // Dijkstra's Algorithm
          question: "Why does Dijkstra's Algorithm use a priority queue to determine the next node to process?",
          options: [
            "To always process the node with the smallest known distance first",
            "To handle cycles in the graph",
            "To guarantee that all nodes are processed exactly once",
            "To reduce the algorithm's space complexity",
          ],
          correct: "To always process the node with the smallest known distance first",
        },
        {
          topicId: 18, // Dijkstra's Algorithm
          question: "Given a graph with a cycle: A -> B (2), B -> C (3), C -> A (1), and A -> D (4), starting from A, what is the shortest path to D?",
          options: [
            "A -> D, cost = 4",
            "A -> B -> C -> D, cost = 7",
            "A -> C -> B -> D, cost = 8",
            "Cycle prevents computation",
          ],
          correct: "A -> D, cost = 4",
        },
        {
          topicId: 18, // Dijkstra's Algorithm
          question: "You are running Dijkstra's Algorithm on a dense graph with 1,000 nodes and 250,000 edges using a binary heap for the priority queue. What is the worst-case time complexity?",
          options: [
            "O((V + E) log V)",
            "O(V^2)",
            "O(E + V log V)",
            "O(V^2 log E)",
          ],
          correct: "O((V + E) log V)",
        },
      ];
  
      await Question.bulkCreate(dijkstraQuestions);
  
      res.status(201).json({ message: "Dijkstra's Algorithm questions inserted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to insert Dijkstra's Algorithm questions." });
    }
  };
  
  export const bulkInsertBellmanFordQuestions = async (req: Request, res: Response) => {
    try {
      const bellmanFordQuestions = [
        {
          topicId: 19, // Bellman-Ford Algorithm
          question: "Given a graph: A -> B (4), A -> C (2), B -> C (3), B -> D (-5), C -> D (4), starting from A, what is the shortest path to D?",
          options: [
            "A -> B -> D, cost = -1",
            "A -> C -> D, cost = 6",
            "A -> B -> C -> D, cost = 3",
            "No valid path exists",
          ],
          correct: "A -> B -> D, cost = -1",
        },
        {
          topicId: 19, // Bellman-Ford Algorithm
          question: "Why can Bellman-Ford handle graphs with negative edge weights, while Dijkstra’s Algorithm cannot?",
          options: [
            "Bellman-Ford relaxes all edges in every iteration",
            "Bellman-Ford uses a priority queue to process nodes",
            "Bellman-Ford assumes all edge weights are positive",
            "Bellman-Ford processes nodes in a breadth-first manner",
          ],
          correct: "Bellman-Ford relaxes all edges in every iteration",
        },
        {
          topicId: 19, // Bellman-Ford Algorithm
          question: "In a graph with 6 nodes and 10 edges, what is the maximum number of iterations required to determine the shortest paths using Bellman-Ford?",
          options: [
            "5",
            "6",
            "10",
            "7",
          ],
          correct: "5",
        },
        {
          topicId: 19, // Bellman-Ford Algorithm
          question: "You run Bellman-Ford on a graph and detect that a node’s distance is updated on the nth iteration. What does this indicate about the graph?",
          options: [
            "The graph contains a negative weight cycle",
            "There are multiple shortest paths to the node",
            "The algorithm has encountered a cycle of positive weights",
            "The graph is disconnected",
          ],
          correct: "The graph contains a negative weight cycle",
        },
        {
          topicId: 19, // Bellman-Ford Algorithm
          question: "What is the time complexity of Bellman-Ford on a graph with V nodes and E edges, and why?",
          options: [
            "O(VE) because it relaxes all edges for each node",
            "O(V + E) because it processes each edge once",
            "O(V^2) because it uses a matrix for adjacency representation",
            "O(V log E) because it uses a heap-based priority queue",
          ],
          correct: "O(VE) because it relaxes all edges for each node",
        },
      ];
  
      await Question.bulkCreate(bellmanFordQuestions);
  
      res.status(201).json({ message: 'Bellman-Ford Algorithm questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Bellman-Ford Algorithm questions.' });
    }
  };
  
  export const bulkInsertKruskalsAlgorithmQuestions = async (req: Request, res: Response) => {
    try {
      const kruskalQuestions = [
        {
          topicId: 20, // Kruskal's Algorithm
          question: "Given a graph with nodes A, B, C, D and edges: A-B (1), A-C (2), B-C (3), C-D (4), B-D (5), what is the total weight of the minimum spanning tree (MST)?",
          options: [
            "7",
            "6",
            "8",
            "5",
          ],
          correct: "7",
        },
        {
          topicId: 20, // Kruskal's Algorithm
          question: "What is the key role of a disjoint-set (union-find) data structure in Kruskal's Algorithm?",
          options: [
            "To detect cycles efficiently while adding edges",
            "To sort edges by weight",
            "To find the shortest path between two nodes",
            "To optimize the graph's adjacency list representation",
          ],
          correct: "To detect cycles efficiently while adding edges",
        },
        {
          topicId: 20, // Kruskal's Algorithm
          question: "You are given a graph with 6 nodes and 9 edges. After sorting the edges by weight, how many edges will Kruskal's Algorithm add to the MST?",
          options: [
            "5",
            "6",
            "9",
            "4",
          ],
          correct: "5",
        },
        {
          topicId: 20, // Kruskal's Algorithm
          question: "Why does Kruskal's Algorithm sort all edges by weight before processing them?",
          options: [
            "To ensure the MST is constructed by greedily selecting the smallest edges",
            "To reduce the time complexity of the algorithm",
            "To guarantee that cycles are not formed",
            "To maximize the total weight of the MST",
          ],
          correct: "To ensure the MST is constructed by greedily selecting the smallest edges",
        },
        {
          topicId: 20, // Kruskal's Algorithm
          question: "What is the time complexity of Kruskal's Algorithm when using a union-find data structure with path compression and rank optimization?",
          options: [
            "O(E log V)",
            "O(E log E)",
            "O(V^2)",
            "O(V + E)",
          ],
          correct: "O(E log V)",
        },
      ];
  
      await Question.bulkCreate(kruskalQuestions);
  
      res.status(201).json({ message: 'Kruskal\'s Algorithm questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Kruskal\'s Algorithm questions.' });
    }
  };
  
  export const bulkInsertPrimQuestions = async (req: Request, res: Response) => {
    try {
      const primQuestions = [
        {
          topicId: 21, // Prim's Algorithm
          question: "Given a graph: A -> B (4), A -> C (2), B -> C (1), B -> D (5), C -> D (3), starting from A, what is the total weight of the minimum spanning tree (MST)?",
          options: [
            "8",
            "7",
            "9",
            "10",
          ],
          correct: "7",
        },
        {
          topicId: 21, // Prim's Algorithm
          question: "Why does Prim's Algorithm require a priority queue for efficient implementation?",
          options: [
            "To efficiently select the edge with the minimum weight connecting the MST to a new vertex",
            "To reduce the number of edges considered during each iteration",
            "To avoid cycles in the MST",
            "To sort all edges by weight before processing",
          ],
          correct: "To efficiently select the edge with the minimum weight connecting the MST to a new vertex",
        },
        {
          topicId: 21, // Prim's Algorithm
          question: "You are implementing Prim's Algorithm on a graph with 7 nodes and 15 edges. How many iterations are required to complete the MST?",
          options: [
            "6",
            "7",
            "15",
            "14",
          ],
          correct: "6",
        },
        {
          topicId: 21, // Prim's Algorithm
          question: "What is the time complexity of Prim's Algorithm when using a priority queue and adjacency list representation for the graph?",
          options: [
            "O(E log V)",
            "O(V^2)",
            "O(E + V)",
            "O(V log E)",
          ],
          correct: "O(E log V)",
        },
        {
          topicId: 21, // Prim's Algorithm
          question: "What is the main difference between Prim's Algorithm and Kruskal's Algorithm when constructing a minimum spanning tree?",
          options: [
            "Prim's Algorithm grows the MST from a single vertex, while Kruskal's Algorithm considers the entire graph",
            "Prim's Algorithm avoids sorting edges, while Kruskal's Algorithm sorts edges by weight",
            "Prim's Algorithm is more efficient for dense graphs, while Kruskal's Algorithm is better for sparse graphs",
            "Prim's Algorithm works only for connected graphs, while Kruskal's Algorithm works for disconnected graphs",
          ],
          correct: "Prim's Algorithm grows the MST from a single vertex, while Kruskal's Algorithm considers the entire graph",
        },
      ];
  
      await Question.bulkCreate(primQuestions);
  
      res.status(201).json({ message: 'Prim\'s Algorithm questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Prim\'s Algorithm questions.' });
    }
  };
    
  export const bulkInsertKnapsackQuestions = async (req: Request, res: Response) => {
    try {
      const knapsackQuestions = [
        {
          topicId: 22, // Knapsack Problem
          question: "Given items with weights [2, 3, 4, 5] and values [3, 4, 5, 6], and a knapsack capacity of 5, what is the maximum value you can achieve using the 0/1 Knapsack approach?",
          options: [
            "7",
            "9",
            "6",
            "10",
          ],
          correct: "7",
        },
        {
          topicId: 22, // Knapsack Problem
          question: "Why does the 0/1 Knapsack Problem require dynamic programming to solve efficiently?",
          options: [
            "To avoid recalculating the solutions of overlapping subproblems",
            "To handle fractional items effectively",
            "To ensure the solution is always optimal",
            "To handle negative weights in the input",
          ],
          correct: "To avoid recalculating the solutions of overlapping subproblems",
        },
        {
          topicId: 22, // Knapsack Problem
          question: "You are solving a fractional knapsack problem where items have weights [2, 3, 5] and values [10, 15, 25]. If the capacity of the knapsack is 6, what is the maximum value you can achieve?",
          options: [
            "35",
            "30",
            "40",
            "45",
          ],
          correct: "35",
        },
        {
          topicId: 22, // Knapsack Problem
          question: "What is the time complexity of solving the 0/1 Knapsack Problem using dynamic programming for n items and a capacity of W?",
          options: [
            "O(n * W)",
            "O(n^2)",
            "O(W^2)",
            "O(log(n * W))",
          ],
          correct: "O(n * W)",
        },
        {
          topicId: 22, // Knapsack Problem
          question: "How would you modify the knapsack algorithm to handle an unbounded knapsack problem, where you can select an item multiple times?",
          options: [
            "Allow repeated inclusion of an item while iterating over capacities",
            "Ignore items already included in the knapsack",
            "Add a weight penalty for repeated items",
            "Use a greedy algorithm instead of dynamic programming",
          ],
          correct: "Allow repeated inclusion of an item while iterating over capacities",
        },
      ];
  
      await Question.bulkCreate(knapsackQuestions);
  
      res.status(201).json({ message: 'Knapsack Problem questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert Knapsack Problem questions.' });
    }
  };

  
  export const bulkInsertLCSQuestions = async (req: Request, res: Response) => {
    try {
      const lcsQuestions = [
        {
          topicId: 23, // Longest Common Subsequence (LCS)
          question: "Given two strings 'AGGTAB' and 'GXTXAYB', what is the length of the longest common subsequence (LCS)?",
          options: [
            "4",
            "5",
            "6",
            "3",
          ],
          correct: "4",
        },
        {
          topicId: 23, // Longest Common Subsequence (LCS)
          question: "Why does solving the LCS problem require dynamic programming for efficient computation?",
          options: [
            "To store results of overlapping subproblems and avoid redundant calculations",
            "To handle variable-length subsequences",
            "To ensure all subsequences are sorted lexicographically",
            "To minimize the time complexity to O(log n)",
          ],
          correct: "To store results of overlapping subproblems and avoid redundant calculations",
        },
        {
          topicId: 23, // Longest Common Subsequence (LCS)
          question: "For strings 'ABCBDAB' and 'BDCAB', what is the actual LCS?",
          options: [
            "'BCAB'",
            "'BDAB'",
            "'BDAB'",
            "'BCBA'",
          ],
          correct: "'BDAB'",
        },
        {
          topicId: 23, // Longest Common Subsequence (LCS)
          question: "What is the time complexity of the LCS problem using dynamic programming for strings of length m and n?",
          options: [
            "O(m * n)",
            "O(m + n)",
            "O(m^2)",
            "O(n log m)",
          ],
          correct: "O(m * n)",
        },
        {
          topicId: 23, // Longest Common Subsequence (LCS)
          question: "How would you modify the LCS algorithm to also print the subsequence, not just its length?",
          options: [
            "Track the direction of decisions in the DP table during computation",
            "Use a recursive algorithm without memoization",
            "Run a second pass over the input strings to find matching characters",
            "Sort the strings lexicographically before computing the LCS",
          ],
          correct: "Track the direction of decisions in the DP table during computation",
        },
      ];
  
      await Question.bulkCreate(lcsQuestions);
  
      res.status(201).json({ message: 'LCS questions inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to insert LCS questions.' });
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
