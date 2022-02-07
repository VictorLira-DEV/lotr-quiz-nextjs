import React, { useState } from "react";

interface Iquestions {
  allQuestionsFunction: (a: any) => void;
  allQuestionsValue: any;
}

export let QuestionsContext = React.createContext({} as Iquestions);

const QuestionContextProvider = function (props: any) {
  const [allQuestions, setAllQuestions] = useState([]);

  function getAllQuestions(questions: any) {
    setAllQuestions(questions);
  }

  let values: any = {
    allQuestionsFunction: getAllQuestions,
    allQuestionsValue: allQuestions,
  };

  return (
    <QuestionsContext.Provider value={values}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionContextProvider;
