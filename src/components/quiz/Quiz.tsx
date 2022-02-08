import StyledQuiz from "../styles/Quiz.styled";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import AnswerBtn from "./AnswerBtn";
import { useContext } from "react";
import { QuestionsContext } from "../context/questionsContext";

const questionLetters = ["A", "B", "C", "D"];

function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [AllcorrectAnswers, setAllCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState("");
  const { allQuestionsValue } = useContext(QuestionsContext);
  const startQuiz = async function (e: any) {
    setQuizStarted(true);
    setCurrentQuestion(currentQuestion);
    console.log(allQuestionsValue);
  };

  const checkTheAnswer = function (e: any) {
    const correct = e.target.closest("button").getAttribute("data-correct");

    if (correct === "true") {
      setAnswerIsCorrect("correct");
      setAllCorrectAnswers(AllcorrectAnswers + 1);
      console.log(AllcorrectAnswers);
      nextQuestion();
      return;
    }
    setAnswerIsCorrect("incorrect");
    nextQuestion();
  };

  const nextQuestion = function () {
    if (currentQuestion === allQuestionsValue.length - 1) {
      alert("its over");
      return;
    }
    setTimeout(() => {
      setAnswerIsCorrect("");
      setCurrentQuestion((prev) => prev + 1);
    }, 1000);
  };

  return (
    <StyledQuiz>
      {AllcorrectAnswers}
      {quizStarted && (
        <div>
          <h1> {allQuestionsValue[currentQuestion].question} </h1>
          <div>
            {questionLetters.map((item, index) => {
              return (
                <AnswerBtn
                  color={answerIsCorrect}
                  background={answerIsCorrect}
                  correctAnswer={
                    allQuestionsValue[currentQuestion].answer[index].correct
                  }
                  key={allQuestionsValue[currentQuestion].answer[index].id}
                  letter={item}
                  answer={allQuestionsValue[currentQuestion].answer[index].text}
                  onClick={(e) => checkTheAnswer(e)}
                />
              );
            })}
          </div>
        </div>
      )}
      {!quizStarted && (
        <Button className="quizBtn" onClick={startQuiz}>
          Start
        </Button>
      )}
    </StyledQuiz>
  );
}

export default Quiz;
