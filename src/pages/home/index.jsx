import React from "react";

import Header from "components/header";
import Container  from "components/container";

import Illustration from "assets/images/illustration-home-mobile.png";
import * as Styles from "./styles";

export default function Home() {
  return (
    <Styles.Content>
      <Container>
        <Header />
        <Styles.Title>Find your next green friend</Styles.Title>
        <Styles.Button>start quizz</Styles.Button>
      </Container>

      <Styles.Image src={Illustration} alt="" />
    </Styles.Content>
  );
}
