import styled from "styled-components";

const StyledProgress = styled.div`
  height: 100%;
  width: ${(props: { width: string }) => (props.width ? props.width : " 0%")};
  background: rgb(46, 185, 76);
  transition: 1s;
`;

export default StyledProgress;
