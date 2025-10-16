import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import nishu from './nishu';


// Helper function to generate random string
const generateRandomString = (length = 8) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};


function App() {
  const [randomString, setRandomString] = useState('');

  const handleGenerate = useCallback(() => {
    const newString = generateRandomString(10); // 10 character long
    setRandomString(newString);
  }, []);

  useEffect(() => {
    handleGenerate(); // generate on mount
  }, [handleGenerate]);

  return (
    <>
      <div className="p-12 text-center">
      <h1 className="text-4xl font-bold mb-5">🎲 Random String Generator</h1>
      <p className="text-2xl mb-6">{randomString}</p>
      <button
        onClick={handleGenerate}
        className="text-lg px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Generate New String
      </button>
    </div>

      {/* <Translate /> */}
     <nishu/>
    </>
  );
}

export default App;
