import Button from "../ui/Button";
import { IallQuestion } from "../../interface/allQuestion";
import StyledTryAgain from "../styles/TryAgain";

interface ITryAgain {
  correctAnswers: number;
  allQuestions: IallQuestion[];
  onClick: () => void;
}

function TryAgain(props: ITryAgain) {
  const { correctAnswers, allQuestions } = props;

  return (
    <StyledTryAgain>
      <h1>Good Job</h1>
      <p>
        You got <span> {correctAnswers} </span> out of
        <span> {allQuestions.length} </span> questions
      </p>
      <Button onClick={() => props.onClick()}> Try again </Button>
    </StyledTryAgain>
  );
}

export default TryAgain;
