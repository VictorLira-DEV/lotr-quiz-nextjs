import StyledQuiz from "../styles/Quiz.styled";
import Button from "../ui/Button";
import React, { useState, MouseEvent, FormEvent } from "react";
import AnswerBtn from "./AnswerBtn";
import { useContext } from "react";
import { QuestionsContext } from "../context/questionsContext";
import ProgressBar from "./ProgressBar";

const questionLetters = ["A", "B", "C", "D"];

function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [AllcorrectAnswers, setAllCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState("");
  const [progressBar, setProgressBar] = useState("0");
  const { allQuestionsValue } = useContext(QuestionsContext);
  const startQuiz = async function () {
    setQuizStarted(true);
    setCurrentQuestion(currentQuestion);
  };

  let progress = "";
  const checkTheAnswer = function (e: React.MouseEvent<HTMLSpanElement>) {
    const correct = e.currentTarget
      .closest("button")
      ?.getAttribute("data-correct");

    if (correct === "true") {
      progress = String(100 / allQuestionsValue.length);
      console.log(progress);
      setProgressBar((prev) => {
        const width =  String(Number(prev) + Number(progress));
        return width
      });
      setAnswerIsCorrect("correct");
      setAllCorrectAnswers(AllcorrectAnswers + 1);
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
    <React.Fragment>
      <ProgressBar width={`${progressBar}%`} />
      <StyledQuiz>
        {quizStarted && (
          <div>
            <h1>
              {" "}
              {currentQuestion + 1} —{" "}
              {allQuestionsValue[currentQuestion].question}{" "}
            </h1>
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
                    answer={
                      allQuestionsValue[currentQuestion].answer[index].text
                    }
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
    </React.Fragment>
  );
}

export default Quiz;
