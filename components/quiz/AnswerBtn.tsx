import Button from "../ui/Button";
import AnswerStyledBtn from "../styles/AnswerBtn.styled";

interface IAnswers {
  letter: string;
  answer: string;
  correctAnswer: string;
  background: string;
  onClick: (e: any) => void;
  color: string;
}

function AnswerBtn(props: IAnswers) {
  const { answer, letter, onClick, correctAnswer, background } = props;

  return (
    <AnswerStyledBtn
      color={props.color}
      onClick={(e) => onClick(e)}
      data-correct={correctAnswer}
      bg={background}
    >
      <span>{letter}</span>
      <span>{answer}</span>
    </AnswerStyledBtn>
  );
}

export default AnswerBtn;
