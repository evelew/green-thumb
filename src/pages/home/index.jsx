import React from "react";

import LogoGreenthumb from "assets/images/logo-greenthumb.svg";

import Header from "components/header";
import Container  from "components/container";

import * as Styles from "./styles";

export default function Home() {
  return (
    <Styles.Content>
      <Container>
        <Header />
        <Styles.LogoDesktop>
          <img src={LogoGreenthumb} alt=""/>
        </Styles.LogoDesktop>
        <Styles.Title>Find your next green friend</Styles.Title>
        <Styles.Button>start quizz</Styles.Button>
      </Container>
    </Styles.Content>
  );
}
