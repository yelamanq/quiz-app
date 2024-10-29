import { useState } from "react";
import Quiz from "./components/Quiz";
import './styles/App.css'


function App() {

  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Berlin', 'London', 'Almaty', 'Paris'],
      correct: 3
    },
    {
      question: 'Where is the SDU University located?',
      choices: ['Astana', 'Almaty', 'Shymkent', 'Atyrau'],
      correct: 1
    },
    {
      question: 'Which version of iPhone is the latest?',
      choices: ['iPhone 4', 'iPhone 12', 'iPhone 16', 'iPhone 15'],
      correct: 2
    },
    {
      question: 'What is 2 + 2?',
      choices: ['4', '22', '2', '0'],
      correct: 0
    },
    {
      question: 'Who is the CEO of Instagram?',
      choices: ['Mark Zuckerberg', 'Adam Mosseri', 'Elon Musk', 'Steve Jobs'],
      correct: 1
    },
  ];

  return (
    <div className="App">
      {quizStarted
        ? <Quiz questions={questions} />
        : <div className="main">
          <h1 className="main__title">Quiz App</h1>
          <button className="main__button" onClick={startQuiz}>start</button>
        </div>
      }
    </div>
  );
}

export default App;
