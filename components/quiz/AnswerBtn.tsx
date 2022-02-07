import Button from "./Button";

interface IAnswers {
  letter: string;
  answer: string;
}

function AnswerBtn(props: IAnswers) {
  const { answer, letter } = props;

  return (
    <Button>
      <span>{letter}</span>
      <span>{answer}</span>
    </Button>
  );
}

export default AnswerBtn;
