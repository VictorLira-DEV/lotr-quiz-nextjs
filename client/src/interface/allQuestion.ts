export interface IallQuestion {
  id: string;
  question: string;
  answer: {
    id: string;
    text: string;
    correct: boolean;
  }[];
}
