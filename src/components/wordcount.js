import React, { useState } from 'react';
import './word.css';
function WordCount() {
  const [text, setText] = useState('');
  const word = text.trim().split(/\s+/).length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='word-count-container'>
        <h1>Responsive paragraph word counter</h1>
        <div className='word-count-app'>
      <textarea value={text} onChange={handleTextChange} />
      <p>Word Count: {word}</p>
      </div>
    </div>
  );
}

export default WordCount;
