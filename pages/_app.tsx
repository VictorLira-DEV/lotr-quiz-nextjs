import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layoult from "../src/components/layoult/Layoult";
import QuestionContextProvider from "../src/components/context/questionsContext";
import ProgressBarProvider from "../src/components/context/progressBarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layoult>
      <QuestionContextProvider>
        <ProgressBarProvider>
          <Component {...pageProps} />
        </ProgressBarProvider>
      </QuestionContextProvider>
    </Layoult>
  );
}

export default MyApp;
