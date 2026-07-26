import React, { useState } from 'react'
import Options from './Options';
import './Quiz.css';

const questions = [
    {
        question: "Which hook is used for state in React?",
        options: ["useEffect", "useState", "useContext", "useRef"],
        answer: "useState"
    },
    {
        question: "Which is the foundational language of Web Development ?",
        options: ["JavaScript", "CSS", "HTML", "Java"],
        answer: "HTML"
    },
    {
        question: "Which tag is used to break a line in HTML ?",
        options: ["<p>", "<h1>", "<br>", "<div>"],
        answer: "<br>"
    },
    {
        question: "Who is the most popular cricketer in India ?",
        options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Jethalal"],
        answer: "Jethalal"
    },
    {
        question: "Which is the best AI in India ? ",
        options: ["Grok", "ChatGPT", "Claude", "Gemini"],
        answer: "Claude"
    }
]

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    function handleAnswer(selected) {
        if (selected === questions[current].answer) {
            setScore(score + 1);
        }
        if (current === questions.length - 1) {
            setFinished(true);
        } else {
            setCurrent(current + 1);
        }
    }

    function handleRestart() {
        setCurrent(0);
        setScore(0);
        setFinished(false);
    }

    return (
        <div>
            {finished ? (

                <div className="quiz-card">
                    <h2 className="quiz-score">You scored {score} / {questions.length} 🎉</h2>
                    <button className="quiz-restart" onClick={handleRestart}>Restart</button>
                </div>

            ) : (

                <div className="quiz-card">
                    <h1 className="quiz-title">🧠 Quiz App</h1>
                    <p className="quiz-progress">Question {current + 1} of {questions.length}</p>
                    <h2 className="quiz-question">{questions[current].question}</h2>
                    <Options options={questions[current].options} onAnswer={handleAnswer} />
                </div>

            )}
        </div>
    )
}

export default Quiz