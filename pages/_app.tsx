import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layoult from "../components/layoult/Layoult";
import QuestionContextProvider from "../components/context/questionsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layoult>
      <QuestionContextProvider>
        <Component {...pageProps} />
      </QuestionContextProvider>
    </Layoult>
  );
}

export default MyApp;
