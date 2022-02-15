import type { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import QuizWrapper from "../src/components/quiz/QuizWrapper";
import axios from "axios";
import { useContext, useEffect } from "react";
import { QuestionsContext } from "../src/components/context/questionsContext";

interface IApiresponse {
  _id: string;
  question: string;
  answer: {
    _id: string;
    text: string;
    correct: boolean;
  }[];
}

const Home: NextPage = (props: any) => {
  const { allQuestionsFunction } = useContext(QuestionsContext);

  useEffect(() => {
    if (props.questions.length > 0) {
      allQuestionsFunction(props.questions);
    }
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Quiz app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuizWrapper />
    </div>
  );
};

export async function getStaticProps() {
  let response = await axios({
    url: "https://lotr-quiz.herokuapp.com/read",
    method: "GET",
  });

  return {
    props: {
      questions: response.data.map((question: IApiresponse) => {
        return {
          id: question._id,
          question: question.question,
          answer: question.answer.map((answer) => {
            return {
              id: answer._id,
              text: answer.text,
              correct: answer.correct,
            };
          }),
        };
      }),
    },
    revalidate: 3600,
  };
}

export default Home;