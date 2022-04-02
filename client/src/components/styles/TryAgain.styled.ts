import styled from "styled-components";

const StyledTryAgain = styled.div`
  span {
    font-weight: bolder;
    &:first-of-type {
      color: rgb(46, 185, 76);
    }

    &:last-of-type {
      color: rgb(230, 34, 16);
    }
  }
  button {
    background: rgb(0, 201, 200);
    color: white;
    padding: 15px 30px;
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default StyledTryAgain;
