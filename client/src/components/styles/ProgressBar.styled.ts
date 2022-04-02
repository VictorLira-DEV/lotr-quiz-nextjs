import styled from "styled-components";

const StyledProgressBar = styled.div`
  width: 500px;
  height: 10px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export default StyledProgressBar;
