import { ReactNode } from "react";
import Header from "./Header";
import { StyledLayoult } from "../styles/Layoult.styled";
import Footer from '../layoult/Footer'

interface Ilayoult {
  children: ReactNode;
}

function Layoult(props: Ilayoult) {
  return (
    <section>
      <Header />
      <StyledLayoult>{props.children}</StyledLayoult>
      <Footer/>
    </section>
  );
}

export default Layoult;
