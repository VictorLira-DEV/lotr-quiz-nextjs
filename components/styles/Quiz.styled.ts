import styled from "styled-components";

const StyledQuiz = styled.main`
  padding: 40px 20px;
  background: white;
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
      button {
        display: flex;
        align-items: center;
        color: rgb(42, 39, 42);
        transition: 0.3s ease-in-out;
        &:hover {
          background: rgb(42, 39, 42);
          color: white;
        }
        //letters answer
        span:first-of-type {
          background: rgb(42, 39, 42);
          color: white;
          height: 55px;
          width: 45px;
          font-size: 32px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        //answer
        span:nth-child(2) {
          flex: 1;
          text-align: start;
          font-size: 1rem;
          font-weight: 200;
          padding: 10px;
        }
      }
    }
  }
  //start btn
  & > button:last-of-type {
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
