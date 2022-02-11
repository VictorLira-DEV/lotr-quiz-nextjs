import Button from "../ui/Button";
import { IallQuestion } from "../../interface/allQuestion";
import StyledTryAgain from '../styles/TryAgain'

interface ITryAgain {
  correctAnswers: number;
  allQuestions: IallQuestion[];
}

function TryAgain(props: ITryAgain) {
  const { correctAnswers, allQuestions } = props;

  return (
    <StyledTryAgain>
      <h1>Parabéns</h1>
      <p>
        Você acertou {correctAnswers} de {allQuestions.length} perguntas
      </p>
      <Button> Try again </Button>
    </StyledTryAgain>
  );
}

export default TryAgain;
