import React, { ReactNode, useState } from "react";

interface IProgressBarContext {
  progressBarValue: string;
  progressBarFunction: (a: string) => void;
}

interface IProps {
  children: ReactNode;
}

export const ProgressBarContext = React.createContext(
  {} as IProgressBarContext
);

function ProgressBarProvider(props: IProps) {
  const [progressBar, setProgressBar] = useState("0");

  const increaseProgressBar = function (progress: string) {
    setProgressBar((prev) => {
      const width = String(Number(prev) + Number(progress));
      return width;
    });
  };

  let values = {
    progressBarFunction: increaseProgressBar,
    progressBarValue: progressBar,
  };
  return (
    <ProgressBarContext.Provider value={values}>
      {props.children}
    </ProgressBarContext.Provider>
  );
}

export default ProgressBarProvider;
