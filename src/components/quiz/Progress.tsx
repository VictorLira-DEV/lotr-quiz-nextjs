import StyledProgress from "../styles/Progress";
import { ProgressBarContext } from "../context/progressBarContext";
import { useContext } from "react";

function Progress() {
  const { progressBarValue } = useContext(ProgressBarContext);
  return <StyledProgress width={`${progressBarValue}%`} />;
}

export default Progress;
