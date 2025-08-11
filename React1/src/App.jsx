import './App.css';
import React, { useState } from 'react';
import quotes from './quotes';

function App() {
  const [quote, setQuote] = useState('Click Below to get inspired');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1> Random Quote Generator</h1>
      <p style={{ fontSize: '1.5em', color: 'aqua' }}>{quote}</p>
      <button
        onClick={generateQuote}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Get Quote
      </button>
    </div>
  );
}

export default App;