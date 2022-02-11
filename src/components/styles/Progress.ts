import styled from "styled-components";

interface Iprops {
  width: string;
  isCorrect: string;
}

const StyledProgress = styled.div<Iprops>`
  height: 100%;
  width: ${(props: { width: string }) => (props.width ? props.width : "0")};
  background: ${(props: { isCorrect: string }) =>
    props.isCorrect === "correct" ? "rgb(46, 185, 76)" : "rgb(230, 34, 16)"};
  transition: 1s;
`;

export default StyledProgress;
