import StyledProgressBar from "../styles/ProgressBar";
import Progress from "./Progress";

function ProgressBar(props: {width: string}) {
  return (
    <StyledProgressBar>
      <Progress width={props.width} />
    </StyledProgressBar>
  );
}

export default ProgressBar;
