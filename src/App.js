import { useState } from "react";
import { Container } from "react-bootstrap";
import Data from "./data";
import "./styles.css";

export default function App() {
  const [correct, setCorrect] = useState(0);
  const [inCorrect, setInCorrect] = useState(0);
  const [showQuestion, setShowQuestion] = useState(0);

  function handleCheckAnswer(c, i) {
    if (Data[i].correct - 1 === c) {
      setCorrect(correct + 1);
      setShowQuestion(showQuestion + 1);
    } else {
      setInCorrect(inCorrect + 1);
      setShowQuestion(showQuestion + 1);
    }
  }

  return (
    <Container className="app">
      <h2 className="heading">My Quiz App</h2>

      {Data.map((d, i) => {
        if (showQuestion === i) {
          return (
            <div>
              <h4 className="question">
                Q{i + 1}. {d.question}
              </h4>
              <span className="questionNo">1.</span>
              <button onClick={() => handleCheckAnswer(0, i)}>
                {d.options[0]}
              </button>
              <br />
              <span className="questionNo">2.</span>
              <button onClick={() => handleCheckAnswer(1, i)}>
                {d.options[1]}
              </button>
              <br />
              <span className="questionNo">3.</span>
              <button onClick={() => handleCheckAnswer(2, i)}>
                {d.options[2]}
              </button>
              <br />
              <span className="questionNo">4.</span>
              <button onClick={() => handleCheckAnswer(3, i)}>
                {d.options[3]}
              </button>
              <br />
            </div>
          );
        }
      })}

      <div className="score">
        <span className="correct">Correct: {correct} </span>
        <span className="incorrect">Incorrect: {inCorrect} </span>
      </div>
    </Container>
  );
}
