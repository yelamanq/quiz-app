import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import '../styles/Quiz.css'

const Quiz = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (choiceIndex) => {
        setUserAnswers([...userAnswers, choiceIndex]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    return (
        <div className="Quiz">
            <div className="quiz__header">
                <span className="name">Quiz App</span>
                {!showResult ? <span className="number">{currentQuestion + 1}/{questions.length}</span> : null}
            </div>

            {showResult
                ? <Result questions={questions} userAnswers={userAnswers} />
                : <Question
                    question={questions[currentQuestion]}
                    handleAnswer={handleAnswer}
                    isLatestQuestion={currentQuestion === questions.length - 1}
                />
            }
        </div>
    );
};

export default Quiz;