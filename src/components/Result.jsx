import React from "react";
import '../styles/Result.css'

const Result = ({userAnswers, questions}) => {

    const getResultScore = (userAnswers, questions) => {
        let score = 0;
        for (let i = 0; i < questions.length; ++i) {
            if (questions[i].correct === userAnswers[i]) score++;
        }
        return score;
    }

    const choiceLetters = ['a', 'b', 'c', 'd'];

    return (
        <div className="Result">
            <h1 className="yourResult">Your result: {getResultScore(userAnswers, questions)}/{questions.length}</h1>
            {questions.map((question, qIndex) => (
                <div key={qIndex} className="result__questionBlock">
                    <h2 className="result__questionText">{qIndex+1}. {question.question}</h2>
                    {question.choices.map((choice, cIndex) => (
                        <h3
                            key={cIndex}
                            className={`result__choiceText ${
                                cIndex === question.correct
                                    ? 'result__correctAnswer'
                                    : cIndex === userAnswers[qIndex]
                                        ? 'result__incorrectAnswer'
                                        : ''
                            }`}
                        >
                            {choiceLetters[cIndex]}. {choice}
                        </h3>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Result;