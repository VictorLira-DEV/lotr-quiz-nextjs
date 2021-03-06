import React, { ReactNode, useState } from "react";

interface IProgressBarContext {
  correctProgress: { width: string; value: string };
  wrongProgress: { width: string; value: string };
  progressBarFunction: (a: string, b: string) => void;
  restartProgress: () => void;
}

interface IProps {
  children: ReactNode;
}

export const ProgressBarContext = React.createContext(
  {} as IProgressBarContext
);

function ProgressBarProvider(props: IProps) {
  const [correctProgress, setCorrectProgress] = useState({
    width: "0",
    value: "correct",
  });
  const [wrongProgress, setWrongProgress] = useState({
    width: "0",
    value: "incorrect",
  });

  const increaseProgressBar = function (progress: string, type: string) {
    if (type === "correct") {
      setCorrectProgress((prev) => {
        const width = String(Number(prev.width) + Number(progress));
        return {
          width: width,
          value: type,
        };
      });
    } else {
      setWrongProgress((prev) => {
        const width = String(Number(prev.width) + Number(progress));
        return {
          width: width,
          value: type,
        };
      });
    }
  };

  const restartProgress = function () {
    setCorrectProgress({
      width: "0",
      value: "correct",
    });

    setWrongProgress({
      width: "0",
      value: "incorrect",
    });
  };

  let values = {
    progressBarFunction: increaseProgressBar,
    restartProgress: restartProgress,
    correctProgress: correctProgress,
    wrongProgress: wrongProgress,
  };
  return (
    <ProgressBarContext.Provider value={values}>
      {props.children}
    </ProgressBarContext.Provider>
  );
}

export default ProgressBarProvider;
