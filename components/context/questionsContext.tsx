import React, { useState } from "react";

export let QuestionsContext = React.createContext({
  allQuestionsFunction: [],
});

const QuestionContextProvider = function (props: any) {

  let values: any = {
    allQuestionsFunction: ['casa'],
  };

  return (
    <QuestionsContext.Provider value={values}> 
        {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionContextProvider;