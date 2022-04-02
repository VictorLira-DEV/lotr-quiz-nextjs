import StyledProgressBar from "../styles/ProgressBar.styled";
import Progress from "./Progress";
import { useContext } from "react";
import { ProgressBarContext } from "../context/progressBarContext";

function ProgressBar() {
  const { correctProgress, wrongProgress } = useContext(ProgressBarContext);

  return (
    <StyledProgressBar>
      <Progress width={`${correctProgress.width}%`} isCorrect="correct" />
      <Progress width={`${wrongProgress.width}%`} isCorrect="incorrect" />
    </StyledProgressBar>
  );
}

export default ProgressBar;
