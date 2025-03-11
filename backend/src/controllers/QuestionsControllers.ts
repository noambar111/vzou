import { Request, Response } from 'express';
import Question from '../models/Question.js';
// Create a new question

export const bulkInsertQuestions = async (req: Request, res: Response) => {
  try {
    const questions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 0,
        question: "What is the worst-case time complexity of Selection Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n^2)",
        questionLevel: 0,
      },
      {
        topicId: 0,
        question: "What is the key operation performed by Selection Sort?",
        options: ["Finding the minimum value", "Swapping adjacent elements", "Merging subarrays", "Splitting the array in halves"],
        correct: "Finding the minimum value",
        questionLevel: 0,
      },
      {
        topicId: 0,
        question: "Which of these is not a characteristic of Selection Sort?",
        options: ["It is in-place", "It is stable", "It has O(n^2) time complexity", "It is not suitable for large datasets"],
        correct: "It is stable",
        questionLevel: 0,
      },
      {
        topicId: 0,
        question: "How many swaps are required in the worst case for a list of size n in Selection Sort?",
        options: ["n-1", "n", "n^2", "n/2"],
        correct: "n-1",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 0,
        question: "Given the array [8, 3, 5, 2], what will the array look like after the first iteration of Selection Sort?",
        options: ["[2, 3, 5, 8]", "[2, 8, 5, 3]", "[8, 3, 5, 2]", "[3, 8, 5, 2]"],
        correct: "[2, 8, 5, 3]",
        questionLevel: 1,
      },
      {
        topicId: 0,
        question: "In the array [6, 3, 8, 5, 2], how many iterations will Selection Sort take to fully sort the array?",
        options: ["4", "5", "6", "3"],
        correct: "4",
        questionLevel: 1,
      },
      {
        topicId: 0,
        question: "Perform Selection Sort on the array [9, 7, 5, 3]. What will the array look like after the second iteration?",
        options: ["[3, 5, 7, 9]", "[3, 7, 9, 5]", "[5, 7, 9, 3]", "[3, 5, 9, 7]"],
        correct: "[3, 5, 9, 7]",
        questionLevel: 1,
      },
      {
        topicId: 0,
        question: "In Selection Sort, what happens when the minimum value is already at its correct position?",
        options: [
          "No swap is performed",
          "The value is swapped with itself",
          "The algorithm skips the iteration",
          "An error occurs",
        ],
        correct: "No swap is performed",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 0,
        question: "Analyze the efficiency of Selection Sort. Why is it less efficient than Merge Sort for large datasets?",
        options: [
          "Selection Sort has a higher time complexity",
          "Selection Sort uses more memory",
          "Merge Sort can only sort small datasets",
          "Selection Sort is unstable",
        ],
        correct: "Selection Sort has a higher time complexity",
        questionLevel: 2,
      },
      {
        topicId: 0,
        question: "If Selection Sort is used to sort an array with 10 elements, and the first 5 elements are already sorted, how does this impact its efficiency?",
        options: [
          "No impact, it still performs O(n^2) operations",
          "It reduces the time complexity to O(n log n)",
          "It halves the number of comparisons",
          "It skips sorting for the sorted part",
        ],
        correct: "No impact, it still performs O(n^2) operations",
        questionLevel: 2,
      },
      {
        topicId: 0,
        question: "Given an array [8, 3, 7, 6], explain why Selection Sort performs fewer swaps than Bubble Sort to sort this array.",
        options: [
          "Selection Sort swaps only once per iteration",
          "Bubble Sort does not compare adjacent elements",
          "Selection Sort avoids unnecessary comparisons",
          "Bubble Sort performs swaps for every comparison",
        ],
        correct: "Selection Sort swaps only once per iteration",
        questionLevel: 2,
      },
    ];

    // Insert questions into the database
    await Question.bulkCreate(questions);

    res.status(201).json({ message: "Questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert questions." });
  }
};

export const bulkInsertBubbleSortQuestions = async (req: Request, res: Response) => {
  try {
    const bubbleSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 1, // Bubble Sort
        question: "What is the worst-case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n^2)",
        questionLevel: 0,
      },
      {
        topicId: 1, // Bubble Sort
        question: "What is the primary operation performed in Bubble Sort?",
        options: [
          "Comparing and swapping adjacent elements",
          "Merging subarrays",
          "Finding the minimum element",
          "Splitting the array into halves",
        ],
        correct: "Comparing and swapping adjacent elements",
        questionLevel: 0,
      },
      {
        topicId: 1, // Bubble Sort
        question: "What is the best-case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 1, // Bubble Sort
        question: "How many passes are required in Bubble Sort to guarantee sorting of an array with n elements?",
        options: ["n", "n-1", "n/2", "n^2"],
        correct: "n-1",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 1, // Bubble Sort
        question: "Using Bubble Sort, what will the array look like after the second pass on [4, 3, 1, 2]?",
        options: ["[3, 1, 2, 4]", "[1, 3, 2, 4]", "[3, 2, 1, 4]", "[4, 3, 1, 2]"],
        correct: "[1, 3, 2, 4]",
        questionLevel: 1,
      },
      {
        topicId: 1, // Bubble Sort
        question: "Using Bubble Sort, what will the array [6, 2, 4, 1] look like after the first pass?",
        options: ["[2, 6, 4, 1]", "[6, 2, 1, 4]", "[2, 4, 6, 1]", "[2, 6, 1, 4]"],
        correct: "[2, 6, 4, 1]",
        questionLevel: 1,
      },
      {
        topicId: 1, // Bubble Sort
        question: "Using Bubble Sort, how many swaps are needed to sort [3, 2, 4, 1]?",
        options: ["3", "4", "5", "6"],
        correct: "5",
        questionLevel: 1,
      },
      {
        topicId: 1, // Bubble Sort
        question: "After sorting the array [5, 1, 4, 2, 8] with Bubble Sort, how many passes are required?",
        options: ["3", "4", "5", "6"],
        correct: "4",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 1, // Bubble Sort
        question: "Why is Bubble Sort inefficient for large datasets?",
        options: [
          "It has a time complexity of O(n^2) in the worst case",
          "It uses extra memory for swaps",
          "It does not guarantee sorting",
          "It cannot handle negative numbers",
        ],
        correct: "It has a time complexity of O(n^2) in the worst case",
        questionLevel: 2,
      },
      {
        topicId: 1, // Bubble Sort
        question: "In Bubble Sort, why does the algorithm terminate early in the best case?",
        options: [
          "Because no swaps are needed in a sorted array",
          "Because it performs fewer comparisons",
          "Because it skips odd-numbered elements",
          "Because it uses a divide-and-conquer strategy",
        ],
        correct: "Because no swaps are needed in a sorted array",
        questionLevel: 2,
      },
      {
        topicId: 1, // Bubble Sort
        question: "Compare Bubble Sort and Selection Sort. Which of the following statements is true?",
        options: [
          "Bubble Sort performs more swaps but fewer comparisons",
          "Selection Sort is always faster than Bubble Sort",
          "Bubble Sort is more efficient for small datasets",
          "Both algorithms have the same time complexity",
        ],
        correct: "Both algorithms have the same time complexity",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(bubbleSortQuestions);

    res.status(201).json({ message: "Bubble Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Bubble Sort questions." });
  }
};

export const bulkInsertInsertionSortQuestions = async (req: Request, res: Response) => {
  try {
    const insertionSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 2, // Insertion Sort
        question: "What is the worst-case time complexity of Insertion Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n^2)",
        questionLevel: 0,
      },
      {
        topicId: 2, // Insertion Sort
        question: "What is the best-case time complexity of Insertion Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 2, // Insertion Sort
        question: "Which characteristic makes Insertion Sort suitable for small datasets?",
        options: [
          "It is simple and easy to implement",
          "It has a time complexity of O(n log n)",
          "It can sort datasets in parallel",
          "It avoids comparisons",
        ],
        correct: "It is simple and easy to implement",
        questionLevel: 0,
      },
      {
        topicId: 2, // Insertion Sort
        question: "How does Insertion Sort process elements in the array?",
        options: [
          "It inserts each element into its correct position in the sorted part",
          "It splits the array into halves and sorts recursively",
          "It compares and swaps adjacent elements",
          "It uses a heap to extract the smallest element",
        ],
        correct: "It inserts each element into its correct position in the sorted part",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 2, // Insertion Sort
        question: "Using Insertion Sort, how many comparisons are required to sort [8, 4, 6, 2] completely?",
        options: ["6", "5", "4", "7"],
        correct: "6",
        questionLevel: 1,
      },
      {
        topicId: 2, // Insertion Sort
        question: "What will the array [10, 8, 12, 7] look like after the first iteration of Insertion Sort?",
        options: ["[8, 10, 12, 7]", "[10, 8, 7, 12]", "[7, 10, 12, 8]", "[8, 12, 10, 7]"],
        correct: "[8, 10, 12, 7]",
        questionLevel: 1,
      },
      {
        topicId: 2, // Insertion Sort
        question: "How would Insertion Sort handle a nearly sorted array?",
        options: [
          "It performs very few comparisons and swaps",
          "It divides the array into halves and processes each half",
          "It performs the same number of operations as a random array",
          "It cannot handle nearly sorted arrays efficiently",
        ],
        correct: "It performs very few comparisons and swaps",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 2, // Insertion Sort
        question: "Why does Insertion Sort outperform Merge Sort for small datasets?",
        options: [
          "It has less overhead for small datasets",
          "It uses divide and conquer strategies",
          "It has a better worst-case complexity",
          "It is a parallel sorting algorithm",
        ],
        correct: "It has less overhead for small datasets",
        questionLevel: 2,
      },
      {
        topicId: 2, // Insertion Sort
        question: "Why is Insertion Sort considered stable, and how does it impact its usage?",
        options: [
          "It preserves the relative order of equal elements, making it suitable for sorting by secondary keys",
          "It has a time complexity of O(n log n) for sorted arrays",
          "It avoids comparisons, ensuring stability",
          "It uses extra memory to maintain stability",
        ],
        correct: "It preserves the relative order of equal elements, making it suitable for sorting by secondary keys",
        questionLevel: 2,
      },
      {
        topicId: 2, // Insertion Sort
        question: "In a dataset with 10 elements, 8 of which are already sorted, how efficient is Insertion Sort compared to Selection Sort?",
        options: [
          "More efficient, as it makes fewer comparisons",
          "Less efficient, as it still makes O(n^2) comparisons",
          "Equally efficient, as both algorithms handle such cases the same way",
          "Less efficient, as it performs redundant swaps",
        ],
        correct: "More efficient, as it makes fewer comparisons",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(insertionSortQuestions);

    res.status(201).json({ message: "Insertion Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Insertion Sort questions." });
  }
};
  

export const bulkInsertStackQuestions = async (req: Request, res: Response) => {
  try {
    const stackQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 3, // Stack
        question: "What is the primary operation used to remove an element from a stack?",
        options: ["Pop", "Push", "Peek", "Insert"],
        correct: "Pop",
        questionLevel: 0,
      },
      {
        topicId: 3, // Stack
        question: "What is the time complexity of the push operation in a stack implemented using an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: "O(1)",
        questionLevel: 0,
      },
      {
        topicId: 3, // Stack
        question: "Which of the following describes the order of operations in a stack?",
        options: ["Last In First Out", "First In First Out", "Random Access", "None of the above"],
        correct: "Last In First Out",
        questionLevel: 0,
      },
      {
        topicId: 3, // Stack
        question: "What is the operation used to view the top element of a stack without removing it?",
        options: ["Peek", "Pop", "Push", "Insert"],
        correct: "Peek",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 3, // Stack
        question: "Perform push(2), push(3), pop() on an empty stack. What remains in the stack?",
        options: ["3", "2", "Empty Stack"],
        correct: "2",
        questionLevel: 1,
      },
      {
        topicId: 3, // Stack
        question: "Perform the operations: push(5), push(7), pop(), push(8) on an empty stack. What is the top element?",
        options: ["5", "7", "8", "Empty Stack"],
        correct: "8",
        questionLevel: 1,
      },
      {
        topicId: 3, // Stack
        question: "Given the stack operations: push(1), push(2), pop(), push(3), pop(). What remains in the stack?",
        options: ["1", "2", "3", "Empty Stack"],
        correct: "1",
        questionLevel: 1,
      },
      {
        topicId: 3, // Stack
        question: "You have an empty stack. Perform push(4), push(6), push(8), pop(), pop(). What is the last element left in the stack?",
        options: ["4", "6", "8", "Empty Stack"],
        correct: "4",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 3, // Stack
        question: "Why is a stack considered useful for evaluating expressions in postfix notation?",
        options: [
          "It allows efficient storage and retrieval of operands",
          "It supports random access to operands",
          "It uses less memory compared to arrays",
          "It can sort the operands automatically",
        ],
        correct: "It allows efficient storage and retrieval of operands",
        questionLevel: 2,
      },
      {
        topicId: 3, // Stack
        question: "Which of the following applications of stacks require backtracking?",
        options: [
          "Parsing HTML tags",
          "Sorting elements",
          "Binary Search",
          "Heap construction",
        ],
        correct: "Parsing HTML tags",
        questionLevel: 2,
      },
      {
        topicId: 3, // Stack
        question: "A stack is implemented using a linked list. What is the time complexity of the pop operation, and why?",
        options: [
          "O(1), because the operation only affects the top node",
          "O(n), because the entire list is traversed",
          "O(log n), because the list is divided recursively",
          "O(n^2), because it involves multiple traversals",
        ],
        correct: "O(1), because the operation only affects the top node",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(stackQuestions);

    res.status(201).json({ message: "Stack questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert stack questions." });
  }
};
  
export const bulkInsertQueueQuestions = async (req: Request, res: Response) => {
  try {
    const queueQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 4, // Queue
        question: "What is the primary operation used to remove an element from a queue?",
        options: ["Dequeue", "Enqueue", "Peek", "Insert"],
        correct: "Dequeue",
        questionLevel: 0,
      },
      {
        topicId: 4, // Queue
        question: "What is the order of operations in a queue?",
        options: ["First In First Out", "Last In First Out", "Random Access", "None of the above"],
        correct: "First In First Out",
        questionLevel: 0,
      },
      {
        topicId: 4, // Queue
        question: "What is the time complexity of the enqueue operation in a queue implemented using a linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: "O(1)",
        questionLevel: 0,
      },
      {
        topicId: 4, // Queue
        question: "What is the operation used to view the front element of a queue without removing it?",
        options: ["Peek", "Dequeue", "Enqueue", "Insert"],
        correct: "Peek",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 4, // Queue
        question: "Perform enqueue(2), enqueue(4), dequeue() on an empty queue. What remains in the queue?",
        options: ["4", "2", "Empty Queue"],
        correct: "4",
        questionLevel: 1,
      },
      {
        topicId: 4, // Queue
        question: "If you enqueue(3), enqueue(6), enqueue(9), and dequeue() twice on an empty queue, what is the front element?",
        options: ["6", "9", "3", "Empty Queue"],
        correct: "9",
        questionLevel: 1,
      },
      {
        topicId: 4, // Queue
        question: "Given the queue operations: enqueue(7), enqueue(5), dequeue(), enqueue(8), what are the elements in the queue from front to rear?",
        options: ["[5, 8]", "[7, 5, 8]", "[8, 5]", "[7, 8]"],
        correct: "[5, 8]",
        questionLevel: 1,
      },
      {
        topicId: 4, // Queue
        question: "If the queue contains [10, 20, 30] (front to rear) and you perform enqueue(40), dequeue(), what is the front element now?",
        options: ["20", "30", "40", "10"],
        correct: "20",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 4, // Queue
        question: "Why is a queue preferred over a stack for scheduling tasks in an operating system?",
        options: [
          "Queues process tasks in the order they arrive (FIFO)",
          "Queues require less memory than stacks",
          "Queues have a lower time complexity",
          "Queues can handle recursive tasks",
        ],
        correct: "Queues process tasks in the order they arrive (FIFO)",
        questionLevel: 2,
      },
      {
        topicId: 4, // Queue
        question: "Which of the following applications of queues involve handling real-time data?",
        options: [
          "Task scheduling",
          "Binary search",
          "Depth-first traversal",
          "Matrix multiplication",
        ],
        correct: "Task scheduling",
        questionLevel: 2,
      },
      {
        topicId: 4, // Queue
        question: "How does implementing a queue with a circular buffer improve its efficiency?",
        options: [
          "It reuses empty spaces in the buffer",
          "It avoids overflows by resizing the buffer automatically",
          "It allows parallel processing of elements",
          "It reduces the time complexity of enqueue and dequeue",
        ],
        correct: "It reuses empty spaces in the buffer",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(queueQuestions);

    res.status(201).json({ message: "Queue questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert queue questions." });
  }
}; 
  
export const bulkInsertLinkedListQuestions = async (req: Request, res: Response) => {
  try {
    const linkedListQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 5, // Linked List
        question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: "O(1)",
        questionLevel: 0,
      },
      {
        topicId: 5, // Linked List
        question: "What is the time complexity of finding an element in an unsorted singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 5, // Linked List
        question: "What is the main difference between a singly linked list and a doubly linked list?",
        options: [
          "A singly linked list has only forward pointers, while a doubly linked list has both forward and backward pointers",
          "A singly linked list is always sorted",
          "A doubly linked list has a circular structure",
          "A singly linked list requires more memory",
        ],
        correct: "A singly linked list has only forward pointers, while a doubly linked list has both forward and backward pointers",
        questionLevel: 0,
      },
      {
        topicId: 5, // Linked List
        question: "What does the 'next' pointer in a singly linked list node represent?",
        options: ["The address of the next node", "The value of the next node", "The previous node", "The head of the list"],
        correct: "The address of the next node",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 5, // Linked List
        question: "Insert 3 at the beginning of the linked list: 5 -> 7 -> NULL. What is the new list?",
        options: ["3 -> 5 -> 7 -> NULL", "5 -> 3 -> 7 -> NULL", "5 -> 7 -> 3 -> NULL"],
        correct: "3 -> 5 -> 7 -> NULL",
        questionLevel: 1,
      },
      {
        topicId: 5, // Linked List
        question: "Delete the first node from the linked list: 2 -> 4 -> 6 -> NULL. What is the new list?",
        options: ["4 -> 6 -> NULL", "2 -> 6 -> NULL", "2 -> 4 -> NULL", "NULL"],
        correct: "4 -> 6 -> NULL",
        questionLevel: 1,
      },
      {
        topicId: 5, // Linked List
        question: "Insert 10 after the node with value 7 in the linked list: 5 -> 7 -> 9 -> NULL. What is the new list?",
        options: ["5 -> 7 -> 10 -> 9 -> NULL", "5 -> 10 -> 7 -> 9 -> NULL", "5 -> 7 -> 9 -> 10 -> NULL"],
        correct: "5 -> 7 -> 10 -> 9 -> NULL",
        questionLevel: 1,
      },
      {
        topicId: 5, // Linked List
        question: "Given the linked list 1 -> 2 -> 3 -> NULL, reverse the list. What is the result?",
        options: ["3 -> 2 -> 1 -> NULL", "1 -> 3 -> 2 -> NULL", "2 -> 1 -> 3 -> NULL"],
        correct: "3 -> 2 -> 1 -> NULL",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 5, // Linked List
        question: "Why is a linked list preferred over an array for implementing dynamic data structures?",
        options: [
          "It allows efficient insertion and deletion without resizing",
          "It has faster access times",
          "It uses less memory",
          "It avoids memory fragmentation",
        ],
        correct: "It allows efficient insertion and deletion without resizing",
        questionLevel: 2,
      },
      {
        topicId: 5, // Linked List
        question: "How does a circular linked list improve the efficiency of certain operations compared to a singly linked list?",
        options: [
          "It eliminates the need to traverse to the end of the list",
          "It reduces the time complexity of insertion",
          "It ensures the list is always sorted",
          "It avoids duplicate nodes",
        ],
        correct: "It eliminates the need to traverse to the end of the list",
        questionLevel: 2,
      },
      {
        topicId: 5, // Linked List
        question: "In a doubly linked list, what is the advantage of having backward pointers?",
        options: [
          "It allows traversal in both directions",
          "It reduces memory usage",
          "It improves the time complexity of searching",
          "It avoids null pointer exceptions",
        ],
        correct: "It allows traversal in both directions",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(linkedListQuestions);

    res.status(201).json({ message: "Linked List questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert linked list questions." });
  }
};

export const bulkInsertCountingSortQuestions = async (req: Request, res: Response) => {
  try {
    const countingSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 6, // Counting Sort
        question: "What is the time complexity of Counting Sort in the best case?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 6, // Counting Sort
        question: "What is the main limitation of Counting Sort?",
        options: [
          "It requires the range of input values to be small",
          "It uses a divide-and-conquer approach",
          "It cannot sort arrays with duplicate values",
          "It only works for floating-point numbers",
        ],
        correct: "It requires the range of input values to be small",
        questionLevel: 0,
      },
      {
        topicId: 6, // Counting Sort
        question: "What type of algorithm is Counting Sort?",
        options: ["Comparison-based", "Non-comparison-based", "Recursive", "Divide and conquer"],
        correct: "Non-comparison-based",
        questionLevel: 0,
      },
      {
        topicId: 6, // Counting Sort
        question: "Is Counting Sort stable, and why?",
        options: [
          "Yes, because it preserves the relative order of elements with the same key",
          "No, because it rearranges elements randomly",
          "Yes, because it uses a heap for sorting",
          "No, because it modifies the input array in-place",
        ],
        correct: "Yes, because it preserves the relative order of elements with the same key",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 6, // Counting Sort
        question: "You are tasked with sorting the array [7, 5, 3, 7, 1] using Counting Sort. What does the counting array look like after counting all occurrences of the elements?",
        options: [
          "[0, 1, 0, 1, 0, 1, 0, 2]",
          "[1, 1, 1, 1, 1, 1, 1, 1]",
          "[1, 0, 1, 0, 1, 1, 0, 2]",
          "[0, 1, 1, 0, 1, 1, 0, 2]",
        ],
        correct: "[0, 1, 0, 1, 0, 1, 0, 2]",
        questionLevel: 1,
      },
      {
        topicId: 6, // Counting Sort
        question: "Given the input array [9, 8, 7, 6, 5], use Counting Sort. What will the array look like after cumulative sums are calculated in the counting array?",
        options: [
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
          "[0, 0, 0, 0, 0, 1, 2, 3, 4, 5]",
          "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
          "[0, 1, 1, 1, 2, 3, 4, 5, 6, 7]",
        ],
        correct: "[0, 0, 0, 0, 0, 1, 2, 3, 4, 5]",
        questionLevel: 1,
      },
      {
        topicId: 6, // Counting Sort
        question: "Sort the array [4, 2, 3, 4, 1] using Counting Sort. What will be the array after placing all elements in their sorted positions?",
        options: ["[1, 2, 3, 4, 4]", "[4, 4, 3, 2, 1]", "[1, 3, 2, 4, 4]", "[1, 2, 4, 3, 4]"],
        correct: "[1, 2, 3, 4, 4]",
        questionLevel: 1,
      },
      {
        topicId: 6, // Counting Sort
        question: "Your input array is [1, 2, 2, 1]. Using Counting Sort, what will be the sorted output if the counting array is adjusted using cumulative sums?",
        options: ["[1, 1, 2, 2]", "[2, 2, 1, 1]", "[1, 2, 1, 2]", "[2, 1, 2, 1]"],
        correct: "[1, 1, 2, 2]",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 6, // Counting Sort
        question: "Why is Counting Sort not suitable for sorting the array [-2, -1, 0, 1, 2] without modifications?",
        options: [
          "It cannot handle negative numbers without offsetting",
          "It requires floating-point precision",
          "It can only sort arrays of even length",
          "It doesn't work for ranges below zero",
        ],
        correct: "It cannot handle negative numbers without offsetting",
        questionLevel: 2,
      },
      {
        topicId: 6, // Counting Sort
        question: "How does Counting Sort achieve stability during sorting?",
        options: [
          "By placing elements in sorted order based on their cumulative counts",
          "By rearranging elements randomly",
          "By using additional memory to store temporary arrays",
          "By performing in-place swaps",
        ],
        correct: "By placing elements in sorted order based on their cumulative counts",
        questionLevel: 2,
      },
      {
        topicId: 6, // Counting Sort
        question: "Compare Counting Sort to Quick Sort. Why is Counting Sort more efficient for sorting small-range data?",
        options: [
          "Counting Sort runs in O(n) time for small-range data",
          "Quick Sort is not stable for such data",
          "Counting Sort uses divide and conquer strategies",
          "Counting Sort requires no additional memory",
        ],
        correct: "Counting Sort runs in O(n) time for small-range data",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(countingSortQuestions);

    res.status(201).json({ message: "Counting Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Counting Sort questions." });
  }
};  
    
export const bulkInsertRadixSortQuestions = async (req: Request, res: Response) => {
  try {
    const radixSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 7, // Radix Sort
        question: "What is the time complexity of Radix Sort for n elements with d digits?",
        options: ["O(n)", "O(n + d)", "O(n * d)", "O(n^2)"],
        correct: "O(n * d)",
        questionLevel: 0,
      },
      {
        topicId: 7, // Radix Sort
        question: "What is the main characteristic of Radix Sort?",
        options: [
          "It sorts numbers digit by digit",
          "It uses divide and conquer",
          "It sorts elements by comparing them",
          "It works only for floating-point numbers",
        ],
        correct: "It sorts numbers digit by digit",
        questionLevel: 0,
      },
      {
        topicId: 7, // Radix Sort
        question: "Is Radix Sort stable, and why?",
        options: [
          "Yes, because it preserves the relative order of elements with the same key",
          "No, because it modifies the input array in-place",
          "Yes, because it performs swaps for adjacent elements",
          "No, because it rearranges elements randomly",
        ],
        correct: "Yes, because it preserves the relative order of elements with the same key",
        questionLevel: 0,
      },
      {
        topicId: 7, // Radix Sort
        question: "What type of sorting algorithm is Radix Sort?",
        options: ["Comparison-based", "Non-comparison-based", "Recursive", "Divide and conquer"],
        correct: "Non-comparison-based",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
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
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 7, // Radix Sort
        question: "Using Radix Sort, the array [5, 12, 300, 3, 45] is sorted. How many passes are required to fully sort the array?",
        options: ["1", "2", "3", "4"],
        correct: "3",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 7, // Radix Sort
        question: "What is the main limitation of Radix Sort?",
        options: [
          "It requires additional memory for auxiliary arrays",
          "It cannot handle floating-point numbers",
          "It cannot handle large datasets",
          "It works only for strings",
        ],
        correct: "It requires additional memory for auxiliary arrays",
        questionLevel: 2,
      },
      {
        topicId: 7, // Radix Sort
        question: "Compare Radix Sort to Counting Sort. Why does Radix Sort perform better for larger datasets?",
        options: [
          "It divides the sorting process into smaller, manageable parts",
          "It has a better overall time complexity",
          "It uses fewer auxiliary arrays",
          "It eliminates the need for cumulative sums",
        ],
        correct: "It divides the sorting process into smaller, manageable parts",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(radixSortQuestions);

    res.status(201).json({ message: "Radix Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Radix Sort questions." });
  }
};  
  
export const bulkInsertBucketSortQuestions = async (req: Request, res: Response) => {
  try {
    const bucketSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 8, // Bucket Sort
        question: "What is the time complexity of distributing elements into buckets in Bucket Sort?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 8, // Bucket Sort
        question: "What type of sorting algorithm is Bucket Sort?",
        options: ["Comparison-based", "Non-comparison-based", "Recursive", "Divide and conquer"],
        correct: "Non-comparison-based",
        questionLevel: 0,
      },
      {
        topicId: 8, // Bucket Sort
        question: "Why is Bucket Sort considered stable?",
        options: [
          "It preserves the relative order of elements within each bucket",
          "It rearranges elements randomly",
          "It avoids swapping elements",
          "It uses a single bucket for sorting",
        ],
        correct: "It preserves the relative order of elements within each bucket",
        questionLevel: 0,
      },
      {
        topicId: 8, // Bucket Sort
        question: "What is the key characteristic of Bucket Sort that makes it efficient for certain types of data?",
        options: [
          "It groups elements into buckets that are sorted individually",
          "It uses divide and conquer strategies",
          "It avoids the use of auxiliary memory",
          "It works only for integers",
        ],
        correct: "It groups elements into buckets that are sorted individually",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 8, // Bucket Sort
        question: "You are given the array [0.89, 0.23, 0.75, 0.41, 0.12]. After placing elements into buckets (assuming 5 buckets for range [0,1]), which bucket will contain 0.75?",
        options: ["Bucket 3", "Bucket 4", "Bucket 2", "Bucket 5"],
        correct: "Bucket 4",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 8, // Bucket Sort
        question: "An array [78, 25, 45, 98, 33] is sorted using Bucket Sort with bucket intervals of size 10. Which bucket will 45 be placed in?",
        options: ["Bucket 4", "Bucket 3", "Bucket 5", "Bucket 6"],
        correct: "Bucket 5",
        questionLevel: 1,
      },
      {
        topicId: 8, // Bucket Sort
        question: "When sorting the array [7.1, 4.2, 5.3, 6.4, 3.5] using Bucket Sort with 4 buckets, which sorting algorithm would you use to sort elements within each bucket for maximum efficiency?",
        options: ["Quick Sort", "Insertion Sort", "Bubble Sort", "Merge Sort"],
        correct: "Insertion Sort",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 8, // Bucket Sort
        question: "Why is Bucket Sort generally more efficient for floating-point numbers uniformly distributed over a range?",
        options: [
          "It groups elements into buckets that are sorted internally",
          "It avoids sorting by using buckets",
          "It maps elements directly into sorted positions",
          "It reduces the number of comparisons required",
        ],
        correct: "It groups elements into buckets that are sorted internally",
        questionLevel: 2,
      },
      {
        topicId: 8, // Bucket Sort
        question: "What is the key limitation of Bucket Sort when applied to large datasets with non-uniform distribution?",
        options: [
          "Buckets may become imbalanced and require extra sorting time",
          "It requires too much memory",
          "It cannot handle negative numbers",
          "It cannot handle datasets with duplicate values",
        ],
        correct: "Buckets may become imbalanced and require extra sorting time",
        questionLevel: 2,
      },
      {
        topicId: 8, // Bucket Sort
        question: "Given the array [0.78, 0.55, 0.62, 0.12, 0.19], how can you determine the optimal number of buckets for efficient sorting?",
        options: [
          "It depends on the distribution and range of the input data",
          "Set the number of buckets equal to the size of the array",
          "Set the number of buckets equal to the range of the array",
          "Use a fixed number like 10 buckets regardless of input",
        ],
        correct: "It depends on the distribution and range of the input data",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(bucketSortQuestions);

    res.status(201).json({ message: "Bucket Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Bucket Sort questions." });
  }
};
 
export const bulkInsertMergeSortQuestions = async (req: Request, res: Response) => {
  try {
    const mergeSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 9, // Merge Sort
        question: "What is the time complexity of Merge Sort in the best case?",
        options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
        correct: "O(n log n)",
        questionLevel: 0,
      },
      {
        topicId: 9, // Merge Sort
        question: "What is the main characteristic of Merge Sort?",
        options: [
          "It uses a divide-and-conquer approach",
          "It compares elements directly for sorting",
          "It is an in-place sorting algorithm",
          "It has a worst-case complexity of O(n^2)",
        ],
        correct: "It uses a divide-and-conquer approach",
        questionLevel: 0,
      },
      {
        topicId: 9, // Merge Sort
        question: "Why does Merge Sort require auxiliary space?",
        options: [
          "To store temporary arrays during the merge step",
          "To handle recursive calls",
          "To manage memory fragmentation",
          "To optimize time complexity",
        ],
        correct: "To store temporary arrays during the merge step",
        questionLevel: 0,
      },
      {
        topicId: 9, // Merge Sort
        question: "Is Merge Sort stable, and why?",
        options: [
          "Yes, because it preserves the relative order of elements with equal keys",
          "No, because it swaps elements randomly",
          "Yes, because it compares elements directly",
          "No, because it requires extra memory",
        ],
        correct: "Yes, because it preserves the relative order of elements with equal keys",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
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
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 9, // Merge Sort
        question: "Given an array of size 100, what is the total number of merge operations performed in Merge Sort?",
        options: ["99", "100", "50", "197"],
        correct: "99",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 9, // Merge Sort
        question: "Compare Merge Sort and QuickSort. Why is Merge Sort preferred for linked lists?",
        options: [
          "Merge Sort doesn’t require random access and can work with sequential data",
          "Merge Sort uses less memory for large datasets",
          "QuickSort is unstable and cannot work with linked lists",
          "Merge Sort is always faster than QuickSort",
        ],
        correct: "Merge Sort doesn’t require random access and can work with sequential data",
        questionLevel: 2,
      },
      {
        topicId: 9, // Merge Sort
        question: "How does the auxiliary memory requirement impact the performance of Merge Sort on large datasets?",
        options: [
          "It increases the memory overhead, making it less suitable for limited memory environments",
          "It reduces the time complexity significantly",
          "It allows in-place sorting of large datasets",
          "It makes the algorithm unstable for duplicate elements",
        ],
        correct: "It increases the memory overhead, making it less suitable for limited memory environments",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(mergeSortQuestions);

    res.status(201).json({ message: "Merge Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Merge Sort questions." });
  }
};
  
  
export const bulkInsertQuickSortQuestions = async (req: Request, res: Response) => {
  try {
    const quickSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 10, // Quick Sort
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
        correct: "O(n^2)",
        questionLevel: 0,
      },
      {
        topicId: 10, // Quick Sort
        question: "What is the key operation performed during the partitioning step of Quick Sort?",
        options: [
          "Rearranging elements around the pivot",
          "Merging subarrays",
          "Swapping adjacent elements",
          "Inserting elements into their final positions",
        ],
        correct: "Rearranging elements around the pivot",
        questionLevel: 0,
      },
      {
        topicId: 10, // Quick Sort
        question: "What type of sorting algorithm is Quick Sort?",
        options: ["Comparison-based", "Non-comparison-based", "Divide and conquer", "Recursive"],
        correct: "Divide and conquer",
        questionLevel: 0,
      },
      {
        topicId: 10, // Quick Sort
        question: "Is Quick Sort stable, and why?",
        options: [
          "No, because it rearranges elements during partitioning",
          "Yes, because it preserves the relative order of duplicate elements",
          "No, because it uses auxiliary memory",
          "Yes, because it uses divide and conquer",
        ],
        correct: "No, because it rearranges elements during partitioning",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 10, // Quick Sort
        question: "Given the array [10, 7, 8, 9, 1, 5], and choosing 5 as the pivot, how many swaps are required to partition the array around the pivot?",
        options: ["3", "2", "4", "1"],
        correct: "3",
        questionLevel: 1,
      },
      {
        topicId: 10, // Quick Sort
        question: "For the array [9, 4, 7, 6, 3], Quick Sort is used with 6 as the pivot. After partitioning, which element will be at its final position?",
        options: ["6", "4", "3", "7"],
        correct: "6",
        questionLevel: 1,
      },
      {
        topicId: 10, // Quick Sort
        question: "You are sorting an array of size 8 using Quick Sort, and the pivot is chosen randomly. What is the probability that the pivot splits the array into two subarrays of equal size?",
        options: ["1/8", "1/4", "1/7", "1/2"],
        correct: "1/7",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 10, // Quick Sort
        question: "Why is Quick Sort generally faster than Merge Sort for in-place sorting?",
        options: [
          "Quick Sort has lower memory overhead",
          "Quick Sort is stable for duplicate elements",
          "Merge Sort cannot handle large datasets",
          "Merge Sort has higher recursion depth",
        ],
        correct: "Quick Sort has lower memory overhead",
        questionLevel: 2,
      },
      {
        topicId: 10, // Quick Sort
        question: "What is the main advantage of using a randomized pivot in Quick Sort?",
        options: [
          "It reduces the likelihood of worst-case time complexity",
          "It guarantees stable sorting",
          "It minimizes the number of recursive calls",
          "It eliminates the need for partitioning",
        ],
        correct: "It reduces the likelihood of worst-case time complexity",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(quickSortQuestions);

    res.status(201).json({ message: "Quick Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Quick Sort questions." });
  }
};  

export const bulkInsertBinarySearchTreeQuestions = async (req: Request, res: Response) => {
  try {
    const bstQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 11, // Binary Search Tree
        question: "What is the property of a Binary Search Tree?",
        options: [
          "Left child is less than the parent, right child is greater",
          "Left child is greater than the parent, right child is less",
          "All children are smaller than the root",
          "All children are larger than the root",
        ],
        correct: "Left child is less than the parent, right child is greater",
        questionLevel: 0,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "What is the time complexity of searching for an element in a balanced Binary Search Tree?",
        options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
        correct: "O(log n)",
        questionLevel: 0,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "What is the worst-case height of a Binary Search Tree with n elements?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correct: "O(n)",
        questionLevel: 0,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "Which traversal of a BST produces a sorted list of elements?",
        options: ["In-order traversal", "Pre-order traversal", "Post-order traversal", "Level-order traversal"],
        correct: "In-order traversal",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "What is the height of a BST created from the elements [10, 20, 30, 40, 50] if inserted in ascending order?",
        options: ["4", "3", "5", "2"],
        correct: "4",
        questionLevel: 1,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "Given a BST, what is the minimum number of nodes that need to be checked to find whether 35 is present in the tree with root 50 and child nodes [30, 70]?",
        options: ["3", "2", "4", "1"],
        correct: "3",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "What is the main advantage of using a self-balancing BST like an AVL tree over a regular BST?",
        options: [
          "It maintains O(log n) height, ensuring efficient operations",
          "It eliminates the need for traversal",
          "It reduces memory usage",
          "It allows duplicate keys",
        ],
        correct: "It maintains O(log n) height, ensuring efficient operations",
        questionLevel: 2,
      },
      {
        topicId: 11, // Binary Search Tree
        question: "How does balancing a BST affect its performance for search, insertion, and deletion operations?",
        options: [
          "It ensures the time complexity remains O(log n)",
          "It increases the time complexity for insertion to O(n^2)",
          "It decreases memory usage for the tree",
          "It has no impact on the performance",
        ],
        correct: "It ensures the time complexity remains O(log n)",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(bstQuestions);

    res.status(201).json({ message: "Binary Search Tree questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Binary Search Tree questions." });
  }
};  


export const bulkInsertHashTableQuestions = async (req: Request, res: Response) => {
  try {
    const hashTableQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 12, // Hash Table
        question: "What is the primary purpose of a hash function in a hash table?",
        options: [
          "To map keys to indices in the hash table",
          "To sort the elements in the hash table",
          "To ensure the hash table remains balanced",
          "To handle duplicate keys efficiently",
        ],
        correct: "To map keys to indices in the hash table",
        questionLevel: 0,
      },
      {
        topicId: 12, // Hash Table
        question: "What is the time complexity of inserting an element in a hash table without collisions?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: "O(1)",
        questionLevel: 0,
      },
      {
        topicId: 12, // Hash Table
        question: "What is the typical way to handle collisions in a hash table?",
        options: [
          "Chaining or open addressing",
          "Sorting the elements",
          "Balancing the hash table",
          "Using binary search",
        ],
        correct: "Chaining or open addressing",
        questionLevel: 0,
      },
      {
        topicId: 12, // Hash Table
        question: "What is the load factor in the context of a hash table?",
        options: [
          "The ratio of the number of elements to the size of the table",
          "The number of collisions in the hash table",
          "The size of each bucket in the hash table",
          "The time taken to perform a hash function",
        ],
        correct: "The ratio of the number of elements to the size of the table",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 12, // Hash Table
        question: "A hash table uses open addressing with linear probing. After inserting [12, 22, 32] into a table of size 10, what index does 32 occupy?",
        options: ["2", "3", "4", "1"],
        correct: "4",
        questionLevel: 1,
      },
      {
        topicId: 12, // Hash Table
        question: "What is the time complexity of searching for an element in a hash table with separate chaining, assuming all elements are in the same bucket?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: "O(n)",
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 12, // Hash Table
        question: "Why is double hashing considered more efficient than linear probing for collision resolution?",
        options: [
          "It reduces clustering by using two hash functions",
          "It uses less memory compared to linear probing",
          "It eliminates collisions entirely",
          "It allows duplicate keys in the hash table",
        ],
        correct: "It reduces clustering by using two hash functions",
        questionLevel: 2,
      },
      {
        topicId: 12, // Hash Table
        question: "How does resizing a hash table affect its performance during high load factors?",
        options: [
          "It redistributes elements to reduce collisions",
          "It increases the load factor to maximize space usage",
          "It reduces the size of the hash table",
          "It eliminates the need for rehashing",
        ],
        correct: "It redistributes elements to reduce collisions",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(hashTableQuestions);

    res.status(201).json({ message: "Hash Table questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Hash Table questions." });
  }
};

  
export const bulkInsertBFSQuestions = async (req: Request, res: Response) => {
  try {
    const bfsQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 13, // BFS
        question: "What data structure is primarily used in BFS to manage the traversal process?",
        options: ["Queue", "Stack", "Priority Queue", "Set"],
        correct: "Queue",
        questionLevel: 0,
      },
      {
        topicId: 13, // BFS
        question: "What is the time complexity of BFS in terms of V (vertices) and E (edges)?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correct: "O(V + E)",
        questionLevel: 0,
      },
      {
        topicId: 13, // BFS
        question: "In which order does BFS traverse nodes in a graph?",
        options: [
          "Level by level from the starting node",
          "Depth-first from the starting node",
          "Randomly based on edge weights",
          "In lexicographical order",
        ],
        correct: "Level by level from the starting node",
        questionLevel: 0,
      },
      {
        topicId: 13, // BFS
        question: "Which type of graph is BFS guaranteed to find the shortest path in?",
        options: [
          "Unweighted graphs",
          "Weighted graphs with uniform weights",
          "Weighted graphs with non-uniform weights",
          "Directed Acyclic Graphs (DAGs)",
        ],
        correct: "Unweighted graphs",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 13, // BFS
        question: "A BFS traversal is performed on a graph with nodes [A, B, C, D, E] and edges [(A, B), (A, C), (B, D), (D, E)]. If node A is the starting node, how many levels will the traversal have?",
        options: ["2", "3", "4", "5"],
        correct: "3",
        questionLevel: 1,
      },
      {
        topicId: 13, // BFS
        question: "You perform BFS on a graph with 6 nodes and 7 edges. The graph contains a cycle. Which data structure ensures no node is visited more than once?",
        options: ["Queue", "Set or Hash Table", "Stack", "Priority Queue"],
        correct: "Set or Hash Table",
        questionLevel: 1,
      },
      {
        topicId: 13, // BFS
        question: "You need to find the shortest path in an unweighted graph using BFS. If the graph has 1,000 nodes and is connected, what is the worst-case time complexity?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correct: "O(V + E)",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 13, // BFS
        question: "How does BFS differ from DFS in terms of space complexity for dense graphs?",
        options: [
          "BFS requires more space because it uses a queue to store all neighbors",
          "BFS requires less space because it only uses a stack",
          "DFS requires more space because it uses a stack to store all recursive calls",
          "DFS requires less space because it only uses a queue",
        ],
        correct: "BFS requires more space because it uses a queue to store all neighbors",
        questionLevel: 2,
      },
      {
        topicId: 13, // BFS
        question: "What is the primary limitation of BFS when applied to very large or infinite graphs?",
        options: [
          "It consumes significant memory due to the queue",
          "It fails to visit all nodes",
          "It prioritizes depth over breadth",
          "It requires edge weights to function correctly",
        ],
        correct: "It consumes significant memory due to the queue",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(bfsQuestions);

    res.status(201).json({ message: "BFS questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert BFS questions." });
  }
};  
  
  
export const bulkInsertDFSQuestions = async (req: Request, res: Response) => {
  try {
    const dfsQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 14, // DFS
        question: "What data structure is typically used to implement DFS iteratively?",
        options: ["Stack", "Queue", "Priority Queue", "Set"],
        correct: "Stack",
        questionLevel: 0,
      },
      {
        topicId: 14, // DFS
        question: "What is the time complexity of DFS for a graph with V vertices and E edges?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correct: "O(V + E)",
        questionLevel: 0,
      },
      {
        topicId: 14, // DFS
        question: "In which order does DFS traverse nodes in a graph?",
        options: [
          "Depth-first from the starting node",
          "Level by level from the starting node",
          "Based on edge weights",
          "In lexicographical order",
        ],
        correct: "Depth-first from the starting node",
        questionLevel: 0,
      },
      {
        topicId: 14, // DFS
        question: "What type of edge in DFS indicates a cycle in a directed graph?",
        options: ["Back edge", "Tree edge", "Forward edge", "Cross edge"],
        correct: "Back edge",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 14, // DFS
        question: "Given a directed graph: A -> [B, C], B -> [D, E], C -> [F], F -> [C], perform a DFS starting from A. Which of the following nodes is part of a strongly connected component?",
        options: ["C", "D", "E", "A"],
        correct: "C",
        questionLevel: 1,
      },
      {
        topicId: 14, // DFS
        question: "A graph with 8 nodes and 12 edges is traversed using DFS. If all edges are traversed once, how many recursive calls will DFS make in the worst case?",
        options: ["8", "12", "16", "20"],
        correct: "8",
        questionLevel: 1,
      },
      {
        topicId: 14, // DFS
        question: "In a graph with nodes [A, B, C, D, E] and edges [(A, B), (B, C), (C, D), (D, B), (D, E)], a DFS starts at node A. What type of edge is (D, B)?",
        options: ["Tree edge", "Back edge", "Forward edge", "Cross edge"],
        correct: "Back edge",
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 14, // DFS
        question: "Given a graph with 10 nodes and 15 edges, DFS is used to detect cycles. How many back edges must be present for the graph to contain exactly two cycles?",
        options: ["2", "1", "3", "4"],
        correct: "2",
        questionLevel: 2,
      },
      {
        topicId: 14, // DFS
        question: "Why is DFS preferred over BFS for solving problems like detecting cycles in graphs?",
        options: [
          "DFS explores all paths from a node before backtracking, making cycle detection efficient",
          "DFS uses less memory than BFS",
          "DFS always processes nodes in topological order",
          "DFS avoids visiting the same node twice",
        ],
        correct: "DFS explores all paths from a node before backtracking, making cycle detection efficient",
        questionLevel: 2,
      },
      {
        topicId: 14, // DFS
        question: "How does DFS help in finding strongly connected components in a directed graph?",
        options: [
          "It identifies components by performing two passes of DFS",
          "It uses a priority queue to identify components",
          "It traverses nodes level by level",
          "It avoids processing cross edges",
        ],
        correct: "It identifies components by performing two passes of DFS",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(dfsQuestions);

    res.status(201).json({ message: "DFS questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert DFS questions." });
  }
};  

export const bulkInsertHeapQuestions = async (req: Request, res: Response) => {
  try {
    const heapQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 15, // Heap
        question: "What is the time complexity of inserting an element into a heap?",
        options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
        correct: "O(log n)",
        questionLevel: 0,
      },
      {
        topicId: 15, // Heap
        question: "What is the property of a max heap?",
        options: [
          "The parent node is always greater than or equal to its children",
          "The parent node is always less than or equal to its children",
          "The root node is always the smallest element",
          "The heap is always balanced and sorted",
        ],
        correct: "The parent node is always greater than or equal to its children",
        questionLevel: 0,
      },
      {
        topicId: 15, // Heap
        question: "What is the height of a heap with 31 elements?",
        options: ["5", "6", "4", "31"],
        correct: "5",
        questionLevel: 0,
      },
      {
        topicId: 15, // Heap
        question: "What is the primary use of a heap in computer science?",
        options: [
          "To implement priority queues",
          "To sort elements in O(n^2) time",
          "To search for elements in O(1) time",
          "To implement hash tables",
        ],
        correct: "To implement priority queues",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 15, // Heap
        question: "A max heap contains 15 elements. How many leaf nodes are present?",
        options: ["7", "8", "15", "4"],
        correct: "8",
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 15, // Heap
        question: "What is the main advantage of a heap over other data structures when implementing a priority queue?",
        options: [
          "It allows efficient insertion and extraction of the maximum or minimum element",
          "It uses less memory compared to arrays",
          "It allows constant time access to all elements",
          "It supports duplicate elements efficiently",
        ],
        correct: "It allows efficient insertion and extraction of the maximum or minimum element",
        questionLevel: 2,
      },
      {
        topicId: 15, // Heap
        question: "Why does the heap sort algorithm have a time complexity of O(n log n)?",
        options: [
          "Building the heap takes O(n), and extracting each element takes O(log n)",
          "The heap property requires O(log n) reordering for each insertion",
          "Heap sort uses O(n^2) comparisons for sorting",
          "Heap sort requires auxiliary space proportional to O(n)",
        ],
        correct: "Building the heap takes O(n), and extracting each element takes O(log n)",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(heapQuestions);

    res.status(201).json({ message: "Heap questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Heap questions." });
  }
};


export const bulkInsertTopologicalSortQuestions = async (req: Request, res: Response) => {
  try {
    const topologicalSortQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 16, // Topological Sort
        question: "What type of graph is required for a topological sort?",
        options: [
          "Directed Acyclic Graph (DAG)",
          "Undirected Graph",
          "Weighted Graph",
          "Cyclic Graph",
        ],
        correct: "Directed Acyclic Graph (DAG)",
        questionLevel: 0,
      },
      {
        topicId: 16, // Topological Sort
        question: "What is the time complexity of topological sort using DFS?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correct: "O(V + E)",
        questionLevel: 0,
      },
      {
        topicId: 16, // Topological Sort
        question: "Which of the following algorithms can be used to perform a topological sort?",
        options: [
          "Kahn's Algorithm",
          "Dijkstra's Algorithm",
          "Prim's Algorithm",
          "Floyd-Warshall Algorithm",
        ],
        correct: "Kahn's Algorithm",
        questionLevel: 0,
      },
      {
        topicId: 16, // Topological Sort
        question: "What is the main purpose of a topological sort in graph theory?",
        options: [
          "To order nodes based on their dependencies",
          "To find the shortest path in a graph",
          "To detect cycles in a graph",
          "To find connected components",
        ],
        correct: "To order nodes based on their dependencies",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 16, // Topological Sort
        question: "Given a DAG: A -> B, A -> C, B -> D, C -> D, you want to ensure that D is processed before C in the topological order. What edge must be added to the graph?",
        options: ["D -> C", "C -> D", "B -> A", "D -> A"],
        correct: "D -> C",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 16, // Topological Sort
        question: "You are performing a topological sort on a DAG with 6 nodes and 7 edges. What is the time complexity of the sorting algorithm using Kahn's Algorithm?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correct: "O(V + E)",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 16, // Topological Sort
        question: "How can topological sort help in solving problems like course scheduling?",
        options: [
          "It provides an order of tasks based on their prerequisites",
          "It identifies cycles in the dependencies",
          "It minimizes the number of tasks to complete",
          "It calculates the total time required to complete all tasks",
        ],
        correct: "It provides an order of tasks based on their prerequisites",
        questionLevel: 2,
      },
      {
        topicId: 16, // Topological Sort
        question: "What is the main difference between Kahn's Algorithm and DFS-based topological sort?",
        options: [
          "Kahn's Algorithm uses in-degree counts, while DFS uses recursion",
          "Kahn's Algorithm is more space-efficient",
          "DFS-based sort can detect cycles, while Kahn's Algorithm cannot",
          "DFS-based sort is faster than Kahn's Algorithm",
        ],
        correct: "Kahn's Algorithm uses in-degree counts, while DFS uses recursion",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(topologicalSortQuestions);

    res.status(201).json({ message: "Topological Sort questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Topological Sort questions." });
  }
};

  
export const bulkInsertAVLTreeQuestions = async (req: Request, res: Response) => {
  try {
    const avlTreeQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 17, // AVL Tree
        question: "What is the main property of an AVL Tree?",
        options: [
          "The height difference between left and right subtrees of any node is at most 1",
          "It is a complete binary tree",
          "It is always perfectly balanced",
          "It allows duplicate keys",
        ],
        correct: "The height difference between left and right subtrees of any node is at most 1",
        questionLevel: 0,
      },
      {
        topicId: 17, // AVL Tree
        question: "What is the time complexity of searching for an element in an AVL Tree?",
        options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
        correct: "O(log n)",
        questionLevel: 0,
      },
      {
        topicId: 17, // AVL Tree
        question: "Which type of rotation is performed to balance an AVL tree after a left-heavy insertion?",
        options: [
          "Right rotation",
          "Left rotation",
          "Double left rotation",
          "Double right rotation",
        ],
        correct: "Right rotation",
        questionLevel: 0,
      },
      {
        topicId: 17, // AVL Tree
        question: "Who invented the AVL Tree?",
        options: [
          "Adelson-Velsky and Landis",
          "Donald Knuth",
          "Robert Tarjan",
          "John Hopcroft",
        ],
        correct: "Adelson-Velsky and Landis",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 17, // AVL Tree
        question: "You are given an AVL tree with nodes [30, 20, 40, 10]. After inserting 25, what is the balance factor of the root node?",
        options: ["0", "-1", "1", "2"],
        correct: "1",
        questionLevel: 1,
      },
      {
        topicId: 17, // AVL Tree
        question: "Given an AVL tree with height 4, what is the maximum number of nodes it can contain?",
        options: ["15", "31", "25", "13"],
        correct: "31",
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 17, // AVL Tree
        question: "What is the trade-off of maintaining balance in an AVL Tree?",
        options: [
          "Increased overhead due to rotations during insertions and deletions",
          "Reduced space efficiency due to height balancing",
          "Reduced search efficiency for larger datasets",
          "Limited ability to handle duplicate values",
        ],
        correct: "Increased overhead due to rotations during insertions and deletions",
        questionLevel: 2,
      },
      {
        topicId: 17, // AVL Tree
        question: "How does an AVL Tree differ from a standard binary search tree?",
        options: [
          "AVL Tree ensures height balance, whereas BST does not",
          "AVL Tree uses hashing to store elements",
          "AVL Tree is always complete, whereas BST is not",
          "AVL Tree can only store unique keys",
        ],
        correct: "AVL Tree ensures height balance, whereas BST does not",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(avlTreeQuestions);

    res.status(201).json({ message: "AVL Tree questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert AVL Tree questions." });
  }
};
  
  
export const bulkInsertDijkstrasAlgorithmQuestions = async (req: Request, res: Response) => {
  try {
    const dijkstraQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "What is the main purpose of Dijkstra's Algorithm?",
        options: [
          "To find the shortest path from a source node to all other nodes",
          "To find the minimum spanning tree of a graph",
          "To detect cycles in a graph",
          "To sort the nodes of a graph topologically",
        ],
        correct: "To find the shortest path from a source node to all other nodes",
        questionLevel: 0,
      },
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "What type of graph is required for Dijkstra's Algorithm to work correctly?",
        options: [
          "Graph with non-negative edge weights",
          "Graph with no cycles",
          "Graph with directed edges only",
          "Graph with weighted and unweighted edges",
        ],
        correct: "Graph with non-negative edge weights",
        questionLevel: 0,
      },
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "What data structure is commonly used to implement Dijkstra's Algorithm efficiently?",
        options: ["Priority queue", "Stack", "Queue", "Binary search tree"],
        correct: "Priority queue",
        questionLevel: 0,
      },
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "What is the time complexity of Dijkstra's Algorithm when implemented with a binary heap?",
        options: ["O((V + E) log V)", "O(V^2)", "O(V log E)", "O(E log V)"],
        correct: "O((V + E) log V)",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
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
        questionLevel: 1,
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
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "Why does Dijkstra's Algorithm fail on graphs with negative edge weights?",
        options: [
          "It assumes all distances only decrease as nodes are processed",
          "It cannot handle cycles in the graph",
          "It prioritizes nodes with larger weights",
          "It requires a directed acyclic graph",
        ],
        correct: "It assumes all distances only decrease as nodes are processed",
        questionLevel: 2,
      },
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "How does Dijkstra’s Algorithm differ from Bellman-Ford Algorithm in terms of capabilities?",
        options: [
          "Dijkstra's Algorithm cannot handle negative weights, while Bellman-Ford can",
          "Dijkstra's Algorithm is slower but handles negative weights",
          "Both algorithms require graphs with non-negative weights",
          "Dijkstra's Algorithm always produces a minimum spanning tree",
        ],
        correct: "Dijkstra's Algorithm cannot handle negative weights, while Bellman-Ford can",
        questionLevel: 2,
      },
      {
        topicId: 18, // Dijkstra's Algorithm
        question: "What is the main trade-off of using Dijkstra's Algorithm with a Fibonacci heap instead of a binary heap?",
        options: [
          "Improved decrease-key operation at the cost of increased implementation complexity",
          "Reduced space complexity at the cost of increased time complexity",
          "Increased accuracy for handling negative weights",
          "Reduced complexity for edge relaxation",
        ],
        correct: "Improved decrease-key operation at the cost of increased implementation complexity",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(dijkstraQuestions);

    res.status(201).json({ message: "Dijkstra's Algorithm questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Dijkstra's Algorithm questions." });
  }
};

  
export const bulkInsertBellmanFordQuestions = async (req: Request, res: Response) => {
  try {
    const bellmanFordQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the primary use of Bellman-Ford Algorithm?",
        options: [
          "To find the shortest path from a source node to all other nodes in graphs with negative weights",
          "To detect cycles in graphs",
          "To find the minimum spanning tree of a graph",
          "To perform topological sorting",
        ],
        correct: "To find the shortest path from a source node to all other nodes in graphs with negative weights",
        questionLevel: 0,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the time complexity of Bellman-Ford Algorithm for a graph with V nodes and E edges?",
        options: ["O(VE)", "O(V^2)", "O(E log V)", "O(V + E)"],
        correct: "O(VE)",
        questionLevel: 0,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the key difference between Bellman-Ford and Dijkstra's Algorithm?",
        options: [
          "Bellman-Ford works with negative edge weights, while Dijkstra's does not",
          "Bellman-Ford is faster than Dijkstra's Algorithm",
          "Bellman-Ford only works with undirected graphs",
          "Bellman-Ford uses a heap-based priority queue",
        ],
        correct: "Bellman-Ford works with negative edge weights, while Dijkstra's does not",
        questionLevel: 0,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the purpose of the nth iteration in Bellman-Ford Algorithm?",
        options: [
          "To detect negative weight cycles",
          "To ensure all nodes are visited exactly once",
          "To optimize edge weights for performance",
          "To calculate the maximum weight path",
        ],
        correct: "To detect negative weight cycles",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
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
        questionLevel: 1,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "In a graph with 6 nodes and 10 edges, what is the maximum number of iterations required to determine the shortest paths using Bellman-Ford?",
        options: ["5", "6", "10", "7"],
        correct: "5",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the first step in the Bellman-Ford Algorithm when calculating shortest paths?",
        options: [
          "Initialize all distances to infinity except the source node",
          "Sort all edges in non-decreasing order",
          "Perform a depth-first search of the graph",
          "Relax edges for each node in the graph",
        ],
        correct: "Initialize all distances to infinity except the source node",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "Why does Bellman-Ford Algorithm have a higher time complexity compared to Dijkstra's Algorithm?",
        options: [
          "It relaxes all edges in every iteration, regardless of adjacency",
          "It uses more memory to store distances and predecessors",
          "It requires sorting edges multiple times",
          "It does not use a priority queue for edge processing",
        ],
        correct: "It relaxes all edges in every iteration, regardless of adjacency",
        questionLevel: 2,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "How does Bellman-Ford Algorithm detect negative weight cycles?",
        options: [
          "If a distance is updated in the nth iteration, a negative weight cycle exists",
          "By checking if any node has a distance less than zero",
          "By calculating the sum of all edge weights",
          "By using a priority queue to detect cycles",
        ],
        correct: "If a distance is updated in the nth iteration, a negative weight cycle exists",
        questionLevel: 2,
      },
      {
        topicId: 19, // Bellman-Ford Algorithm
        question: "What is the trade-off of using Bellman-Ford over Dijkstra's Algorithm?",
        options: [
          "It handles negative weights but has a higher time complexity",
          "It is faster but cannot handle graphs with cycles",
          "It requires more memory but has lower time complexity",
          "It can only handle directed graphs",
        ],
        correct: "It handles negative weights but has a higher time complexity",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(bellmanFordQuestions);

    res.status(201).json({ message: "Bellman-Ford Algorithm questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Bellman-Ford Algorithm questions." });
  }
};  
  
  
export const bulkInsertKruskalsAlgorithmQuestions = async (req: Request, res: Response) => {
  try {
    const kruskalQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 20, // Kruskal's Algorithm
        question: "What is the main purpose of Kruskal's Algorithm?",
        options: [
          "To find the Minimum Spanning Tree (MST) of a graph",
          "To detect cycles in a graph",
          "To find the shortest path between two nodes",
          "To sort edges by weight",
        ],
        correct: "To find the Minimum Spanning Tree (MST) of a graph",
        questionLevel: 0,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "What type of graph does Kruskal's Algorithm work on?",
        options: [
          "Weighted and connected graph",
          "Directed graph only",
          "Undirected graph only",
          "Graphs with negative weights",
        ],
        correct: "Weighted and connected graph",
        questionLevel: 0,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "What is the role of the union-find data structure in Kruskal's Algorithm?",
        options: [
          "To detect cycles while adding edges",
          "To sort edges by weight",
          "To minimize the total weight of the MST",
          "To optimize graph traversal",
        ],
        correct: "To detect cycles while adding edges",
        questionLevel: 0,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "What is the first step in Kruskal's Algorithm?",
        options: [
          "Sort all edges in non-decreasing order of weight",
          "Initialize all nodes as visited",
          "Choose an arbitrary node as the starting point",
          "Construct an adjacency matrix",
        ],
        correct: "Sort all edges in non-decreasing order of weight",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 20, // Kruskal's Algorithm
        question: "Given a graph with nodes A, B, C, D and edges: A-B (1), A-C (2), B-C (3), C-D (4), B-D (5), what is the total weight of the Minimum Spanning Tree (MST)?",
        options: ["7", "6", "8", "5"],
        correct: "7",
        questionLevel: 1,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "You are given a graph with 6 nodes and 9 edges. After sorting the edges by weight, how many edges will Kruskal's Algorithm add to the MST?",
        options: ["5", "6", "9", "4"],
        correct: "5",
        questionLevel: 1,
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
        questionLevel: 1,
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
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 20, // Kruskal's Algorithm
        question: "How does Kruskal's Algorithm ensure that no cycles are formed in the Minimum Spanning Tree?",
        options: [
          "By using a union-find data structure to detect and prevent cycles",
          "By ensuring that each edge is added only once",
          "By processing edges in a breadth-first manner",
          "By prioritizing the smallest connected components",
        ],
        correct: "By using a union-find data structure to detect and prevent cycles",
        questionLevel: 2,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "What is the main trade-off of Kruskal's Algorithm compared to Prim's Algorithm?",
        options: [
          "Kruskal's Algorithm may require sorting all edges, increasing preprocessing time",
          "Kruskal's Algorithm cannot handle dense graphs",
          "Kruskal's Algorithm requires adjacency matrices instead of edge lists",
          "Kruskal's Algorithm cannot detect cycles in directed graphs",
        ],
        correct: "Kruskal's Algorithm may require sorting all edges, increasing preprocessing time",
        questionLevel: 2,
      },
      {
        topicId: 20, // Kruskal's Algorithm
        question: "Why is Kruskal's Algorithm preferred over Prim's Algorithm for sparse graphs?",
        options: [
          "Kruskal's Algorithm processes edges instead of nodes, making it efficient for sparse graphs",
          "Kruskal's Algorithm skips redundant edges",
          "Kruskal's Algorithm avoids using priority queues",
          "Kruskal's Algorithm ensures balanced tree construction",
        ],
        correct: "Kruskal's Algorithm processes edges instead of nodes, making it efficient for sparse graphs",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(kruskalQuestions);

    res.status(201).json({ message: "Kruskal's Algorithm questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Kruskal's Algorithm questions." });
  }
};  
  
  
export const bulkInsertPrimQuestions = async (req: Request, res: Response) => {
  try {
    const primQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 21, // Prim's Algorithm
        question: "What is the main purpose of Prim's Algorithm?",
        options: [
          "To construct a Minimum Spanning Tree (MST) for a connected graph",
          "To detect cycles in a graph",
          "To find the shortest path between two nodes",
          "To sort edges by weight",
        ],
        correct: "To construct a Minimum Spanning Tree (MST) for a connected graph",
        questionLevel: 0,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "What type of graph does Prim's Algorithm require?",
        options: [
          "Weighted and connected graph",
          "Directed graph",
          "Undirected graph only",
          "Graph with no negative weights",
        ],
        correct: "Weighted and connected graph",
        questionLevel: 0,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "What data structure is commonly used in Prim's Algorithm for efficient edge selection?",
        options: ["Priority queue", "Stack", "Queue", "Binary tree"],
        correct: "Priority queue",
        questionLevel: 0,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "What is the time complexity of Prim's Algorithm using an adjacency matrix and no priority queue?",
        options: ["O(V^2)", "O(E log V)", "O(V + E)", "O(V^3)"],
        correct: "O(V^2)",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 21, // Prim's Algorithm
        question: "Given a graph: A -> B (4), A -> C (2), B -> C (1), B -> D (5), C -> D (3), starting from A, what is the total weight of the Minimum Spanning Tree (MST)?",
        options: ["8", "7", "9", "10"],
        correct: "7",
        questionLevel: 1,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "You are implementing Prim's Algorithm on a graph with 7 nodes and 15 edges. How many iterations are required to complete the MST?",
        options: ["6", "7", "15", "14"],
        correct: "6",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "What is the time complexity of Prim's Algorithm when using a priority queue and adjacency list representation for the graph?",
        options: ["O(E log V)", "O(V^2)", "O(E + V)", "O(V log E)"],
        correct: "O(E log V)",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
      {
        topicId: 21, // Prim's Algorithm
        question: "What is the main difference between Prim's Algorithm and Kruskal's Algorithm when constructing a Minimum Spanning Tree?",
        options: [
          "Prim's Algorithm grows the MST from a single vertex, while Kruskal's Algorithm considers the entire graph",
          "Prim's Algorithm avoids sorting edges, while Kruskal's Algorithm sorts edges by weight",
          "Prim's Algorithm is more efficient for dense graphs, while Kruskal's Algorithm is better for sparse graphs",
          "Prim's Algorithm works only for connected graphs, while Kruskal's Algorithm works for disconnected graphs",
        ],
        correct: "Prim's Algorithm grows the MST from a single vertex, while Kruskal's Algorithm considers the entire graph",
        questionLevel: 2,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "Why is Prim's Algorithm preferred over Kruskal's Algorithm for dense graphs?",
        options: [
          "Prim's Algorithm processes edges in adjacency lists efficiently for dense graphs",
          "Prim's Algorithm avoids cycles by default",
          "Prim's Algorithm requires fewer edges to be processed",
          "Prim's Algorithm skips redundant edges automatically",
        ],
        correct: "Prim's Algorithm processes edges in adjacency lists efficiently for dense graphs",
        questionLevel: 2,
      },
      {
        topicId: 21, // Prim's Algorithm
        question: "What is the trade-off of using Prim's Algorithm with an adjacency matrix instead of an adjacency list?",
        options: [
          "It increases time complexity to O(V^2)",
          "It reduces the space complexity",
          "It improves performance for sparse graphs",
          "It avoids cycles in dense graphs",
        ],
        correct: "It increases time complexity to O(V^2)",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(primQuestions);

    res.status(201).json({ message: "Prim's Algorithm questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Prim's Algorithm questions." });
  }
};    
  

export const bulkInsertKnapsackQuestions = async (req: Request, res: Response) => {
  try {
    const knapsackQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 22, // Knapsack Problem
        question: "What is the primary goal of the Knapsack Problem?",
        options: [
          "To maximize the total value of items in the knapsack without exceeding its capacity",
          "To minimize the total weight of items in the knapsack",
          "To ensure all items fit into the knapsack",
          "To distribute items evenly across multiple knapsacks",
        ],
        correct: "To maximize the total value of items in the knapsack without exceeding its capacity",
        questionLevel: 0,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "What is the key difference between the 0/1 Knapsack Problem and the Fractional Knapsack Problem?",
        options: [
          "0/1 Knapsack only allows items to be taken completely or not at all, while Fractional Knapsack allows partial items",
          "0/1 Knapsack can handle fractional weights, while Fractional Knapsack cannot",
          "Fractional Knapsack requires dynamic programming, while 0/1 Knapsack uses a greedy approach",
          "0/1 Knapsack does not consider the value of items",
        ],
        correct: "0/1 Knapsack only allows items to be taken completely or not at all, while Fractional Knapsack allows partial items",
        questionLevel: 0,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "What is the time complexity of solving the 0/1 Knapsack Problem using dynamic programming for n items and a capacity W?",
        options: ["O(n * W)", "O(n^2)", "O(W^2)", "O(log(n * W))"],
        correct: "O(n * W)",
        questionLevel: 0,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "Which algorithm is used to solve the Fractional Knapsack Problem efficiently?",
        options: ["Greedy Algorithm", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
        correct: "Greedy Algorithm",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 22, // Knapsack Problem
        question: "Given items with weights [2, 3, 4, 5] and values [3, 4, 5, 6], and a knapsack capacity of 5, what is the maximum value you can achieve using the 0/1 Knapsack approach?",
        options: ["7", "9", "6", "10"],
        correct: "7",
        questionLevel: 1,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "You are solving a fractional knapsack problem where items have weights [2, 3, 5] and values [10, 15, 25]. If the capacity of the knapsack is 6, what is the maximum value you can achieve?",
        options: ["35", "30", "40", "45"],
        correct: "35",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "Given weights [1, 3, 4, 5] and values [10, 40, 50, 70], what is the maximum value for a knapsack capacity of 7 using the 0/1 Knapsack approach?",
        options: ["110", "120", "90", "100"],
        correct: "110",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "What is the primary limitation of using a greedy algorithm for solving the 0/1 Knapsack Problem?",
        options: [
          "It may not produce an optimal solution when items cannot be taken fractionally",
          "It increases the time complexity to O(n^2)",
          "It cannot handle large input sizes",
          "It requires all weights to be distinct",
        ],
        correct: "It may not produce an optimal solution when items cannot be taken fractionally",
        questionLevel: 2,
      },
      {
        topicId: 22, // Knapsack Problem
        question: "What is the trade-off of solving the Knapsack Problem with dynamic programming compared to a brute force approach?",
        options: [
          "Dynamic programming reduces time complexity but increases space complexity",
          "Dynamic programming handles fractional items, but brute force does not",
          "Dynamic programming requires all values to be integers",
          "Dynamic programming avoids recursion, while brute force uses recursion",
        ],
        correct: "Dynamic programming reduces time complexity but increases space complexity",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(knapsackQuestions);

    res.status(201).json({ message: "Knapsack Problem questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert Knapsack Problem questions." });
  }
};

 
export const bulkInsertLCSQuestions = async (req: Request, res: Response) => {
  try {
    const lcsQuestions = [
      // Memory Level Questions (Level 0)
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "What is the goal of the Longest Common Subsequence (LCS) problem?",
        options: [
          "To find the longest subsequence common to two strings",
          "To find the longest substring common to two strings",
          "To find the total number of common characters between two strings",
          "To sort two strings lexicographically",
        ],
        correct: "To find the longest subsequence common to two strings",
        questionLevel: 0,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "What is the time complexity of solving the LCS problem using dynamic programming for strings of length m and n?",
        options: ["O(m * n)", "O(m + n)", "O(m^2)", "O(n log m)"],
        correct: "O(m * n)",
        questionLevel: 0,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "What type of approach is used to solve the LCS problem efficiently?",
        options: [
          "Dynamic Programming",
          "Divide and Conquer",
          "Greedy Algorithm",
          "Backtracking",
        ],
        correct: "Dynamic Programming",
        questionLevel: 0,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "Why does the LCS algorithm use a 2D table in dynamic programming?",
        options: [
          "To store intermediate results for overlapping subproblems",
          "To avoid recursion",
          "To minimize space complexity",
          "To sort the input strings before processing",
        ],
        correct: "To store intermediate results for overlapping subproblems",
        questionLevel: 0,
      },

      // Application Level Questions (Level 1)
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "Given two strings 'AGGTAB' and 'GXTXAYB', what is the length of the longest common subsequence (LCS)?",
        options: ["4", "5", "6", "3"],
        correct: "4",
        questionLevel: 1,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "For strings 'ABCBDAB' and 'BDCAB', what is the actual LCS?",
        options: ["'BCAB'", "'BDAB'", "'BDAB'", "'BCBA'"],
        correct: "'BDAB'",
        questionLevel: 1,
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
        questionLevel: 1,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "Given two strings 'ABCD' and 'ACBD', what is the LCS length?",
        options: ["3", "4", "2", "1"],
        correct: "3",
        questionLevel: 1,
      },

      // Analysis Level Questions (Level 2)
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
        questionLevel: 2,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "What is the trade-off of solving the LCS problem with dynamic programming compared to a recursive solution?",
        options: [
          "Dynamic programming reduces time complexity but increases space complexity",
          "Dynamic programming requires pre-sorting the strings",
          "Dynamic programming cannot handle large strings",
          "Dynamic programming increases time complexity in some cases",
        ],
        correct: "Dynamic programming reduces time complexity but increases space complexity",
        questionLevel: 2,
      },
      {
        topicId: 23, // Longest Common Subsequence (LCS)
        question: "Given strings of length m and n, how does the space complexity of solving LCS change if only the last two rows of the DP table are stored?",
        options: [
          "It reduces to O(min(m, n))",
          "It remains O(m * n)",
          "It increases to O(m + n)",
          "It reduces to O(log(m * n))",
        ],
        correct: "It reduces to O(min(m, n))",
        questionLevel: 2,
      },
    ];

    await Question.bulkCreate(lcsQuestions);

    res.status(201).json({ message: "LCS questions inserted successfully with levels!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert LCS questions." });
  }
};


// Get all questions for a specific topic
export const getQuestionsByTopic = async (req: Request, res: Response) => {

  const { topicId, questionLevel } = req.params;
  console.log("getQuestionsByTopic and level " + topicId + "    " + questionLevel);
  try {
    const whereClause: any = { topicId };

    // Add filtering by questionLevel if provided
    if (questionLevel !== undefined) {
      whereClause.questionLevel = questionLevel;
    }
    console.log("getQuestionsByTopic and level");
    const questions = await Question.findAll({ where: whereClause });

    if (!questions.length) {
      return res.status(404).json({ message: 'No questions found for this topic and level' });
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
