import React from "react";
import { useState } from "react";
import '../styles/Question.css'

const Question = ({question, handleAnswer, isLatestQuestion}) => {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleNextClick = () => {
        if (selectedChoice !== null) {
            handleAnswer(selectedChoice);
            setSelectedChoice(null);
        } else {
            alert("Please select an answer before proceeding.");
        }
    };

    const submitPride = () => {
        const end = Date.now() + 1500;
        const colors = ["#000000"];

        (function frame() {
        window.confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        window.confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        })();
    };

    const handleButtonClick = () => {
        handleNextClick();
        if (isLatestQuestion) {
            submitPride();
        }
    };

    return (
        <div className="Question">
            <h2 className="questionText" >{question.question}</h2>
            {question.choices.map((choice, index) => (
                <div key={index} className="choiceBlock" >
                    <input
                        className="choiceInput"
                        type="radio" 
                        id={`choice-${index}`}
                        name="choice"
                        onChange={() => setSelectedChoice(index)}
                        checked={selectedChoice === index}
                    />
                    <label className="choiceLabel" htmlFor={`choice-${index}`}>{choice}</label>
                </div>
            ))}
            <div className="button-wrapper">
                <button onClick={handleButtonClick} >{isLatestQuestion ? 'Submit' : 'Next'}</button>
            </div>
        </div>
    );
};

export default Question;