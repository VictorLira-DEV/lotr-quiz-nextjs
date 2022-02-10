import StyledProgress from "../styles/Progress";

interface IProps {
  width: string;
}

function Progress(props: IProps) {
  return <StyledProgress width={props.width} />;
}

export default Progress;
