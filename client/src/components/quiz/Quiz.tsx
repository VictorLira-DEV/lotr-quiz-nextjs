import StyledQuiz from "../styles/Quiz.styled";
import Button from "../ui/Button";
import React, { useState } from "react";
import AnswerBtn from "./AnswerBtn";
import { useContext } from "react";
import { QuestionsContext } from "../context/questionsContext";
import ProgressBar from "./ProgressBar";
import { ProgressBarContext } from "../context/progressBarContext";
import TryAgain from "./TryAgain";

const questionLetters = ["A", "B", "C", "D"];

function Quiz() {
  const [gameProgress, setGameProgress] = useState({
    hasStarted: false,
    hasEnded: false,
  });
  const [allcorrectAnswers, setAllCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState("");
  const [loadingNextQuestion, setLoadingNextQuestion] = useState(false)
  const { allQuestionsValue } = useContext(QuestionsContext);
  const { progressBarFunction, restartProgress } =
    useContext(ProgressBarContext);

  const startQuiz = async function () {
    setGameProgress({
      hasStarted: true,
      hasEnded: false,
    });
    setCurrentQuestion(currentQuestion);
  };

  const checkTheAnswer = function (e: React.MouseEvent<HTMLSpanElement>) {
    if (currentQuestion >= allQuestionsValue.length - 1) return;

    const correct = e.currentTarget
      .closest("button")
      ?.getAttribute("data-correct");

    let progress: string;
    progress = String(100 / (allQuestionsValue.length - 1));
    if (correct === "false") {
      progressBarFunction(progress, "incorrect");
      setAnswerIsCorrect("incorrect");
      nextQuestion();
      return;
    }
    progressBarFunction(progress, "correct");
    setAnswerIsCorrect("correct");
    setAllCorrectAnswers(allcorrectAnswers + 1);
    nextQuestion();
  };

  const nextQuestion = function () {
    if (currentQuestion >= allQuestionsValue.length - 2) {
      setGameProgress({
        hasStarted: true,
        hasEnded: true,
      });
      return;
    }

    if (currentQuestion <= allQuestionsValue.length - 1) {
      setTimeout(() => {
        setAnswerIsCorrect("");
        setCurrentQuestion((prev) => prev + 1);
      }, 1000);
    }
  };

  const restartQuiz = function () {
    setCurrentQuestion(0);
    setAllCorrectAnswers(0);
    setAnswerIsCorrect("");
    restartProgress();
    setGameProgress({
      hasStarted: true,
      hasEnded: false,
    });
  };

  let { hasStarted, hasEnded } = gameProgress;

  return (
    <React.Fragment>
      {hasStarted && <ProgressBar />}
      <StyledQuiz>
        {hasStarted && !hasEnded && (
          <div>
            <h1>
              {currentQuestion + 1} —
              {allQuestionsValue[currentQuestion].question}
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
        {!hasStarted && (
          <Button className="quizBtn" onClick={startQuiz}>
            Start
          </Button>
        )}
        {hasStarted && hasEnded && (
          <TryAgain
            correctAnswers={allcorrectAnswers}
            allQuestions={allQuestionsValue}
            onClick={restartQuiz}
          />
        )}
      </StyledQuiz>
    </React.Fragment>
  );
}

export default Quiz;
