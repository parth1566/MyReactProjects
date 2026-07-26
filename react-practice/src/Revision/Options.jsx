import React from 'react'

const Options = ({ options, onAnswer }) => {
    
  return (
    <div>
      {options.map((option) => (
        <button className="quiz-option"  key={option} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;


