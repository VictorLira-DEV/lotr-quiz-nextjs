import StyledQuiz from "../styles/Quiz.styled";
import Button from "./Button";
import { useState } from "react";
import AnswerBtn from "./AnswerBtn";


function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = function () {
    setQuizStarted(true);
  };

  return (
    <StyledQuiz>
      {quizStarted && (
        <div>
          <h1>2 — Uma forma de declarar variável em JavaScript:</h1>
          <div>
            <AnswerBtn letter="A" answer="Answer 1" />
            <AnswerBtn letter="B" answer="Answer 2" />
            <AnswerBtn letter="C" answer="Answer 3" />
            <AnswerBtn letter="D" answer="Answer 4" />
          </div>
        </div>
      )}
      {!quizStarted && <Button onClick={startQuiz}>Start</Button>}
    </StyledQuiz>
  );
}

export default Quiz;
