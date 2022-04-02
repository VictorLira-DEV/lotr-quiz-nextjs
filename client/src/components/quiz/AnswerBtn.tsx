import AnswerStyledBtn from "../styles/AnswerBtn.styled";

interface IAnswers {
  letter: string;
  answer: string;
  correctAnswer: boolean;
  background: string;
  onClick: (e: any) => void;
  color: string;
  className: string;
}

function AnswerBtn(props: IAnswers) {
  const { answer, letter, onClick, correctAnswer, background, className } =
    props;

  return (
    <AnswerStyledBtn
      className={className}
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
