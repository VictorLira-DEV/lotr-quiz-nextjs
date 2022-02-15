import styled from "styled-components";

interface IAnswerStyledBtn {
  color: string;
  bg: string;
}

const AnswerStyledBtn = styled.button<IAnswerStyledBtn>`
  display: flex;
  align-items: center;
  color: rgb(42, 39, 42);
  transition: 0.3s ease-in-out;
  color: ${(props) =>
    (props.color === "correct" && "white") ||
    (props.color === "incorrect" && "white") ||
    "rgb(42, 39, 42)"};
  border: none;
  background: ${(props) =>
    (props.bg === "correct" && "rgb(46, 185, 76)") ||
    (props.bg === "incorrect" && "rgb(230, 34, 16)")};
  &:hover {
    background: rgb(42, 39, 42);
    color: white;
  }
  //letters answer
  & > span:first-of-type {
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
`;

export default AnswerStyledBtn;
