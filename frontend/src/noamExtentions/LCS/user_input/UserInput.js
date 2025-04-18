import React, { useState } from 'react';
//import './UserInput.css';

const UserInput = ({ setInputData, setInputHasEntered }) => {
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!str1 || !str2) {
      alert("Please enter both strings.");
      return;
    }

    setInputData({ string1: str1.trim(), string2: str2.trim() });
    setInputHasEntered(true);
  };

  return (
    <div className="page-container flex justify-center items-center h-screen bg-gray-100">
      <div className="form-container p-6 bg-green-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">LCS Input</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First String:</label>
            <input
              type="text"
              value={str1}
              onChange={(e) => setStr1(e.target.value)}
              placeholder="Enter first string"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Second String:</label>
            <input
              type="text"
              value={str2}
              onChange={(e) => setStr2(e.target.value)}
              placeholder="Enter second string"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
