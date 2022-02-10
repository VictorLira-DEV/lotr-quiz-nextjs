import React, { ReactNode, useState } from "react";
import { IallQuestion } from "../../interface/allQuestion";

interface Iquestions {
  allQuestionsFunction: (a: IallQuestion[]) => void;
  allQuestionsValue: IallQuestion[];
}

interface Iprops{
  children: ReactNode
}

export let QuestionsContext = React.createContext({} as Iquestions);

const QuestionContextProvider = function (props: Iprops) {
  const [allQuestions, setAllQuestions] = useState<IallQuestion[]>();

  function getAllQuestions(questions: IallQuestion[]) {
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
