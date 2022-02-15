import styled from "styled-components";

const StyledQuiz = styled.main`
  padding: 40px 20px;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 8px rgb(0 0 0 / 20%);
  text-align: center;
  h1 {
    margin-bottom: 20px;
    color: rgb(42, 39, 42);
    padding: 0 20px;
  }
  //quiz container
  & > div:first-of-type {
    //answer container
    & > div:first-of-type {
      display: flex;
      flex-direction: column;
      & > :not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
  //start btn
  .quizBtn {
    width: 100px;
    background: rgb(42, 39, 42);
    height: 50px;
    color: white;
    font-size: 1.2rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;

export default StyledQuiz;
