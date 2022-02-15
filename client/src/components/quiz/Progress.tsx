import StyledProgress from "../styles/Progress";
import { useContext } from "react";
import { ProgressBarContext } from "../context/progressBarContext";

function Progress(props: any) {
  const { correctProgress, wrongProgress } = useContext(ProgressBarContext);

  return (
    <StyledProgress
      isCorrect={props.isCorrect}
      width={props.width}
    />
  );
}

export default Progress;
