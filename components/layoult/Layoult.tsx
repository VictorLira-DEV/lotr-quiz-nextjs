import { ReactNode } from "react";
import Header from "./Header";
import { StyledLayoult } from "../styles/Layoult.styled";

interface Ilayoult {
  children: ReactNode;
}

function Layoult(props: Ilayoult) {
  return (
    <section>
      <Header />
      <StyledLayoult>{props.children}</StyledLayoult>
    </section>
  );
}

export default Layoult;
